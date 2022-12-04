export interface Movie {
  id: number;
  name: string;
  format: string;
  comment?: string;
  imdb_url?: string;
}

export interface DBMovie extends Omit<Movie, "comment" | "imdb_url"> {
  comment: string | null;
  imdb_url: string | null;
}
