export interface DBEntry {
  id: number;
  name: string;
  release_date: string | null;
  type: number;
  artist_id: number;
  entry_artist_id: number | null;
}

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
