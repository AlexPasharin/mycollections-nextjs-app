import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { sortBy } from "ramda";
import Link from "next/link";
import { useMemo, useState } from "react";

import CollectionBadge from "components/MusicalCollection/CollectionBadge";
import LinkButton from "components/LinkButton";
import type { ArtistWithAlternativeNames } from "db/prisma";
import { matchByText } from "utils";


type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function MusicCollection({ artists }: Props) {
  const [query, setQuery] = useState("");
  const [queenFamilyOnly, setQueenFamilyOnly] = useState(false);

  const artistsToShow = useMemo(
    () =>
      queenFamilyOnly
        ? artists.filter((a) => a.part_of_queen_family)
        : artists,
    [artists, queenFamilyOnly]
  );

  return (
    <main>
      <LinkButton text="Back to main page" href="/" />
      <h1>Music Collection (New implementation, under construction)</h1>
      <h2>Choose An Artist</h2>
      <input
        style={{ height: "30px", width: "300px", fontSize: "1.2em" }}
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <label
        style={{
          display: "block",
          marginTop: "10px",
          fontSize: "1.1em",
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          checked={queenFamilyOnly}
          onChange={(e) => setQueenFamilyOnly(e.target.checked)}
          style={{ marginRight: "8px" }}
        />
        Queen family only
      </label>
      <ArtistList
        artists={artistsToShow}
        query={query}
        queenFamilyOnly={queenFamilyOnly}
      />
    </main>
  );
}

const ArtistList = ({
  artists,
  query,
  queenFamilyOnly,
}: {
  artists: ArtistWithAlternativeNames[];
  query: string;
  queenFamilyOnly: boolean;
}) => {
  const trimmedQuery = query.trim();
  const queryLower = trimmedQuery.toLowerCase();

  const filteredArtists = trimmedQuery
    ? artists.filter(
        (a) =>
          matchByText(a.name, queryLower) ||
          a.alternative_artist_names.some((alt) =>
            matchByText(alt.name, queryLower)
          )
      )
    : artists;

  if (filteredArtists.length === 0) {
    return (
      <h3>
        {queenFamilyOnly
          ? "No Queen Family Artists"
          : "No Artists"}{" "}
        correspond to query {trimmedQuery}
      </h3>
    );
  }

  return (
    <ul>
      {filteredArtists.map((artist) => (
        <li key={artist.artist_id}>
          <ArtistRow artist={artist} />
        </li>
      ))}
    </ul>
  );
};

const ArtistRow = ({ artist }: { artist: ArtistWithAlternativeNames }) => {
  const { name, alternative_artist_names, part_of_queen_family } = artist;

  const [nameBoldPart, nameSecondPart] = extractName(artist);

  return (
    <div
      style={{
        padding: "12px 0",
        borderTop: "solid 1px grey",
      }}
    >
      <Link
        href={`/music-collection/${encodeURIComponent(name)}`}
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
        {part_of_queen_family && (
          <CollectionBadge label="part of queen family" />
        )}
      </Link>
      {alternative_artist_names.length > 0 && (
        <div style={{ opacity: 0.6, fontSize: "0.95em" }}>
          aka {alternative_artist_names.map((alt) => alt.name).join(", ")}
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  artists: ArtistWithAlternativeNames[];
}> = async () => {
  // dynamic import to mitigate possibility of server side code "leaking" into the client side
  const { getAllArtists } = await import("db/prisma");

  return {
    props: {
      artists: await getAllArtists().then(
        sortBy((a) => a.name_for_sorting ?? a.name)
      ),

      pageTitle: "My Music Collection - Artists",
    },
  };
};

const extractName = (
  artist: ArtistWithAlternativeNames
): [string] | [string, string] => {
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
