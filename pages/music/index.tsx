import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { sortBy } from "ramda";
import Link from "next/link";
import { useState } from "react";

import { Artist, getArtists } from "mongodb/releases";
import BackButton from "components/BackButton";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function QueenCollection({ artists }: Props) {
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim();
  const filteredArtists = trimmedQuery
    ? artists.filter((a) =>
        a.name.toLowerCase().includes(trimmedQuery.toLowerCase())
      )
    : artists;

  const showArtistList = filteredArtists.length > 0;

  return (
    <main>
      <BackButton text="Back to main page" />
      <h1>Music Collection</h1>
      <h2>Choose An Artist</h2>
      <input
        style={{ height: "30px", width: "300px", fontSize: "1.2em" }}
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {showArtistList ? (
        <ul>
          {filteredArtists.map((artist) => (
            <li key={artist._id}>
              <ArtistRow artist={artist} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No Artists correspond to query {trimmedQuery}</h3>
      )}
    </main>
  );
}

const ArtistRow = ({ artist }: { artist: Artist }) => {
  const { name } = artist;

  const [nameBoldPart, nameSecondPart] = extractName(artist);

  return (
    <div
      style={{
        padding: "12px 0",
        borderTop: "solid 1px grey",
      }}
    >
      <Link
        href={`/music/${name.toLowerCase()}`}
        style={{
          textDecoration: "none",
          fontSize: "1.5em",
          color: "inherit",
          cursor: "pointer",
          margin: "12px 0",
          display: "block",
        }}
      >
        <span style={{ fontWeight: "bold", color: "#6C1960" }}>
          {nameBoldPart}
        </span>
        <span style={{ opacity: 0.7 }}>{nameSecondPart}</span>
      </Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  artists: Artist[];
}> = async () => ({
  props: {
    artists: await getArtists().then(
      sortBy((a) => a.name_for_sorting || a.name)
    ),
    pageTitle: "My Music Collection - Artists",
  },
});

const extractName = (artist: Artist): [string] | [string, string] => {
  const { name, name_for_sorting } = artist;

  if (!name_for_sorting) {
    return [name];
  }

  for (let i = name_for_sorting.length; i >= 0; i--) {
    const substr = name_for_sorting.substring(0, i);

    for (let j = 0; j <= name.length - substr.length; j++) {
      const namePart = name.substring(j, j + substr.length);

      if (namePart === substr) {
        return [substr, name_for_sorting.substring(i)];
      }
    }
  }

  return [name_for_sorting];
};
