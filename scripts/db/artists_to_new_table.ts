import { DBArtist2 } from "../../types/artists";
import { readJSONFromFile, writeToJsonFile } from "../utils";
import { dbConnection } from "../utils/db";

readJSONFromFile("data/artists/queen_related_extended_copy_3.json").then(
  async (artists: Omit<DBArtist2, "id">[]) => {
    // const allArtistsAmount = artists.length;

    // console.log(artists.length);

    // const artistsWithNoParents = artists.filter((a: any) => !a.parentArtists);
    // const artistsWithNoParentsAmount = artistsWithNoParents.length;
    // console.log({ allArtistsAmount, artistsWithNoParentsAmount });

    const artistsWithParents = artists.filter((a) => a.parentArtists);

    // const parents = artistsWithParents.flatMap((a) => a.parentArtists || []);
    // const artistsSet = new Set(artists.map((a) => a.name));
    // const newParents = parents.filter((p) => !artistsSet.has(p));

    // const newArtists: Required<Omit<DBArtist, "id">>[] = newParents.map(
    //   (p) => ({
    //     name: p,
    //     otherNames: null,
    //     parentArtists: null,
    //     nameForSorting: null,
    //   })
    // );

    // const allArtists = [...artists, ...newArtists];

    // await writeToJsonFile(
    //   allArtists,
    //   "artists/queen_related_extended_copy_2.json",
    //   { includeDebugCopy: false, compress: false }
    // );

    // console.log(newParents);

    const connection = dbConnection();

    await Promise.all(
      artists.map((a: any) =>
        connection("artists_2").insert({
          name: a.name,
          name_for_sorting: a.nameForSorting,
          other_names: JSON.stringify(a.otherNames),
        })
      )
    );

    //  await connection("artists_2").del();

    connection.destroy();
  }
);
