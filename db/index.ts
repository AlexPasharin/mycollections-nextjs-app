import * as dotenv from "dotenv";
import knex from "knex";
import { DBMovie } from "../types/movies";
import { DBEntryType, DBEntry2, DBRelease2 } from "../types/entries";
import { DBArtist } from "../types/artists";

import pc from "picocolors";

dotenv.config();

const dbConnection = () =>
  knex({
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_DATABASE,
    },
  });

type Connection = ReturnType<typeof dbConnection>;

const useConnection = async <T>(cb: (c: Connection) => Promise<T>) => {
  try {
    const connection = dbConnection();

    const result = await cb(connection);

    connection.destroy();

    return result;
  } catch (e) {
    if (
      e !== null &&
      typeof e === "object" &&
      "code" in e &&
      e.code === "ECONNREFUSED"
    ) {
      console.error(
        pc.red("Database connection error! Make sure database is up. Exiting.")
      );
      process.exit(1);
    }

    throw e;
  }
};

const fetchAllRowsFromTable =
  <T extends {}>(tableName: string) =>
  () =>
    useConnection((c) => c<T>(tableName).select());

let artists: DBArtist[];

export const getArtists = async (useCache = false) => {
  if (!useCache || !artists) {
    artists = await fetchAllRowsFromTable<DBArtist>("artists_2")();
  }

  return artists;
};

let entries: DBEntry2[];

export const getEntries = async (useCache?: boolean) => {
  if (!useCache || !entries) {
    entries = await fetchAllRowsFromTable<DBEntry2>("entries_2")();
  }

  return entries;
};
export const getEntryTypes = fetchAllRowsFromTable<DBEntryType>("types");
export const getReleases = fetchAllRowsFromTable<DBRelease2>("releases_2");
export const getCountries = fetchAllRowsFromTable<{ id: string; name: string }>(
  "countries"
);
export const getLabels = fetchAllRowsFromTable<{ name: string }>("labels");
export const getMovies = fetchAllRowsFromTable<DBMovie>("movies");

export const updateEntries = async (
  entries: Partial<DBEntry2> & { id: string }[]
) => useConnection((c) => Promise.all(entries.map(updateEntry(c))));

export const updateReleases = async (
  releases: Partial<DBRelease2> & { id: string }[]
) => useConnection((c) => Promise.all(releases.map(updateRelease(c))));

export const insertReleases = async (releases: Partial<DBRelease2>[]) =>
  useConnection((c) =>
    c("releases_2")
      .insert(releases)
      .then(() => console.log(`Succesfully insert new releases into DB`))
      .catch((error) => {
        console.error(`Could not insert new releases`);
        console.error(error);
        console.log();
      })
  );

export const insertEntries = async (entries: Partial<DBEntry2>[]) =>
  useConnection((c) =>
    c("entries_2")
      .insert(entries)
      .then(() => console.log(`Succesfully insert new entries into DB`))
      .catch((error) => {
        console.error(`Could not insert new entries`);
        console.error(error);
        console.log();
      })
  );

const updateEntry =
  (connection: ReturnType<typeof dbConnection>) =>
  (entry: Partial<DBEntry2> & { id: string }) =>
    connection("entries_2")
      .where({ id: entry.id })
      .update(entry)
      .catch(() => {
        console.error(`Could not update entry ${entry.id}`);
      });

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
