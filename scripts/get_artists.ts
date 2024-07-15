import { getArtists } from "../db";

getArtists().then((artists) => console.log(JSON.stringify(artists, null, 4)));
