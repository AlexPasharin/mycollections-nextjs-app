import { writeToJsonFile } from "../../utils";
import { getArtists } from "../../utils/db";

getArtists().then(async (artists) => {
  console.log("Amount of queen related artists in DB", artists.length);
  //  await writeToJsonFile(artists, "artists/queen_related");
});
