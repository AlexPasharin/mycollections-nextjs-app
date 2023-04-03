import { readJSONFromFile, writeToJsonFile } from "../../utils";

readJSONFromFile("data/artists/queen_related_extended_copy.json").then(
  async (artists) => {
    const extendedArtists = artists.map((a: any) => {
      let { invertForSortingName, nameForSorting, ...rest } = a;

      nameForSorting = invertForSortingName
        ? a.name.split(/\s+/).reverse().join(", ")
        : nameForSorting;

      return {
        ...rest,
        nameForSorting,
        parentArtists: a.parentArtists || null,
      };
    });

    // await writeToJsonFile(
    //   extendedArtists,
    //   "artists/queen_related_extended_copy",
    //   { includeDebugCopy: false, compress: false }
    // );
  }
);
