import * as dotenv from "dotenv";
import knex from "knex";

dotenv.config();

const dbConnection = () =>
  knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
    },
  });

export const getNonQueenEntries = async () => {
  const connection = dbConnection();
  const entries = await connection("non_queen").select();

  connection.destroy();

  return entries;
};
