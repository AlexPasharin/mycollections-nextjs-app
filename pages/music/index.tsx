import { getArtists } from "mongodb/releases";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
// import { prop, sortBy } from "ramda";
import { useState } from "react";
import Link from "next/link";
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

interface Artist {
  _id: number;
  name: string;
}

const ArtistRow = ({ artist }: { artist: Artist }) => {
  const { name } = artist;

  return (
    <div
      style={{
        padding: "24px 0",
        borderTop: "solid 1px grey",
        fontSize: "1.2em",
        cursor: "pointer",
      }}
    >
      <Link href={`/music/${name.toLowerCase()}`}>{name}</Link>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  artists: Artist[];
}> = async () => ({
  props: {
    artists: await getArtists(),
    pageTitle: "My Music Collection - Artists",
  },
});
