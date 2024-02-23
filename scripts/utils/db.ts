import * as dotenv from "dotenv";
import knex from "knex";
import { DBMovie } from "../../types/movies";
import {
  DBEntryType,
  type DBEntry,
  DBRelease,
  DBEntry2,
  DBRelease2,
} from "../../types/entries";
import { DBArtist2 } from "../../types/artists";
import { connect } from "http2";

dotenv.config();

export const dbConnection = () =>
  knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
    },
  });

export const getArtists = fetchAllRowsFromTable<DBArtist2>("artists");

export const getArtistsNew = fetchAllRowsFromTable<DBArtist2>("artists_2");

export const getQueenEntries = fetchAllRowsFromTable<DBEntry>("entries");
export const getEntries = fetchAllRowsFromTable<DBEntry2>("entries_2");

export const getFormats = fetchAllRowsFromTable("formats");

export const getEntryTypes = fetchAllRowsFromTable<DBEntryType>("types");

export const getQueenReleases = fetchAllRowsFromTable<DBRelease>("releases");

export const getReleases = fetchAllRowsFromTable<DBRelease2>("releases_2");

export const getCountries = fetchAllRowsFromTable<{ id: string; name: string }>(
  "countries"
);

export const getLabels = fetchAllRowsFromTable<{ name: string }>("labels");

interface NonQueenRelease {
  id: number;
  name: string;
  format: string;
  comment?: string;
  discogs_url?: string;
}

interface NonQueenDBRelease
  extends Omit<NonQueenRelease, "discogs_url" | "comment"> {
  artist_name: string;
  index_by: string | null;
  discogs_url: string | null;
  comment: string | null;
}

export const getNonQueenEntries =
  fetchAllRowsFromTable<NonQueenDBRelease>("non_queen");

export const getMovies = fetchAllRowsFromTable<DBMovie>("movies");

function fetchAllRowsFromTable<T extends {}>(tableName: string) {
  return async () => {
    const connection = dbConnection();
    const entries = await connection<T>(tableName).select();

    connection.destroy();

    return entries;
  };
}

export const updateEntries = async (
  entries: Partial<DBEntry2> & { id: string }[]
) => {
  const connection = dbConnection();

  await Promise.all(entries.map(updateEntry(connection)));

  connection.destroy();
};

const updateEntry =
  (connection: ReturnType<typeof dbConnection>) =>
  (entry: Partial<DBEntry2> & { id: string }) =>
    connection("entries_2")
      .where({ id: entry.id })
      .update(entry)
      .catch(() => {
        console.error(`Could not update entry ${entry.id}`);
      });

export const updateReleases = async (
  releases: Partial<DBRelease2> & { id: string }[]
) => {
  const connection = dbConnection();

  await Promise.all(releases.map(updateRelease(connection)));

  connection.destroy();
};

const updateRelease =
  (connection: ReturnType<typeof dbConnection>) =>
  (release: Partial<DBRelease2> & { id: string }) =>
    connection("releases_2")
      .where({ id: release.id })
      .update(release)
      .then(() => `Succesfully updated ${release.id}`)
      .catch((error) => {
        console.error(`Could not update release ${release.id}`);
        console.error(error);
        console.log();
      });
