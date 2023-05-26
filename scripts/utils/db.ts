import * as dotenv from "dotenv";
import knex from "knex";
import { NonQueenDBRelease } from "../../types/non_queen";
import { DBMovie } from "../../types/movies";
import {
  DBEntryType,
  type DBEntry,
  DBRelease,
  DBEntry2,
  DBRelease2,
} from "../../types/entries";
import { DBArtist2 } from "../../types/artists";

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
