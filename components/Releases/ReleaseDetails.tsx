import OptionalTableRow from "./ OptionalTableRow";
import type { Release, TableRowInfo } from "./types";

import {
  MatrixRunout,
  ValidCatNumbersObject,
  ValidatedCatNumbers,
  ValidatedCountriesType,
} from "types/validation";

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
    // {
    //   label: typeof countries === "string" ? "Country" : "Countries",
    //   value: countriesToString(countries),
    // },
    // ...processMatrixRunout(matrix_runout),
    // { label: "Speed", value: speed ? `${speed} RPM` : null },
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
      {/* {catNumbersInfo.map(([label, catNumbers]) => (
        <div key={label}>
          {label} - {catNumbers}
        </div>
      ))} */}
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

export default ReleaseDetails;

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
