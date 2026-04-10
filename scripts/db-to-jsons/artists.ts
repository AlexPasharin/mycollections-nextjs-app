import { prop, sortBy } from "ramda";
import { getArtists } from "../../db";
import { writeToJsonFile } from "../utils";

getArtists().then(async (dbArtists) => {
  const artists = sortBy(prop("name"), dbArtists);

  await writeToJsonFile(artists, "artists/collection");
});
