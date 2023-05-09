import {
  dbConnection,
  getArtists,
  getArtistsNew,
  getQueenEntries,
} from "../utils/db";

Promise.all([getQueenEntries(), getArtists(), getArtistsNew()]).then(
  async ([entries, oldArtists, newArtists]) => {
    const newArtistsMap = newArtists.reduce<Record<string, string>>(
      (acc, artist) => ({ ...acc, [artist.name]: artist.id }),
      {}
    );

    const artistsMap = oldArtists.reduce<Record<string, string>>(
      (acc, artist) => {
        const { name, id } = artist;

        const newArtistID = newArtistsMap[name];

        return { ...acc, [id.toString()]: newArtistID };
      },
      {}
    );

    const connection = dbConnection();

    await Promise.all(
      entries.map((entry) => {
        const { name, type, release_date, artist_id, entry_artist_id } = entry;

        const artistID = artistsMap[artist_id.toString()];
        const newEntryArtistID = entry_artist_id
          ? artistsMap[entry_artist_id.toString()]
          : null;

        return connection("entries_2").insert({
          name,
          type,
          release_date,
          artist_id: artistID,
          entry_artist_id: newEntryArtistID,
          part_of_queen_collection: true,
        });
      })
    );

    connection.destroy();
  }
);
