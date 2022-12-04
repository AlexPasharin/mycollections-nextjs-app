import { GetStaticProps } from "next";
import { ChangeEventHandler, useState } from "react";
import { Movie } from "types/movies";
import { getJSONData } from "utils";

interface Props {
  movies: Movie[];
}

export default function MoviesPage({ movies }: Props) {
  const [searchKey, setSearchKey] = useState("");

  const filteredMovies = searchKey
    ? movies.filter((e) => e.name.toLowerCase().includes(searchKey))
    : movies;

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchKey(e.target.value.toLowerCase());
  };

  return (
    <>
      <h1>Movies Collection</h1>
      <div className="non-queen-filter">
        <span className="non-queen-filter-text">Filter:</span>
        <input value={searchKey} onChange={onSearch} />
      </div>
      <ul className="non-queen-entries">
        {filteredMovies.map((e) => (
          <li key={e.id}>
            <h2>{e.name}</h2>
            <div>Format: {e.format}</div>
            <a href={e.imdb_url}>{e.imdb_url}</a>
            {e.comment && (
              <div>
                <i>{e.comment}</i>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      movies: await getJSONData<Movie[]>("movies/collection"),
      pageTitle: "My Movies Collection",
    },
  };
};
