import type { NonEmptyArray, Result } from "../../types/utils";
import {
  CatNumbersObjType,
  type ValidatedCatNumbers,
  ValidCatNumbersObject,
} from "../../types/validation";

import {
  arrayIsNonEmpty,
  flattenResults,
  isNonEmpty,
  isNonEmptyString,
  isNonEmptyStringOrArrayofStrings,
  map,
  objHasKeys,
} from "../../utils";

export default function validateCatNumbers(
  value: unknown
): Result<ValidatedCatNumbers | null> {
  if (value === null) {
    return null;
  }

  if (Array.isArray(value)) {
    if (arrayIsNonEmpty(value)) {
      const cat_numbersArrayResults = map(value, (c) =>
        validateCatNumbersObj(c, `"cat_numbers" field's element`)
      );

      return flattenResults(cat_numbersArrayResults) as Result<
        NonEmptyArray<ValidCatNumbersObject>
      >; // if array of results is non empty, the result of its flattening is of this type
    } else {
      return { errors: ['"cat_numbers" field cannot be an empty array'] };
    }
  }

  return validateCatNumbersObj(value);
}

const validateCatNumbersObj = (
  value: unknown,
  prefix = '"cat_numbers" field'
): Result<ValidCatNumbersObject> => {
  if (typeof value !== "object" || value === null) {
    return { errors: [`${prefix} is not an object`] };
  }

  const keys = Object.keys(value);

  const keysAreValid =
    keys.length <= 2 &&
    keys[0] &&
    ((keyIsCatNumbers(keys[0]) && (!keys[1] || keyIsLabels(keys[1]))) ||
      (keyIsLabels(keys[0]) && (!keys[1] || keyIsCatNumbers(keys[1]))));

  if (!keysAreValid)
    return {
      errors: [
        `${prefix} is an object, but does not have a required shape (only optional properties 'label(s)' and 'cat_number(s)' are allowed and at least one is required)`,
      ],
    };

  const errors: string[] = [];

  if ("label" in value && !isNonEmptyString(value.label)) {
    errors.push(
      `${prefix}'s property "label" is not a non-empty string without white spaces in the beginning or the end`
    );
  }

  if ("labels" in value) {
    if (typeof value.labels !== "object" || value.labels === null) {
      errors.push(`${prefix}'s property "labels" is not an array or an object`);
    } else if (Array.isArray(value.labels)) {
      if (value.labels.length < 2) {
        errors.push(
          `${prefix}'s property "labels" is an array, but it needs to contain at least two elements`
        );
      }

      if (value.labels.some((c) => !isNonEmptyString(c))) {
        errors.push(
          `${prefix}'s property "labels" is an array, but it contains an element which is not a non-empty string, or contains white spaces in the beginning or the end`
        );
      }
    }
  }

  if ("cat_number" in value && !isNonEmptyString(value.cat_number)) {
    errors.push(
      `${prefix}'s property "cat_number" is not a non-empty string without white spaces in the beginning or the end`
    );
  }

  if ("cat_numbers" in value) {
    if (
      typeof value.cat_numbers === "object" &&
      value.cat_numbers !== null &&
      objHasKeys(value.cat_numbers, ["CD", "slipcase"])
    ) {
      const cdValue = value.cat_numbers["CD"];
      const slipcaseValue = value.cat_numbers["slipcase"];

      const cdValueValidationResult = validateCatNumbersShape(
        cdValue,
        `"cat_numbers"'s property "CD"`
      );
      const slipcaseValueValidationResult = validateCatNumbersShape(
        slipcaseValue,
        `"cat_numbers"'s property "slipcase"`
      );

      if (
        typeof cdValueValidationResult === "object" &&
        "errors" in cdValueValidationResult
      ) {
        errors.push(...cdValueValidationResult.errors);
      }

      if (
        typeof slipcaseValueValidationResult === "object" &&
        "errors" in slipcaseValueValidationResult
      ) {
        errors.push(...slipcaseValueValidationResult.errors);
      }
    } else {
      const catNumbersObjValidationResult = validateCatNumbersObjectShape(
        value.cat_numbers,
        `${prefix}'s property "cat_numbers"`
      );

      if ("errors" in catNumbersObjValidationResult)
        errors.push(...catNumbersObjValidationResult.errors);
    }
  }

  if (arrayIsNonEmpty(errors)) {
    return { errors };
  }

  return value as ValidCatNumbersObject; // verified above
};

const validateCatNumbersShape = (
  value: unknown,
  prefix: string
): Result<string | CatNumbersObjType> => {
  if (typeof value === "string") {
    return isNonEmpty(value)
      ? value
      : {
          errors: [
            `${prefix} is a string, but not non-empty wihout empty spaces in the beginning or the end`,
          ],
        };
  }

  return validateCatNumbersObjectShape(value, prefix);
};

const validateCatNumbersObjectShape = (
  value: unknown,
  prefix: string
): Result<CatNumbersObjType> => {
  let errors: string[] = [];

  if (typeof value !== "object" || value === null) {
    errors.push(`${prefix} is not an array or an object`);
  } else if (Array.isArray(value)) {
    if (value.length < 2) {
      errors.push(
        `${prefix} is an array, but it needs to contain at least two elements`
      );
    }

    if (value.some((c) => !isNonEmptyString(c))) {
      errors.push(
        `${prefix} is an array, but it contains an element which is not a non-empty string, or contains white spaces in the beginning or the end`
      );
    }
  } else if (
    !objHasKeys(value, ["in Europe", "in UK"]) ||
    !isNonEmptyStringOrArrayofStrings(value["in Europe"]) ||
    !isNonEmptyStringOrArrayofStrings(value["in UK"])
  ) {
    errors.push(`${prefix} is an object, but does not have a required shape`);
  }

  if (arrayIsNonEmpty(errors)) {
    return { errors };
  }

  return value as CatNumbersObjType; // verified above
};

const keyIsCatNumbers = (key: string): boolean => /^cat_number(s?)$/.test(key);

const keyIsLabels = (key: string): boolean => /^label(s?)$/.test(key);
