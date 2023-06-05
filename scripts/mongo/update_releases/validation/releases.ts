import type { DBEntry2, DBRelease2 } from "../../../../types/entries";
import type { Result } from "../../../../types/utils";
import {
  type MatrixRunout,
  MatrixRunoutAllowedKeys,
  type ValidatedCatNumbers,
  type ValidatedDBRelease,
} from "../../../../types/validation";

import {
  removeNils,
  validatePropsAreNonEmptyIfStrings,
  validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings,
} from "../../../../utils";
import { validateCountriesField } from "./countries";
import { releaseDateIsValid } from "./release_date";

export const validateRelease = (
  release: DBRelease2,
  entriesSet: Record<string, DBEntry2 | undefined>,
  dbReleaseIDs: Set<string>,
  dbCountries: Record<string, string | undefined>,
  dbLabels: Set<string>
): Result<ValidatedDBRelease> => {
  const countriesFieldValidationResult = validateCountriesField(
    release.countries,
    dbCountries
  );

  if ("errors" in countriesFieldValidationResult) {
    return countriesFieldValidationResult;
  }

  const releaseWithCountriesFieldValidated = {
    ...release,
    countries: countriesFieldValidationResult.countries,
  };

  const releaseDateValidityCheck = releaseDateIsValid(
    releaseWithCountriesFieldValidated.release_date
  );

  if (releaseDateValidityCheck !== true) {
    return releaseDateValidityCheck;
  }

  // "tags" and "parent_entries" fields' values must be null or a non-empty array of non-empty strings
  const releaseWithStringArrayFieldsValidated =
    validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings(
      releaseWithCountriesFieldValidated,
      ["tags", "parent_releases"]
    );

  if ("errors" in releaseWithStringArrayFieldsValidated) {
    return releaseWithStringArrayFieldsValidated;
  }

  // "parent_entries" field must be null or a non-empty array of non-empty strings

  // every value in "parent_entries" array must correspong to an actual release in the database
  const nonValidParentEntries = (
    releaseWithStringArrayFieldsValidated.parent_releases || []
  ).filter((pa) => !dbReleaseIDs.has(pa));

  if (nonValidParentEntries.length) {
    return {
      errors: nonValidParentEntries.map(
        (pa) => `Parent release "${pa}" could not be found from database`
      ),
    };
  }

  const catNumbersHaveValidShape = releaseHasValidCatNumbersType(
    releaseWithStringArrayFieldsValidated
  );

  if (!catNumbersHaveValidShape) {
    return {
      errors: [
        `"cat_numbers" field is not null and do not satisfy the requirements.\n` +
          `It should be either an object of correct "cat_numbers" shape or a non-empty array of such objects.\n` +
          `An object has a correct "cat_numbers" shape if it has at least one key and at most two keys, one of which is called 'label' or 'labels', and the other is called 'cat_number' or 'cat_numbers'.\n` +
          `The value of 'label' or 'cat_number' is a non-empty string, while the value of 'labels' or 'cat_numbers' is a non-empty array of non-empty strings.\n` +
          `Arrays of one element only are not allowed`,
      ],
    };
  }

  const releaseLabels = extractLabels(
    releaseWithStringArrayFieldsValidated.cat_numbers
  );

  const releaseLabelsNotInDB = releaseLabels.filter((l) => !dbLabels.has(l));

  if (releaseLabelsNotInDB.length) {
    return {
      errors: releaseLabelsNotInDB.map((l) => `Label ${l} not found in DB`),
    };
  }

  if (!validateMatrixRunout(releaseWithStringArrayFieldsValidated)) {
    return {
      errors: [
        `"matrix_runout" should be null, a non-empty string or an object with keys from the list: ${matrixRunoutAllowedKeys.join(
          ", "
        )}`,
      ],
    };
  }

  if (!validateReleaseSpeed(releaseWithStringArrayFieldsValidated)) {
    return {
      errors: [`"speed" should be null or a literal 33`],
    };
  }

  const stringPropsValidityCheck = validatePropsAreNonEmptyIfStrings(
    releaseWithStringArrayFieldsValidated,
    [
      "name",
      "version",
      "discogs_url",
      "comment",
      "condition_problems",
      "relation_to_queen",
      "release_date",
    ]
  );

  if (stringPropsValidityCheck !== true) {
    return stringPropsValidityCheck;
  }

  const parentEntry =
    entriesSet[releaseWithStringArrayFieldsValidated.entry_id]!; // parent entry must exist because DB checks for that

  const { part_of_queen_collection, relation_to_queen } =
    releaseWithStringArrayFieldsValidated;

  if (parentEntry.part_of_queen_collection && !part_of_queen_collection) {
    return {
      errors: [
        `If parent entry ${parentEntry.id} is a part of queen collection, also release ${releaseWithStringArrayFieldsValidated.id} should be`,
      ],
    };
  }

  if (!part_of_queen_collection && relation_to_queen) {
    return {
      errors: [
        `Relation to queen should be null, if release is not a part of queen collection`,
      ],
    };
  }

  return removeNils({
    ...releaseWithStringArrayFieldsValidated,
    part_of_queen_collection:
      releaseWithStringArrayFieldsValidated.part_of_queen_collection || null,
    jukebox_hole: releaseWithStringArrayFieldsValidated.jukebox_hole || null,
    picture_sleeve: releaseWithStringArrayFieldsValidated.picture_sleeve
      ? null
      : releaseWithStringArrayFieldsValidated.picture_sleeve,
  });
};

