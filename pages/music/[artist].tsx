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
import {
  MatrixRunout,
  ValidCatNumbersObject,
  ValidatedCatNumbers,
  ValidatedCountriesType,
} from "types/validation";
import { count } from "console";

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
                {typeEntries.map((entry) => (
                  <EntryData
                    key={entry.id}
                    entry={entry}
                    debugReleases={debugReleases}
                  />
                ))}
              </ul>
            </details>
          ))}
        </>
      )}
    </main>
  );
};

const EntryData = ({
  entry,
  debugReleases,
}: {
  entry: MongoEntry;
  debugReleases: boolean;
}) => {
  const [showReleases, setShowReleases] = useState(debugReleases);

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
      {showReleases && (
        <Releases releases={releases} debugReleases={debugReleases} />
      )}
    </li>
  );
};

type Release = NonNullable<MongoEntry["releases"]>[number];

const Releases = ({
  releases,
  debugReleases,
}: {
  releases: Release[] | undefined;
  debugReleases: boolean;
}) => (
  <div style={{ marginBottom: "16px" }}>
    {releases ? (
      <ol>
        {releases.map((release) => (
          <ReleaseInfo
            release={release}
            key={release.id}
            debugReleases={debugReleases}
          />
        ))}
      </ol>
    ) : (
      <span style={{ fontWeight: "bold" }}>
        No releases for this entry in collection
      </span>
    )}
  </div>
);

const ReleaseInfo = ({
  release,
  debugReleases,
}: {
  release: Release;
  debugReleases: boolean;
}) => {
  const [showDetails, setShowDetails] = useState(debugReleases);

  const { version, id, ...rest } = release;

  return (
    <li style={{ margin: "8px 0" }} key={id}>
      <div
        style={{ cursor: "pointer", marginBottom: "12px" }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {version}
      </div>
      {showDetails && <ReleaseDetails release={rest} />}
    </li>
  );
};

const countriesToString = (
  countries: ValidatedCountriesType | undefined
): string | null => {
  if (!countries) {
    return null;
  }

  if (typeof countries === "string") {
    return countries;
  }

  if (Array.isArray(countries)) {
    return countries.join(", ");
  }

  const madeIn = countries["made in"];
  const printedIn = countries["printed in"];

  return `made in: ${countriesToString(
    madeIn
  )}, printed in: ${countriesToString(printedIn)}`;
};

type TableRowInfo = {
  label: string;
  value?: string | null;
};

const processCatNumberObject = (
  catNumbersObject: ValidCatNumbersObject
): [string, string][] => {
  const labels =
    "labels" in catNumbersObject
      ? catNumbersObject.labels
      : "label" in catNumbersObject
      ? [catNumbersObject.label]
      : ["(no label)"];

  const catNumbers =
    "cat_number" in catNumbersObject
      ? catNumbersObject.cat_number
      : "cat_numbers" in catNumbersObject
      ? Array.isArray(catNumbersObject.cat_numbers)
        ? catNumbersObject.cat_numbers.join(", ")
        : `in UK: ${catNumbersObject.cat_numbers["in UK"]}, in Europe: ${catNumbersObject.cat_numbers["in Europe"]}`
      : "(no catalogue number)";

  return labels.map((l) => [l, catNumbers]);
};

const processCatNumbers = (
  catNumbers: ValidatedCatNumbers | undefined
): [string, string][] => {
  if (!catNumbers) {
    return [];
  }

  if (Array.isArray(catNumbers)) {
    return catNumbers.map(processCatNumberObject).flat();
  }

  return processCatNumberObject(catNumbers);
};

const processMatrixRunout = (
  matrixRunout: MatrixRunout | undefined
): TableRowInfo[] => {
  if (!matrixRunout) {
    return [];
  }

  if (typeof matrixRunout === "string") {
    return [{ label: "Matrix / runout", value: matrixRunout }];
  }

  return Object.entries(matrixRunout).map(([key, value]) => ({
    label: `Matrix / runout (${key})`,
    value,
  }));
};

const ReleaseDetails = ({
  release,
}: {
  release: Omit<Release, "id" | "version">;
}) => {
  const {
    name,
    format,
    discogs_url,
    release_date,
    countries,
    cat_numbers,
    matrix_runout,
    comment,
    condition_problems,
    release_artist_id,
    part_of_queen_collection,
    relation_to_queen,
    tags,
    parent_releases,
    jukebox_hole,
    picture_sleeve,
    speed,
  } = release;

  const catNumbersInfo = processCatNumbers(cat_numbers);

  const tableRows: TableRowInfo[] = [
    {
      label: "Released as",
      value: name,
    },
    {
      label: "Format",
      value: format,
    },
    { label: "Released", value: release_date },
    {
      label: typeof countries === "string" ? "Country" : "Countries",
      value: countriesToString(countries),
    },
    ...processMatrixRunout(matrix_runout),
    { label: "Speed", value: speed ? `${speed} RPM` : null },
    {
      label: "Comment",
      value: comment,
    },
    {
      label: "Condition problems",
      value: condition_problems,
    },
    { label: "Tags", value: tags?.join(", ") },
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
      {catNumbersInfo.map(([label, catNumbers]) => (
        <div key={label}>
          {label} - {catNumbers}
        </div>
      ))}
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          {tableRows.map(({ label, value }) => (
            <OptionalTableRow label={label} value={value} key={label} />
          ))}
        </tbody>
      </table>
      {jukebox_hole && "Jukebox hole"}
      {picture_sleeve === false && "No picture sleeve"}
    </div>
  );
};

const OptionalTableRow = ({ label, value }: TableRowInfo) =>
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
