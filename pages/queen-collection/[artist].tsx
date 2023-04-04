import {
  Artist,
  EnhancedArtist,
  Entry,
  getArtistByName,
  getArtists,
} from "mongodb/artists";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { map, pipe, toPairs } from "ramda";
import { useState } from "react";

type Props = Omit<InferGetStaticPropsType<typeof getStaticProps>, "pageTitle">;

const QueenCollectionArtist: NextPage<Props> = ({ name, entries }) => {
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim();
  const filteredEntries = trimmedQuery
    ? entries.reduce<typeof entries>((acc, { type, typeEntries }) => {
        const filteredTypeEntries = typeEntries.filter((e) =>
          e.name.toLowerCase().includes(query.toLowerCase())
        );

        return filteredTypeEntries.length
          ? [...acc, { type, typeEntries: filteredTypeEntries }]
          : acc;
      }, [])
    : entries;

  return (
    <main>
      <h1>Queen Collection</h1>
      <h2>
        Entries by <span style={{ color: "red" }}>{name}</span>
      </h2>
      <input
        style={{
          height: "30px",
          width: "300px",
          fontSize: "1.2em",
          marginBottom: "px",
        }}
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredEntries.map(({ type, typeEntries }) => (
        <details key={type} open>
          <summary style={{ margin: "10px 0" }}>
            <h3 style={{ display: "inline", marginLeft: "10px" }}>{type}</h3>
          </summary>
          <ul style={{ marginLeft: "24px" }}>
            {typeEntries.map((entry) => (
              <EntryData key={entry.id} entry={entry} />
            ))}
          </ul>
        </details>
      ))}
    </main>
  );
};

const EntryData = ({ entry }: { entry: Entry }) => {
  const [showReleases, setShowReleases] = useState(false);
  const { name, releases } = entry;

  return (
    <li style={{ borderBottom: "solid 1px lightgrey" }}>
      <h4
        style={{ opacity: 0.8, cursor: releases ? "pointer" : "default" }}
        onClick={() => setShowReleases(!showReleases)}
      >
        {name}
      </h4>
      {showReleases && releases && (
        <ol style={{ marginBottom: "16px" }}>
          {releases.map((r) => {
            const { version, discogs_url } = r;

            return (
              <li style={{ margin: "8px 0" }}>
                {discogs_url ? (
                  <a href={discogs_url} target="_blank">
                    {version}
                  </a>
                ) : (
                  <span>{version}</span>
                )}
              </li>
            );
          })}
        </ol>
      )}
    </li>
  );
};

const Release = ({
  release,
}: {
  release: NonNullable<Entry["releases"]>[number];
}) => {
  const { discogs_url } = release;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const artists = await getArtists();

  return {
    paths: artists.map(({ name }) => ({
      params: {
        artist: name.toLowerCase(),
      },
    })),
    fallback: false,
  };
};

export default QueenCollectionArtist;

export const getStaticProps: GetStaticProps<{
  name: string;
  entries: { type: string; typeEntries: Entry[] }[];
  pageTitle: string;
}> = async (context) => {
  const { artist } = context.params!; // we know that "artist" must be in path parameters

  const { name, entries } = (await getArtistByName(artist as string))!; // and we know that "artist" is a string and corresponds to a real artist in db

  return {
    props: {
      name,
      entries: pipe(
        toPairs<EnhancedArtist["entries"], string>,
        map(([type, typeEntries]) => ({
          type,
          typeEntries,
        }))
      )(entries),
      pageTitle: `Queen Collection - Entries by Artist ${name}`,
    },
  };
};
