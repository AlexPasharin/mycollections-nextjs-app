export interface DBEntry {
  id: number;
  name: string;
  release_date: string | null;
  type: number;
  artist_id: number;
  entry_artist_id: number | null;
}

export type DBEntry2 = {
  id: string;
  name: string;
  type: number;
  release_date: string | null;
  artist_id: string;
  entry_artist_id: string | null;
  comment: string | null;
  discogs_url: string | null;
  part_of_queen_collection: boolean | null;
  relation_to_queen: string | null;
  tags: unknown;
  parent_entries: unknown;
  entry_artist_name: string | null;
};

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
  name: string | null;
  version: string;
  format: string;
  discogs_url: string | null;
  release_date: string | null;
  countries: unknown;
  cat_numbers: unknown;
  matrix_runout: unknown;
  comment: string | null;
  condition_problems: string | null;
  release_artist_id: string | null;
  part_of_queen_collection: boolean | null;
  relation_to_queen: string | null;
  tags: unknown;
  parent_releases: unknown;
  jukebox_hole: boolean | null;
  picture_sleeve: boolean | null;
  speed: unknown;
}
