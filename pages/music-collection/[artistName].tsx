import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { isEmpty } from "ramda";
import { useState } from "react";

import Entry from "components/Entries/Entry";
import type { musical_entries as MusicalEntry } from "generated/prisma/client";
import LinkButton from "components/LinkButton";

type Props = Omit<InferGetStaticPropsType<typeof getStaticProps>, "pageTitle">;

const QueenCollectionArtist: NextPage<Props> = ({
  artistName,
  entries,
  debugReleases, // this "opens up" all hidden details on releases already on build stage, thus making sure no runtime errors will occur at least on data representation after deployment
}) => {
  const [query, setQuery] = useState("");

  const noEntries = isEmpty(entries)

  const trimmedQuery = query.trim().toLowerCase()

  const filteredEntries = trimmedQuery
    ? entries.reduce<ArtistEntries>((acc, { type, entries }) => {
      const filteredTypeEntries = entries.filter((e) =>
        e.main_name.toLowerCase().includes(trimmedQuery)
      );

      return filteredTypeEntries.length
        ? [...acc, { type, entries: filteredTypeEntries }]
        : acc;
    }, [])
    : entries;

  const openAllTypes = debugReleases || filteredEntries.reduce<number>((amount, { entries }) => entries.length + amount, 0) < 5;

  return (
    <main>
      <LinkButton text="Back to Music collection artists selection" href="/music-collection" />
      <h1>Music Collection</h1>
      <h2>
        <span style={{ color: "red" }}>{artistName}</span>
      </h2>
      {noEntries ? (
        <div
          style={{
            fontSize: "1.5em",
          }}
        >
          This artist has no entries in collection
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
          {filteredEntries.map(({ type, entries }) => {

            return (
              <details key={type} open={openAllTypes}>
                <summary style={{ margin: "10px 0" }}>
                  <h3 style={{ display: "inline", marginLeft: "10px" }}>
                    {type}
                  </h3>
                </summary>
                <ul style={{ marginLeft: "24px" }}>
                  {entries.map(({ entry_id, ...entry }) => (
                    <Entry
                      key={entry_id}
                      entry={{
                        ...entry,
                        name: entry.main_name,
                        comment: entry.comment ?? undefined,
                        discogs_url: entry.discogs_url ?? undefined,
                        relation_to_queen: entry.relation_to_queen ?? undefined,
                        part_of_queen_collection: entry.part_of_queen_collection ? entry.part_of_queen_collection : undefined,
                      }}
                      debugReleases={debugReleases} />
                  ))}
                </ul>
              </details>
            )
          })}
        </>
      )}
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // dynamic import to mitigate possibility of server side code "leaking" into the client side
  const { getArtists } = await import("db/prisma");

  const paths = (await getArtists()).map(({ name }) => ({
    params: {
      artistName: name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default QueenCollectionArtist;

type EntryType = string
type Entry = MusicalEntry
type ArtistEntries = { type: EntryType, entries: Entry[] }[]

export const getStaticProps: GetStaticProps<{
  artistName: string;
  entries: ArtistEntries;
  pageTitle: string;
  debugReleases: boolean;
}> = async (context) => {
  const artistNameParam = context.params?.artistName

  if (typeof artistNameParam !== "string") {
    return {
      notFound: true,
    };
  }

  // dynamic import to mitigate possibility of server side code "leaking" into the client side
  const { getArtistByName, getArtistEntries } = await import("db/prisma");

  const artist = await getArtistByName(artistNameParam);

  if (!artist) {
    return {
      notFound: true,
    };
  }

  const artistEntries = await getArtistEntries(artist.artist_id);

  const artistName = artist.name;

  const entriesMap = artistEntries.reduce<Record<EntryType, Entry[]>>((acc, entry) => {
    const { types_of_musical_entries, ...rest } = entry;

    types_of_musical_entries.forEach(({ musical_entry_types }) => {
      const entryType = musical_entry_types.name;

      acc[entryType] = [...(acc[entryType] ?? []), rest];
    });

    return acc;
  }, {});

  return {
    props: {
      artistName,
      entries: Object.entries(entriesMap).sort((a, b) => a[0].localeCompare(b[0])).map(([type, entries]) => ({ type, entries })),
      pageTitle: `Music Collection - Entries by Artist ${artistName}`,
      debugReleases: !!process.env.DEBUG_RELEASES,
    },
  };
};
