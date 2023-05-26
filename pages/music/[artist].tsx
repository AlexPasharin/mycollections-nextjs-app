import BackButton from "components/BackButton";
import {
  getArtistReleases,
  getArtists,
  Entry,
  EnhancedArtist,
} from "mongodb/releases";
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

  const openAllTypes = true;
  filteredEntries.map(({ typeEntries }) => typeEntries).flat().length < 5;

  return (
    <main>
      <BackButton text="Back to Music collection artists selection" />
      <h1>Music Collection</h1>
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
        <details key={type} open={openAllTypes}>
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
  const { name, releases, release_date } = entry;

  return (
    <li style={{ borderBottom: "solid 1px lightgrey" }}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowReleases(!showReleases)}
      >
        <h4 style={{ opacity: 0.8 }}>{name}</h4>
        {release_date && (
          <p style={{ fontStyle: "italic", marginTop: "-12px" }}>
            Original release date: {release_date}
          </p>
        )}
      </div>
      {showReleases && <Releases releases={releases} />}
    </li>
  );
};

type Release = NonNullable<Entry["releases"]>[number];

const Releases = ({ releases }: { releases: Release[] | undefined }) => (
  <div style={{ marginBottom: "16px" }}>
    {releases ? (
      <ol>
        {releases.map((release) => (
          <ReleaseInfo release={release} key={release.id} />
        ))}
      </ol>
    ) : (
      <span style={{ fontWeight: "bold" }}>
        No releases for this entry in collection
      </span>
    )}
  </div>
);

const ReleaseInfo = ({ release }: { release: Release }) => {
  const [showDetails, setShowDetails] = useState(true);

  const { version, id } = release;

  return (
    <li style={{ margin: "8px 0" }} key={id}>
      <div
        style={{ cursor: "pointer", marginBottom: "12px" }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {version}
      </div>
      {showDetails && <ReleaseDetails release={release} />}
    </li>
  );
};

const ReleaseDetails = ({ release }: { release: Release }) => {
  const {
    discogs_url,
    format,
    countries,
    cat_numbers,
    comment,
    condition_problems,
  } = release;

  const tableRows = [
    {
      label: "Format",
      value: format,
    },
    {
      label:
        Array.isArray(countries) && countries.length > 1
          ? "Countries"
          : "Country",
      value: Array.isArray(countries)
        ? countries.join(", ")
        : typeof countries === "string"
        ? countries
        : countries
        ? `made in ${countries as any["made in"]}, printed in ${
            //TODO: REMOVE ANYS
            countries as any["printed in"]
          }`
        : null,
    },
    // {
    //   label: "Catalogue number",
    //   value: cat_numbers,
    // },
    {
      label: "Comment",
      value: comment,
    },
    {
      label: "Condition problems",
      value: condition_problems,
    },
  ];

  return (
    <div>
      {discogs_url && (
        <div style={{ marginBottom: "12px" }}>
          <a href={discogs_url} target="_blank">
            {discogs_url}
          </a>
        </div>
      )}
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {tableRows.map(({ label, value }) => (
            <OptionalTableRow label={label} value={value} key={label} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const OptionalTableRow = ({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) =>
  value ? (
    <tr style={{ borderBottom: "solid 1px lightgrey" }}>
      <td style={{ fontWeight: "bold", padding: "8px 12px 8px 0" }}>
        {label}:
      </td>
      <td style={{ padding: "8px 12px 8px 0" }}>{value} </td>
    </tr>
  ) : null;

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
  entries: { type: string; typeEntries: Entry[] }[];
  pageTitle: string;
}> = async (context) => {
  const artist = context.params!.artist as string; // we know that "artist" must be in path parameters

  const { name, entries } = (await getArtistReleases(artist))!; // and we know that "artist" is a string and corresponds to a real artist in db

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
      pageTitle: `Music Collection - Entries by Artist ${name}`,
    },
  };
};