import { differenceWith, intersection } from "ramda";
import { readJSONFromFile, writeToJsonFile } from "../../utils";

readJSONFromFile("data/artists/queen_related_extended_copy_2.json").then(
  async (artists) => {
    const processedArtists = artists.map((artist: any) => {
      let { name, nameForSorting, invertForSortingName, ...rest } = artist;

      if (name.startsWith("The ")) {
        nameForSorting = name.substring(4) + ", The";
      } else if (invertForSortingName) {
        nameForSorting = name.split(/\s+/).reverse().join(", ");
      }

      return {
        ...rest,
        name,
        nameForSorting,
      };
    });

    await writeToJsonFile(
      processedArtists,
      "artists/queen_related_extended_copy_3",
      {
        includeDebugCopy: false,
        compress: false,
      }
    );
  }
);
