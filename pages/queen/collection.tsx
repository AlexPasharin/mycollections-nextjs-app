import { getArtists } from "mongodb/artists";
import type { Artist } from "mongodb/artists";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { prop, sortBy } from "ramda";
import { useState } from "react";

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
      <h1>Queen Collection</h1>
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

const ArtistRow = ({ artist }: { artist: Artist }) => (
  <div
    style={{
      padding: "24px 0",
      borderTop: "solid 1px grey",
      fontSize: "1.2em",
      cursor: "pointer",
    }}
  >
    {artist.name}
  </div>
);

export const getStaticProps: GetStaticProps<{
  artists: Artist[];
}> = async () => ({
  props: {
    artists: await getArtists().then(sortBy(prop("name"))),
    pageTitle: "My Queen Collection",
  },
});
