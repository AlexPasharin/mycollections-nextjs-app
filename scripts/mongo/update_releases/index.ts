import {
  ascend,
  fromPairs,
  groupBy,
  indexBy,
  map,
  mapObjIndexed,
  omit,
  pipe,
  prop,
  sortBy,
  sortWith,
  toPairs,
} from "ramda";
import { DBEntryType } from "../../../types/entries";

import {
  deleteArtists,
  getAllReleases as getReleasesFromMongo,
  upsertReleases,
} from "../../../mongodb/releases";

import { EnhancedEntry, MongoEntry } from "../../../types/mongo/releases";
import validateDBArtists from "../../../db/validation/artists";
import validateDBEntries from "../../../db/validation/entries";
import { getEntries, getEntryTypes } from "../../../db";
import validateDBReleases from "../../../db/validation/releases";

const updateReleases = async () => {
  try {
    // validate artists
    const validatedArtists = await validateDBArtists();

    // validate entries
    const entries = await getEntries();
    const validatedEntries = await validateDBEntries(entries);

    // validate releases
    const validatedReleases = await validateDBReleases(entries);

    if (!validatedArtists || !validatedEntries || !validatedReleases) {
      return;
    }

    const artists = sortBy(
      (artist) => artist.name_for_sorting || artist.name,
      validatedArtists
    );

    const entriesGroupedByArtist = groupBy(
      (e) => e.artist_id,
      validatedEntries
    );

    const releasesGroupedByEntries = groupBy(
      (r) => r.entry_id,
      validatedReleases
    );

    const entryTypes = await getEntryTypes();

    const typesMap = mapObjIndexed(
      (type: DBEntryType) => type.name,
      indexBy((type) => type.id.toString(), entryTypes)
    );

    const enhancedArtists = artists.map(({ id, ...artist }) => {
      const mongoArtist = { _id: id, ...artist };

      const artistEntries = (entriesGroupedByArtist[id] || []).map((e) => {
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

      if (!artistEntries.length) {
        return mongoArtist;
      }

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
    });

    const artistIDsSet = new Set(enhancedArtists.map(({ _id }) => _id));

    const mongoReleases = await getReleasesFromMongo();

    const artistsInMongoOnly = mongoReleases.filter(
      ({ _id }) => !artistIDsSet.has(_id)
    );

    await deleteArtists(artistsInMongoOnly);
    console.log();

    await upsertReleases(enhancedArtists, mongoReleases);
  } catch (e) {
    console.error(e);
  }
};

const sortByReleaseDate = <T extends { release_date?: string; id: string }>(
  entries: T[]
): T[] =>
  sortWith(
    [
      ascend(({ release_date }) => {
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
      }),
      ascend(prop<string>("id")), // no idea why ramda types demand redundant <string> parameter, but does not work without it
    ],
    entries
  );

updateReleases();
