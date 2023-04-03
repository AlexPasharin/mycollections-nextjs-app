import {
  fromPairs,
  groupBy,
  mapObjIndexed,
  pipe,
  prop,
  sortBy,
  toPairs,
  uniq,
} from "ramda";
import { getNonQueenEntries } from "../../utils/db";
import { writeToJsonFile } from "../../utils";

getNonQueenEntries().then(async (releases) => {
  const releasesArtists = releases.map((a) => ({
    name: a.artist_name,
    indexBy: a.index_by,
  }));

  type releasesArtist = typeof releasesArtists[number];

  const artists = pipe(
    groupBy<releasesArtist>(prop("name")),
    mapObjIndexed((artistData) => ({
      indexBy: uniq(
        artistData
          .map(({ indexBy }) => indexBy)
          .filter((index): index is string => Boolean(index))
      ),
    })),
    toPairs<{ indexBy: string[] }>,
    sortBy(([artistName]) => artistName),
    fromPairs
  )(releasesArtists);

  await writeToJsonFile(artists, "artists/non_queen");
});
