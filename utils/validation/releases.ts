import type { DBEntry2, DBRelease2 } from "../../types/entries";
import type { ID, NonEmptyStringArray, Result } from "../../types/utils";
import type {
  Speed,
  ValidatedCatNumbers,
  ValidatedCountriesType,
  ValidatedDBEntry,
  ValidatedDBRelease,
} from "../../types/validation";

import {
  arrayIsNonEmpty,
  map,
  removeNils,
  validatePropsAreNonEmptyIfStrings,
  validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings,
} from "../../utils";
import validateCountries from "./countries";
import validateReleaseDate from "../../utils/validation/release_date";
import { validateObjectsWithID } from ".";
import validateCatNumbers from "./catNumbers";
import validateMatrixRunout from "./matrixRunout";

export default function validateReleases(
  releases: DBRelease2[],
  entries: readonly ValidatedDBEntry[] | DBEntry2[],
  countries: { id: string; name: string }[],
  labels: string[]
): Result<ValidatedDBRelease[]> {
  const countriesMap = countries.reduce<Record<string, string | undefined>>(
    (acc, { id, name }) => ({ ...acc, [id]: name }),
    {}
  );

  const entriesMap = entries.reduce<
    Record<string, ValidatedDBEntry | DBEntry2 | undefined>
  >((acc, entry) => ({ ...acc, [entry.id]: entry }), {});

  const labelSet = new Set(labels);

  return validateObjectsWithID(releases, (release, releasesIDs) =>
    validateRelease(release, releasesIDs, entriesMap, countriesMap, labelSet)
  );
}

export const validateRelease = (
  release: DBRelease2,
  releaseIDs: Set<ID>,
  entriesMap: Record<string, ValidatedDBEntry | DBEntry2 | undefined>,
  countries: Record<string, string | undefined>,
  dbLabels: Set<string>
): Result<ValidatedDBRelease> => {
  let errors: string[] = [];

  const releaseDateValidityCheck = validateReleaseDate(release.release_date);

  if (releaseDateValidityCheck) {
    errors.push(...releaseDateValidityCheck.errors);
  }

  let releaseCountries: ValidatedCountriesType | null = null;

  const countriesFieldValidationResult = validateCountries(
    release.countries,
    countries
  );

  if ("errors" in countriesFieldValidationResult) {
    errors.push(...countriesFieldValidationResult.errors);
  } else {
    releaseCountries = countriesFieldValidationResult.countries;
  }

  let parent_releases: NonEmptyStringArray | null = null;

  // "tags" and "parent_releases" fields' values must be null or a non-empty array of non-empty strings
  const releaseWithStringArrayFieldsValidated =
    validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings(release, [
      "tags",
      "parent_releases",
    ]);

  if ("errors" in releaseWithStringArrayFieldsValidated) {
    errors.push(...releaseWithStringArrayFieldsValidated.errors);
  } else {
    parent_releases = releaseWithStringArrayFieldsValidated.parent_releases;
  }

  if (parent_releases) {
    // every value in "parent_entries" array must correspong to an actual release in the database
    const nonValidParentEntries = parent_releases.filter(
      (pa) => !releaseIDs.has(pa)
    );

    errors.push(
      ...nonValidParentEntries.map(
        (pa) => `Parent release "${pa}" could not be found from database`
      )
    );
  }

  let catNumbers: ValidatedCatNumbers | null = null;

  const verifiedCatNumbers = validateCatNumbers(release.cat_numbers);

  if (verifiedCatNumbers && "errors" in verifiedCatNumbers) {
    errors.push(...verifiedCatNumbers.errors);
  } else {
    catNumbers = verifiedCatNumbers;

    // verify that all labels mentioned in "cat_numbers" are in database
    const releaseLabels = extractLabels(verifiedCatNumbers);
    const releaseLabelsNotInDB = releaseLabels.filter((l) => !dbLabels.has(l));

    errors.push(
      ...releaseLabelsNotInDB.map((l) => `Label ${l} not found in DB`)
    );
  }

  const verifiedMatrixRunout = validateMatrixRunout(release.matrix_runout);

  if ("errors" in verifiedMatrixRunout) {
    errors.push(...verifiedMatrixRunout.errors);
  }

  let speed = null;

  if (!validateReleaseSpeed(release.speed)) {
    errors.push(
      `property "speed" should be null, literal 33 or object with property either "Side B" or "Disk 2" resolving to 33`
    );
  } else {
    speed = release.speed;
  }

  const stringPropsValidityCheck = validatePropsAreNonEmptyIfStrings(release, [
    "name",
    "version",
    "discogs_url",
    "comment",
    "condition_problems",
    "relation_to_queen",
  ]);

  if (stringPropsValidityCheck) {
    errors.push(...stringPropsValidityCheck.errors);
  }

  const parentEntry = entriesMap[release.entry_id];

  const { part_of_queen_collection, relation_to_queen } = release;

  if (parentEntry?.part_of_queen_collection && !part_of_queen_collection) {
    errors.push(
      `If parent entry ${parentEntry.id} is a part of queen collection, also release ${release.id} should be`
    );
  }

  if (!part_of_queen_collection && relation_to_queen) {
    errors.push(
      `Relation to queen should be null, if release is not a part of queen collection`
    );
  }

  if (arrayIsNonEmpty(errors)) {
    return {
      errors: map(errors, (e) => `Release ${release.id}: ${e}`),
    };
  }

  return removeNils({
    ...release,
    countries: releaseCountries,
    parent_releases,
    cat_numbers: catNumbers,
    matrix_runout: null,
    tags: null,
    speed: speed,
    part_of_queen_collection: release.part_of_queen_collection || null,
    jukebox_hole: release.jukebox_hole || null,
    picture_sleeve: release.picture_sleeve ? null : release.picture_sleeve,
  });
};

const extractLabels = (cat_numbers: ValidatedCatNumbers | null): string[] => {
  if (cat_numbers === null) {
    return [];
  }

  if (Array.isArray(cat_numbers)) {
    return cat_numbers.map(extractLabels).flat();
  }

  if ("label" in cat_numbers) {
    return [cat_numbers.label];
  }

  if ("labels" in cat_numbers) {
    return cat_numbers.labels;
  }

  return [];
};

const validateReleaseSpeed = (speed: unknown): speed is Speed | null => {
  if (speed === null || speed === 33) {
    return true;
  }

  if (typeof speed !== "object" || Object.keys(speed).length !== 1) {
    return false;
  }

  if (
    (!("Side B" in speed) || speed["Side B"] !== 33) &&
    (!("Disk 2" in speed) || speed["Disk 2"] !== 33)
  ) {
    return false;
  }

  return true;
};
