export interface DBEntry {
  id: number;
  name: string;
  type: number;
  release_date: number;
  artist_id: number;
  entry_artist_id: number | null;
}

export interface DBEntryType {
  id: number;
  name: string;
}
