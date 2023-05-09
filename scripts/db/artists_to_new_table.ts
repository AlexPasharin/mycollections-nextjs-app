import { filter, flatten, map, pipe, uniq } from "ramda";
import { DBArtist2 } from "../../types/artists";
import { readJSONFromFile, writeToJsonFile } from "../utils";
import { dbConnection } from "../utils/db";

readJSONFromFile("data/artists/queen_related_extended_copy.json").then(
  async (artists: Omit<DBArtist2, "id">[]) => {
    // const allArtistsAmount = artists.length;

    // console.log(artists.length);

    // const artistsWithNoParents = artists.filter((a: any) => !a.parentArtists);
    // const artistsWithNoParentsAmount = artistsWithNoParents.length;
    // console.log({ allArtistsAmount, artistsWithNoParentsAmount });

    const artistsWithParents = artists.filter(
      (
        a
      ): a is typeof artists[number] & {
        parentArtists: string[];
      } => !!a.parentArtists
    );

    const parents = pipe(
      map<typeof artistsWithParents[number], string[]>((a) => a.parentArtists),
      flatten,
      uniq
    )(artistsWithParents);

    const connection = dbConnection();

    const parentArtistsFromDB = await findArtistsByNames(parents);

    const artistsWithParentsFromDB = await findArtistsByNames(
      artistsWithParents.map((a) => a.name)
    );

    const parentsMap = parentArtistsFromDB.reduce(
      (acc, p) => ({ ...acc, [p.name]: p.id }),
      {}
    );

    //    console.log(artistsWithParentsFromDB);

    await Promise.all(
      artistsWithParentsFromDB.map((a, idx) => {
        const { id } = a;
        const { parentArtists } = artistsWithParents[idx];

        return connection("artists_2")
          .update({
            parent_artists: JSON.stringify(
              parentArtists.map((p) => parentsMap[p])
            ),
          })
          .where({ id });
      })
    );

    // await Promise.all(
    //   artists.map((a: any) =>
    //     connection("artists_2").insert({
    //       name: a.name,
    //       name_for_sorting: a.nameForSorting,
    //       other_names: JSON.stringify(a.otherNames),
    //     })
    //   )
    // );

    //  await connection("artists_2").del();

    connection.destroy();

    function findArtistsByNames(names: string[]) {
      return Promise.all(
        names.map((p) =>
          connection("artists_2")
            .select(["id", "name"])
            .where({ name: p })
            .first()
        )
      );
    }
  }
);
