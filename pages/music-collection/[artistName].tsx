import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { isEmpty } from "ramda";
import { useState } from "react";

import CollectionBadge from "components/MusicalCollection/CollectionBadge";
import Entry from "components/MusicalCollection/Entry";
import type { ArtistEntry, ArtistWithAlternativeNames } from "db/prisma";
import LinkButton from "components/LinkButton";
import { matchByText } from "utils";

type Props = Omit<InferGetStaticPropsType<typeof getStaticProps>, "pageTitle">;

const QueenCollectionArtist: NextPage<Props> = ({
  artistName,
  partOfQueenFamily,
  alternativeArtistNames,
  entries,
  debugReleases, // this "opens up" all hidden details on releases already on build stage, thus making sure no runtime errors will occur at least on data representation after deployment
}) => {
  const [query, setQuery] = useState("");

  const noEntries = isEmpty(entries)

  const trimmedQuery = query.trim().toLowerCase()

  const filteredEntries = trimmedQuery
    ? entries.reduce<ArtistEntries>((acc, { type, entries }) => {
      const filteredTypeEntries = entries.filter(
        (e) =>
          matchByText(e.main_name, trimmedQuery) ||
          e.alternative_musical_entry_names.some((alt) =>
            matchByText(alt.name, trimmedQuery)
          )
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
        {partOfQueenFamily && (
          <CollectionBadge label="part of queen family" />
        )}
      </h2>
      {alternativeArtistNames.length > 0 && (
        <div style={{ marginBottom: "10px" }}>
          {alternativeArtistNames.map((alt) => (
            <div key={alt.name_id} style={{ opacity: 0.6, fontSize: "0.95em" }}>
              also known as {alt.name}
            </div>
          ))}
        </div>
      )}
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
                  {entries.map((entry) => (
                    <Entry
                      key={entry.entry_id}
                      entry={entry}
                      debugReleases={debugReleases}
                      hideQueenCollectionBadge={partOfQueenFamily}
                    />
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
  const { getArtistNames } = await import("db/prisma");

  const paths = (await getArtistNames()).map(({ name }) => ({
    params: {
      artistName: name,
    },
  }));


  return {
    paths,
    // needed so alt-name URLs can hit getStaticProps and redirect to the canonical artist page
    fallback: "blocking",
  };
};

export default QueenCollectionArtist;

type EntryType = string
type ArtistEntries = { type: EntryType, entries: ArtistEntry[] }[]

export const getStaticProps: GetStaticProps<{
  artistName: string;
  partOfQueenFamily: boolean;
  alternativeArtistNames: ArtistWithAlternativeNames["alternative_artist_names"];
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
  const {
    getArtistByName,
    getArtistNameByAlternativeName,
    getArtistEntries,
  } = await import("db/prisma");

  const artist = await getArtistByName(artistNameParam);

  if (!artist) {
    const canonicalName =
      await getArtistNameByAlternativeName(artistNameParam);

    if (canonicalName) {
      return {
        redirect: {
          destination: `/music-collection/${encodeURIComponent(canonicalName)}`,
          permanent: true,
        },
      };
    }

    return {
      notFound: true,
    };
  }

  const artistEntries = await getArtistEntries(artist.artist_id);

  const artistName = artist.name;
  const partOfQueenFamily = artist.part_of_queen_family;
  const alternativeArtistNames = artist.alternative_artist_names;

  const entriesMap = artistEntries.reduce<Record<EntryType, ArtistEntry[]>>((acc, entry) => {
    const { types_of_musical_entries, ...rest } = entry;
    entry.types_of_musical_entries.forEach(({ musical_entry_types }) => {
      const entryType = musical_entry_types.name;
      acc[entryType] = [...(acc[entryType] ?? []), rest];
    });

    return acc;
  }, {});

  return {
    props: {
      artistName,
      partOfQueenFamily,
      alternativeArtistNames,
      entries: Object.entries(entriesMap).sort((a, b) => a[0].localeCompare(b[0])).map(([type, entries]) => ({ type, entries })),
      pageTitle: `Music Collection - Entries by Artist ${artistName}`,
      debugReleases: !!process.env.DEBUG_RELEASES,
    },
  };
};
