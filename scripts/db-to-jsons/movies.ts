import { prop, sortBy } from "ramda";
import { Movie } from "../../types/movies";
import { writeToJsonFile } from "../utils";
import { getMovies } from "../../db";

getMovies().then(async (dbMovies) => {
  const movies: Movie[] = sortBy(
    prop("name"),
    dbMovies.map(({ comment, imdb_url, ...rest }) => ({
      ...rest,
      comment: comment || undefined,
      imdb_url: imdb_url || undefined,
    }))
  );

  await writeToJsonFile(movies, "movies/collection");
});
