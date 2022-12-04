import { ChangeEventHandler, useState } from "react";

import type { GetStaticProps } from "next";

import { getJSONData } from "utils";

import type { Movie } from "types/movies";

import styles from "styles/non_queen_collection.module.sass";

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
    <div className={styles["non-queen-collection"]}>
      <h1>Movies Collection</h1>
      <div className={styles["non-queen-filter"]}>
        <span className={styles["non-queen-filter-text"]}>Filter:</span>
        <input value={searchKey} onChange={onSearch} />
      </div>
      <ul className={styles["non-queen-releases"]}>
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
    </div>
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
