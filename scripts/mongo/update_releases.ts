import { MongoArtist, removeNulls } from "../../mongodb/artists";
import { DBEntry2 } from "../../types/entries";
import {
  getArtistsNew,
  getEntries,
  getReleases,
  getEntryTypes,
} from "../utils/db";

import {
  fromPairs,
  groupBy,
  indexBy,
  mapObjIndexed,
  omit,
  prop,
  propOr,
  sortBy,
  toPairs,
} from "ramda";

import { insertReleases } from "../../mongodb/releases";

Promise.all([
  getArtistsNew(),
  getEntries(),
  getReleases(),
  getEntryTypes(),
]).then(async ([artists, entries, releases, types]) => {
  // group entries by artist
  const entriesGroupedByArtists = groupBy(
    (entry) => entry.artist_id.toString(),
    entries
  );

  const releasesGroupedByEntries = groupBy(
    (release) => release.entry_id.toString(),
    releases
  );

  const entryTypesMap = indexBy(prop("id"), types);

  const data = artists.reduce<MongoArtist[]>((acc, artist) => {
    const entries = entriesGroupedByArtists[artist.id] || [];

    const enhancedEntries = entries.reduce<DBEntry2[]>((acc, entry) => {
      const releases = releasesGroupedByEntries[entry.id];

      if (!releases) {
        return acc;
      }

      return [
        ...acc,
        {
          ...removeNulls(entry),
          releases: sortBy(
            propOr("2999", "release_date"),
            releases.map((release) => ({
              ...removeNulls(omit(["entry_id"], release)),
              name: release.name || undefined,
              part_of_queen_collection:
                release.part_of_queen_collection || undefined,
              jukebox_hole: release.jukebox_hole || undefined,
              picture_sleeve:
                release.picture_sleeve === false ? false : undefined,
            }))
          ),
        },
      ];
    }, []);

    if (!enhancedEntries.length) {
      return acc;
    }

    const { id, ...rest } = artist;

    const enhancedArtist = removeNulls({
      ...rest,
      _id: id,
      entries: mapObjIndexed(
        (entries) =>
          sortBy(
            propOr("2999", "release_date"),
            entries.map((e) => ({
              ...omit(["type", "artist_id"], e),
              part_of_queen_collection: e.part_of_queen_collection || undefined,
            }))
          ),
        groupBy<DBEntry2>(
          (entry) => entryTypesMap[entry.type].name,
          enhancedEntries
        )
      ),
    });

    enhancedArtist.entries = fromPairs(
      sortBy(prop(0), toPairs(enhancedArtist.entries))
    );

    return [...acc, enhancedArtist];
  }, []);

  const sortedData = sortBy(
    (artist) => artist.name_for_sorting || artist.name,
    data
  );

  await insertReleases(sortedData);
});
