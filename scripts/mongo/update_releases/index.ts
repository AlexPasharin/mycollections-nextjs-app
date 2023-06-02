import {
  fromPairs,
  groupBy,
  indexBy,
  map,
  mapObjIndexed,
  omit,
  pipe,
  sortBy,
  toPairs,
} from "ramda";
import {
  getArtistsNew,
  getEntries,
  getReleases,
  getCountries,
  getEntryTypes,
  getLabels,
} from "../../utils/db";
import { validateArtist } from "./validation/artists";
import { validateEntries } from "./validation/entries";
import { validateRelease } from "./validation/releases";
import { DBEntryType } from "../../../types/entries";
import { writeToJsonFile } from "../../utils";

import {
  deleteArtists,
  getAllReleases,
  upsertReleases,
} from "../../../mongodb/releases";

import {
  EnhancedEntry,
  MongoArtist,
  MongoEntry,
} from "../../../types/mongo/releases";

Promise.all([
  getArtistsNew(),
  getEntries(),
  getReleases(),
  getCountries(),
  getLabels(),
  getEntryTypes(),
  getAllReleases(),
])
  .then(
    async ([
      artists,
      entries,
      releases,
      countries,
      labels,
      entryTypes,
      mongoReleases,
    ]) => {
      const artistIDsSet = new Set(artists.map((a) => a.id));

      let validatedArtists = artists.map((a) => {
        const validatedArtist = validateArtist(a, artistIDsSet);

        if ("errors" in validatedArtist) {
          console.error(`Encountered validation errors on following artist:`);
          console.error(JSON.stringify(a, null, 4));
          console.error();
          console.error("Errors encountered:");
          validatedArtist.errors.forEach((e) => console.log(e));

          throw "Terminating";
        }

        return validatedArtist;
      });

      validatedArtists = sortBy(
        (artist) => artist.name_for_sorting || artist.name,
        validatedArtists
      );

      console.log(`Artists validated successfully`);

      // validate entries

      const entryIDSet = new Set(entries.map((a) => a.id));

      let validatedEntries = entries.map((e) => {
        const validatedEntry = validateEntries(e, entryIDSet);

        if ("errors" in validatedEntry) {
          console.error(`Encountered validation errors on following entry:`);
          console.error(JSON.stringify(e, null, 4));
          console.error();
          console.error("Errors encountered:");
          validatedEntry.errors.forEach((e) => console.log(e));

          throw "Terminating";
        }

        return validatedEntry;
      });

      console.log(`Entries validated successfully`);

      const releaseIDSet = new Set(releases.map((a) => a.id));

      const countriesMap = countries.reduce<Record<string, string | undefined>>(
        (acc, { id, name }) => ({ ...acc, [id]: name }),
        {}
      );

      const labelSet = new Set(labels.map((l) => l.name));

      const validatedReleases = releases.map((release) => {
        const validatedRelease = validateRelease(
          release,
          releaseIDSet,
          countriesMap,
          labelSet
        );

        if ("errors" in validatedRelease) {
          console.error(`Encountered validation errors on following release:`);
          console.error(JSON.stringify(release, null, 4));
          console.error();
          console.error("Errors encountered:");
          validatedRelease.errors.forEach((e) => console.log(e));

          throw "Terminating";
        }

        return validatedRelease;
      });

      console.log(`Releases validated successfully\n`);

      const entriesGroupedByArtist = groupBy(
        (e) => e.artist_id,
        validatedEntries
      );

      const releasesGroupedByEntries = groupBy(
        (r) => r.entry_id,
        validatedReleases
      );

      const typesMap = mapObjIndexed(
        (type: DBEntryType) => type.name,
        indexBy((type) => type.id.toString(), entryTypes)
      );

      const enhancedArtists: MongoArtist[] = validatedArtists.map(
        ({ id, ...artist }) => {
          const mongoArtist = { _id: id, ...artist };

          let artistEntries: EnhancedEntry[] | undefined =
            entriesGroupedByArtist[id];

          if (!artistEntries) {
            return mongoArtist;
          }

          artistEntries = artistEntries.map((e) => {
            const entryReleases = releasesGroupedByEntries[e.id];

            return entryReleases
              ? {
                  ...e,
                  releases: sortByReleaseDate(
                    entryReleases.map((r) => omit(["entry_id"], r))
                  ),
                }
              : e;
          });

          const artistEntriesGroupedByType = pipe(
            groupBy((e) => e.type.toString()),
            toPairs<EnhancedEntry[]>,
            sortBy(([type]) => Number(type)),
            map<[string, EnhancedEntry[]], [string, MongoEntry[]]>(
              ([type, entries]) => [
                typesMap[type],
                sortByReleaseDate(
                  entries.map((e) => omit(["artist_id", "type"], e))
                ),
              ]
            ),
            fromPairs
          )(artistEntries);

          return {
            ...mongoArtist,
            entries: artistEntriesGroupedByType,
          };
        }
      );

      await writeToJsonFile(enhancedArtists, "enhanced_artists", {
        includeDebugCopy: false,
        compress: false,
      });

      const artistsInMongoOnly = mongoReleases.filter(
        ({ _id }) => !artistIDsSet.has(_id)
      );

      await deleteArtists(artistsInMongoOnly);
      console.log();

      await upsertReleases(enhancedArtists, mongoReleases);
    }
  )
  .catch((e) => {
    console.error(e);
  });

const sortByReleaseDate = <T extends { release_date?: string }>(entries: T[]) =>
  sortBy(({ release_date }) => {
    if (!release_date) {
      return "2999";
    }

    const dateMatch = release_date.match(
      /^(\d{4})(?:-(\d{2}))?(?:-(\d{2}))?$/
    )!; // we use this function only for values of release_date that confirm to this regex

    const year = dateMatch[1];
    const month = dateMatch[2] || "12";
    const day = dateMatch[3] || "31";

    return `${year}-${month}-${day}`;
  }, entries);
