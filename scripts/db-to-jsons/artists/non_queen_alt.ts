import { difference, differenceWith, intersection, uniq } from "ramda";
import { readJSONFromFile, writeToJsonFile } from "../../utils";
import {
  dbConnection,
  getArtistsNew,
  getNonQueenEntries,
} from "../../utils/db";

readJSONFromFile("data/artists/non_queen.json").then(async (artists) => {
  const artistsWithParents = artists.filter((a: any) => a.parent_artists);
  const parents = artistsWithParents.map((a: any) => a.parent_artists).flat();

  console.log(parents);

  const connection = dbConnection();
  const dbArtists = await connection("artists_2")
    .select("id", "name")
    .whereIn("name", parents);

  await Promise.all(
    artistsWithParents.map(async (artist: any) => {
      const parentArtists = artist.parent_artists.map(
        (parent: any) => dbArtists.find((a) => a.name === parent).id
      );

      console.log(parentArtists);

      await connection("artists_2")
        .where({ name: artist.name })
        .update({ parent_artists: JSON.stringify(parentArtists) });
    })
  );

  connection.destroy();
  return;

  await connection("artists_2").insert(
    artists.map((a: any) => ({ ...a, parent_artists: null }))
  );

  // await writeToJsonFile(ext_artists, "artists/non_queen", {
  //   includeDebugCopy: false,
  //   compress: false,
  // });
});
