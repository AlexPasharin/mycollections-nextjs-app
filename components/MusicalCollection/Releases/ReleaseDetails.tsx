import OptionalTableRow from "./OptionalTableRow";
import type { ArtistEntryRelease } from "db/prisma";
import type { TableRowInfo } from "./types";


const ReleaseDetails = ({
  release,
}: {
  release: Omit<ArtistEntryRelease, "release_id" | "release_version">;
}) => {
  const {
    alternative_musical_entry_names,
    discogs_url,
    release_date,
    formats_of_releases,
    countries,
    catalogue_numbers,
    matrix_runout,
    comment,
    condition_problems,
    musical_releases_tags,
    // release_artist_id,
    part_of_queen_collection,
    relation_to_queen,
    // tags,
    // parent_releases,
  } = release;

  const formats = formats_of_releases
    .map(({ releases_formats, amount, jukebox_hole, picture_sleeve, speed }) =>
      `${releases_formats.short_name}${amount > 1 ? ` x ${amount}` : ""}${jukebox_hole ? " (jukebox hole)" : ""}${!picture_sleeve ? " (no picture sleeve)" : ""}${speed ? ` (speed: ${speed})` : ""}`
    )

  const catNumbersInfo = processCatNumbers(catalogue_numbers);

  const tags = musical_releases_tags.map(({ tags }) => tags.tag);

  const tableRows: TableRowInfo[] = [
    {
      label: "Released as",
      value: alternative_musical_entry_names?.name ?? null,
    },
    {
      label: formats_of_releases.length > 1 ? "Formats" : "Format",
      value: formats.join(", "),
    },
    { label: "Released", value: release_date },
    { label: "Tags", value: tags.join(", ") },
    {
      label: typeof countries === "string" ? "Country" : "Countries",
      value: countriesToString(countries),
    },
    // ...processMatrixRunout(matrix_runout),
    // { label: "Speed", value: speed ? `${speed} RPM` : null },
    { label: "Part of Queen collection", value: part_of_queen_collection ? "Yes" : null },
    { label: "Relation to Queen", value: relation_to_queen },
    {
      label: "Comment",
      value: comment,
    },
    {
      label: "Condition problems",
      value: condition_problems,
    },
    {
      label: "Matrix / runout",
      value: matrix_runout ? typeof matrix_runout === "string" ? matrix_runout : JSON.stringify(matrix_runout, null, 4) : null,
    },

    // { label: "Tags", value: tags?.join(", ") },
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
    </div>
  );
};

export default ReleaseDetails;

const processCatNumbersObject = (
  catNumbersObject: unknown
): string => {
  if (typeof catNumbersObject === "string") {
    return catNumbersObject;
  }

  if (Array.isArray(catNumbersObject)) {
    return catNumbersObject.join(", ");
  }

  if (typeof catNumbersObject === "object" && catNumbersObject !== null && "in UK" in catNumbersObject && "in Europe" in catNumbersObject) {
    return `in UK: ${processCatNumbersObject(catNumbersObject["in UK"])}, in Europe: ${processCatNumbersObject(catNumbersObject["in Europe"])}`;
  }

  console.warn(`Unknown cat numbers object type: ${JSON.stringify(catNumbersObject)}`);

  return JSON.stringify(catNumbersObject);
};

const processLabelsAndCatNumbers = (
  catNumbersObject: unknown
): [string, string][] => {
  if (typeof catNumbersObject !== "object" || catNumbersObject === null) {
    return [];
  }

  const labels =
    "labels" in catNumbersObject && Array.isArray(catNumbersObject.labels)
      ? catNumbersObject.labels
      : "label" in catNumbersObject
        ? [catNumbersObject.label]
        : ["(no label)"];

  const catNumbers =
    "cat_number" in catNumbersObject && typeof catNumbersObject.cat_number === "string"
      ? catNumbersObject.cat_number
      : "cat_numbers" in catNumbersObject && typeof catNumbersObject.cat_numbers === "object" && catNumbersObject.cat_numbers !== null
        ? "CD" in catNumbersObject.cat_numbers && "slipcase" in catNumbersObject.cat_numbers
          ? `CD: ${processCatNumbersObject(catNumbersObject.cat_numbers.CD)}, slipcase: ${processCatNumbersObject(catNumbersObject.cat_numbers.slipcase)}`
          : processCatNumbersObject(catNumbersObject.cat_numbers)
        : "(no catalogue number)";

  return labels.map((l) => [l, catNumbers]);
};

const processCatNumbers = (
  catNumbers: unknown
): [string, string][] => {
  if (!catNumbers) {
    return [];
  }

  const catNumbersArray = Array.isArray(catNumbers) ? catNumbers : [catNumbers];

  return catNumbersArray.map(processLabelsAndCatNumbers).flat();
};

// const processMatrixRunout = (
//   matrixRunout: MatrixRunout | undefined
// ): TableRowInfo[] => {
//   if (!matrixRunout) {
//     return [];
//   }

//   if (typeof matrixRunout === "string") {
//     return [{ label: "Matrix / runout", value: matrixRunout }];
//   }

//   return Object.entries(matrixRunout).map(([key, value]) => ({
//     label: `Matrix / runout (${key})`,
//     value,
//   }));
// };

const countriesToString = (
  countries:
    unknown
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

  if (typeof countries === "object" && "made in" in countries && "printed in" in countries) {
    const madeIn = countries["made in"];
    const printedIn = countries["printed in"];

    return `made in: ${countriesToString(madeIn)}, printed in: ${countriesToString(printedIn)}`;
  }

  if (typeof countries === "object" && "printed in" in countries) {
    return `printed in: ${countriesToString(countries["printed in"])}`;
  }

  if (typeof countries === "object" && "CD" in countries && "slipcase" in countries) {
    const cd = countries["CD"];
    const slipcase = countries["slipcase"];

    return `CD: ${countriesToString(cd)}, slipcase: ${countriesToString(slipcase)}`;
  }

  console.warn(`Unknown countries type: ${JSON.stringify(countries)}`);

  return JSON.stringify(countries);
};
