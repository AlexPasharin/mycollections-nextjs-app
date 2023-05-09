type NullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? K : never;
}[keyof T];

type NullableToOptional<T> = {
  [K in keyof T as Exclude<K, NullableKeys<T>>]: T[K];
} & {
  [K in NullableKeys<T>]?: NonNullable<T[K]>;
};

export interface DBEntry {
  id: number;
  name: string;
  release_date: string | null;
  type: number;
  artist_id: number;
  entry_artist_id: number | null;
}

export type DBEntry2 = NullableToOptional<{
  id: string;
  name: string;
  release_date: string | null;
  type: number;
  artist_id: string;
  entry_artist_id: string | null;
  part_of_queen_collection: boolean | null;
}>;

export interface DBEntryType {
  id: number;
  name: string;
}

export interface DBRelease {
  id: number;
  entry_id: number;
  version: string;
  discogs_url: string | null;
  name: string | null;
  format: string;
  release_date: string | null;
  country: string | null;
  label: string | null;
  cat_number: string | null;
  comment: string | null;
  condition_problems: string | null;
}

export interface DBRelease2 {
  id: string;
  entry_id: string;
  version: string;
  discogs_url: string | null;
  name: string | null;
  format: string;
  release_date: string | null;
  countries: string[] | null;
  cat_numbers: unknown;
  matrix_runout: unknown;
  comment: string | null;
  condition_problems: string | null;
  release_artist_id: string | null;
  tags: string[];
  parent_releases: string[];
  jukebox_hole: boolean | null;
  picture_sleeve: boolean | null;
  speed: unknown;
  part_of_queen_collection: boolean | null;
}
