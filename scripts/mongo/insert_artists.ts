// import { getJSONData } from "../../utils";
import { getArtists } from "../utils/db";
import { insertArtists } from "../../mongodb/artists";

// getJSONData<{ id: number; name: string }[]>(
//   "/artists/debug/queen_related"
// ).then(

getArtists()
  .then(insertArtists)
  .then(({ insertedCount }) => {
    console.log("Inserted documents:", insertedCount);
  });
