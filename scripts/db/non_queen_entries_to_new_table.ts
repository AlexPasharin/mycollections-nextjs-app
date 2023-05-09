import { readJSONFromFile } from "../utils";
import { dbConnection } from "../utils/db";

readJSONFromFile("data/non_queen/collection_2.json").then(
  async (newReleases) => {
    const newEntries = (
      newReleases as {
        artist: string;
        artist_id: string;
        entries: { name: string; discogs_url: string }[];
      }[]
    )
      .map((r) => {
        const { artist_id, entries } = r;

        return entries.map(({ discogs_url, ...rest }) => ({
          ...rest,
          artist_id,
          discogs_url: null,
        }));
      })
      .flat();

    const connection = dbConnection();

    await connection("entries_2").insert(newEntries);

    connection.destroy();
  }
);