const releaseHasValidCatNumbersType = <T extends DBRelease2>(
  release: T
): release is T & { cat_numbers: ValidatedCatNumbers | null } => {
  const { cat_numbers } = release;

  if (Array.isArray(cat_numbers)) {
    return (
      cat_numbers.length > 0 &&
      cat_numbers.every(valueHasCorrectCatNumbersObjectShape)
    );
  }

  if (cat_numbers === null) {
    return true;
  }

  return valueHasCorrectCatNumbersObjectShape(cat_numbers);
};

const valueHasCorrectCatNumbersObjectShape = (value: any): boolean => {
  if (typeof value !== "object") {
    return false;
  }

  const keys = Object.keys(value).sort();

  if (keys.length === 1) {
    if (!/cat_number(s?)/.test(keys[0]) && !/label(s?)/.test(keys[0])) {
      return false;
    }
  } else if (
    keys.length !== 2 ||
    !/cat_number(s?)/.test(keys[0]) ||
    !/label(s?)/.test(keys[1])
  ) {
    return false;
  }

  if (
    "cat_number" in value &&
    (typeof value.cat_number !== "string" || !value.cat_number.length)
  ) {
    return false;
  }

  if ("cat_numbers" in value) {
    if (
      typeof value.cat_numbers !== "object" ||
      typeof value.cat_numbers === null
    ) {
      return false;
    }

    if (Array.isArray(value.cat_numbers)) {
      if (
        value.cat_numbers.length < 2 ||
        value.cat_numbers.some((cn: any) => typeof cn !== "string" || !cn)
      ) {
        return false;
      }
    } else {
      const cat_numbers_keys = Object.keys(value.cat_numbers).sort();

      if (
        cat_numbers_keys.length !== 2 ||
        cat_numbers_keys[0] !== "in Europe" ||
        cat_numbers_keys[1] !== "in UK" ||
        typeof value.cat_numbers["in Europe"] !== "string" ||
        typeof value.cat_numbers["in UK"] !== "string" ||
        !value.cat_numbers["in Europe"] ||
        !value.cat_numbers["in UK"]
      ) {
        return false;
      }
    }
  }

  if (
    "label" in value &&
    (typeof value.label !== "string" || !value.label.length)
  ) {
    return false;
  }

  if (
    "labels" in value &&
    (!Array.isArray(value.labels) ||
      value.labels.length < 2 ||
      value.labels.some((cn: any) => typeof cn !== "string" || !cn))
  ) {
    return false;
  }

  return true;
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

const matrixRunoutAllowedKeys = Object.keys(MatrixRunoutAllowedKeys);
const matrixRunoutAllowedKeysSet = new Set(matrixRunoutAllowedKeys);

const validateMatrixRunout = <T extends DBRelease2>(
  release: T
): release is T & { matrix_runout: MatrixRunout | null } => {
  const { matrix_runout } = release;

  if (matrix_runout === null) {
    return true;
  }

  if (typeof matrix_runout === "string" && matrix_runout) {
    return true;
  }

  if (typeof matrix_runout !== "object") {
    return false;
  }

  const keys = Object.keys(matrix_runout);

  if (!keys.length) {
    return false;
  }

  const value = matrix_runout as Record<string, unknown>;

  for (const k of keys) {
    if (
      !matrixRunoutAllowedKeysSet.has(k) ||
      typeof value[k] !== "string" ||
      !value[k]
    ) {
      return false;
    }
  }

  return true;
};

const validateReleaseSpeed = <T extends DBRelease2>(
  release: T
): release is T & { speed: 33 | null } =>
  release.speed === null || release.speed === 33;
