import * as dotenv from "dotenv";
import knex from "knex";
import { DBMovie } from "../types/movies";
import { DBEntryType, DBEntry2, DBRelease2 } from "../types/entries";
import { DBArtist } from "../types/artists";

dotenv.config();

export const dbConnection = () =>
  knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
    },
  });

export const getArtists = fetchAllRowsFromTable<DBArtist>("artists_2");
export const getEntries = fetchAllRowsFromTable<DBEntry2>("entries_2");
export const getEntryTypes = fetchAllRowsFromTable<DBEntryType>("types");
export const getReleases = fetchAllRowsFromTable<DBRelease2>("releases_2");
export const getCountries = fetchAllRowsFromTable<{ id: string; name: string }>(
  "countries"
);
export const getLabels = fetchAllRowsFromTable<{ name: string }>("labels");
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
      .then(() => console.log(`Succesfully updated ${release.id}`))
      .catch((error) => {
        console.error(`Could not update release ${release.id}`);
        console.error(error);
        console.log();
      });

export const insertReleases = async (releases: Partial<DBRelease2>[]) => {
  const connection = dbConnection();

  await connection("releases_2")
    .insert(releases)
    .then(() => console.log(`Succesfully insert new releases into DB`))
    .catch((error) => {
      console.error(`Could not insert new releases`);
      console.error(error);
      console.log();
    });

  connection.destroy();
};

export const insertEntries = async (entries: Partial<DBEntry2>[]) => {
  const connection = dbConnection();

  await connection("entries_2")
    .insert(entries)
    .then(() => console.log(`Succesfully insert new entries into DB`))
    .catch((error) => {
      console.error(`Could not insert new entries`);
      console.error(error);
      console.log();
    });

  connection.destroy();
};
