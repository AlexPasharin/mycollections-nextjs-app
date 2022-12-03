export interface NonQueenRelease {
  id: number;
  name: string;
  format: string;
  comment?: string;
  discogs_url?: string;
}

export type NonQueenDBRelease = NonQueenRelease & {
  artist_name: string;
  index_by?: string | null;
  discogs_url?: string | null;
  comment?: string | null;
};

export interface NonQueenReleasesByArtist {
  artist: string;
  releases: NonQueenRelease[];
}
