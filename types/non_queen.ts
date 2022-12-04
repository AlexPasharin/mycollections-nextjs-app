export interface NonQueenRelease {
  id: number;
  name: string;
  format: string;
  comment?: string;
  discogs_url?: string;
}

export interface NonQueenDBRelease
  extends Omit<NonQueenRelease, "discogs_url" | "comment"> {
  artist_name: string;
  index_by: string | null;
  discogs_url: string | null;
  comment: string | null;
}

export interface NonQueenReleasesByArtist {
  artist: string;
  releases: NonQueenRelease[];
}
