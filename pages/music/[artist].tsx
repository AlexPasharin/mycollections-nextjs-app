import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { map, pipe, toPairs } from "ramda";
import { useState } from "react";

import BackButton from "components/BackButton";
import { getArtistReleases, getArtists } from "mongodb/releases";
import { MongoEntry } from "types/mongo/releases";
import Entry from "components/Entries/Entry";

type Props = Omit<InferGetStaticPropsType<typeof getStaticProps>, "pageTitle">;

const QueenCollectionArtist: NextPage<Props> = ({
  name,
  entries,
  debugReleases, // this "opens up" all hidden details on releases already on build stage, thus making sure no runtime errors will occur at least on data representation after deployment
}) => {
  const [query, setQuery] = useState("");

  const noEntries = !entries.length;

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

  const openAllTypes = debugReleases
    ? true
    : filteredEntries.map(({ typeEntries }) => typeEntries).flat().length < 5;

  return (
    <main>
      <BackButton text="Back to Music collection artists selection" />
      <h1>Music Collection</h1>
      <h2>
        <span style={{ color: "red" }}>{name}</span>
      </h2>
      {noEntries ? (
        <div
          style={{
            fontSize: "1.5em",
          }}
        >
          No entries for this artist in collection
        </div>
      ) : (
        <>
          <input
            style={{
              height: "30px",
              width: "300px",
              fontSize: "1.2em",
            }}
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {filteredEntries.map(({ type, typeEntries }) => (
            <details key={type} open={openAllTypes}>
              <summary style={{ margin: "10px 0" }}>
                <h3 style={{ display: "inline", marginLeft: "10px" }}>
                  {type}
                </h3>
              </summary>
              <ul style={{ marginLeft: "24px" }}>
                {typeEntries.map(({ id, ...entry }) => (
                  <Entry key={id} entry={entry} debugReleases={debugReleases} />
                ))}
              </ul>
            </details>
          ))}
        </>
      )}
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const artists = await getArtists();

  const paths = artists.map(({ name }) => ({
    params: {
      artist: name.toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default QueenCollectionArtist;

export const getStaticProps: GetStaticProps<{
  name: string;
  entries: { type: string; typeEntries: MongoEntry[] }[];
  pageTitle: string;
  debugReleases: boolean;
}> = async (context) => {
  const artist = context.params!.artist as string; // we know that "artist" must be in path parameters

  const { name, entries } = (await getArtistReleases(artist))!; // and we know that "artist" is a string and corresponds to a real artist in db

  return {
    props: {
      name,
      entries: entries
        ? pipe(
            toPairs<MongoEntry[]>,
            map(([type, typeEntries]) => ({
              type,
              typeEntries,
            }))
          )(entries)
        : [],
      pageTitle: `Music Collection - Entries by Artist ${name}`,
      debugReleases: !!process.env.DEBUG_RELEASES,
    },
  };
};
