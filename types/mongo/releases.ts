import { Entry, ValidatedDBArtist, ValidatedDBRelease } from "../validation";

export type EnhancedEntry = Entry & {
  releases?: Omit<ValidatedDBRelease, "entry_id">[];
};

export type MongoEntry = Omit<EnhancedEntry, "artist_id" | "type">;

export type MongoArtist = Omit<ValidatedDBArtist, "id"> & {
  _id: string;
  entries?: { [index: string]: MongoEntry[] };
};
