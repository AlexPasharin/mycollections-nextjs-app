import * as dotenv from "dotenv";
import knex from "knex";
import { NonQueenDBRelease } from "../../types/non_queen";
import { DBMovie } from "../../types/movies";
import { DBEntryType, type DBEntry, DBRelease } from "../../types/entries";

dotenv.config();

export const dbConnection = () =>
  knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
    },
  });

export const getArtists = fetchAllRowsFromTable<{ id: number; name: string }>(
  "artists"
);

export const getQueenEntries = fetchAllRowsFromTable<DBEntry>("entries");

export const getEntryTypes = fetchAllRowsFromTable<DBEntryType>("types");

export const getQueenReleases = fetchAllRowsFromTable<DBRelease>("releases");

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
