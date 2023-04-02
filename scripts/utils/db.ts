import * as dotenv from "dotenv";
import knex from "knex";
import { NonQueenDBRelease } from "../../types/non_queen";
import { DBMovie } from "../../types/movies";
import { DBEntryType, type DBEntry } from "../../types/entries";

dotenv.config();

export const dbConnection = () =>
  knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
    },
  });

export const getArtists = fetchFromDB<{ id: number; name: string }>({
  tableName: "artists",
});

export const getQueenEntries = fetchFromDB<DBEntry>({
  tableName: "entries",
});

export const getEntryTypes = fetchFromDB<DBEntryType>({
  tableName: "types",
});

export const getNonQueenEntries = fetchFromDB<NonQueenDBRelease>({
  tableName: "non_queen",
});

export const getMovies = fetchFromDB<DBMovie>({ tableName: "movies" });

function fetchFromDB<T extends {}>({ tableName }: { tableName: string }) {
  return async () => {
    const connection = dbConnection();
    const entries = await connection<T>(tableName).select();

    connection.destroy();

    return entries;
  };
}
