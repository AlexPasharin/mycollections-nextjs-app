import { uniq } from "ramda";
import { readJSONFromFile } from "../utils";
import { dbConnection } from "../utils/db";

readJSONFromFile("data/non_queen/releases.json").then(
  async (nonQueenReleases) => {
    const releases = nonQueenReleases.map((r: any) => {
      const {
        artist,
        entry_name,
        countries,
        cat_numbers,
        parent_releases,
        tags,
        matrix_runout,
        ...rest
      } = r;

      return {
        ...rest,
        countries: JSON.stringify(
          Array.isArray(countries) && countries.length === 1
            ? countries[0]
            : countries || null
        ),
        cat_numbers: cat_numbers ? JSON.stringify(cat_numbers) : null,
        matrix_runout: matrix_runout ? JSON.stringify(matrix_runout) : null,
        tags: tags ? JSON.stringify(tags) : null,
        parent_releases: parent_releases
          ? JSON.stringify(parent_releases)
          : null,
      };
    });

    const connection = dbConnection();

    await connection("releases_2").insert(releases);

    console.log(releases.length);
    console.log("finished");
    // console.log(uniq(releases));
  }
);
