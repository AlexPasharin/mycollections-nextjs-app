import { writeToJsonFile } from "../../utils";
import { getArtists } from "../../utils/db";

getArtists().then(async (artists) => {
  await writeToJsonFile(artists, "artists/queen_related");
});
