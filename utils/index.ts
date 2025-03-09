import { readJson } from "fs-extra";
import { join } from "path";
import { complement, equals, isNil, pickBy } from "ramda";

import {
  NonEmptyArray,
  NonEmptyStringArray,
  NullableToOptional,
  Result,
} from "../types/utils";

export const getJSONData = <T = unknown>(path: string): Promise<T> =>
  readJson(join("data", `${path}.json`));

// removes from the object all keys whose value if null or undefined
export const removeNils = <T>(obj: T): NullableToOptional<T> =>
  pickBy<T, NullableToOptional<T>>(complement(isNil), obj);

// verifies that for all given key names, the value of obj[key] is either null or a non-empty array of strings
// white spaces in the beginning or the end of any string are not allowed either
// returns the original given object, if verification succeeds or "errors" object describing which properties are
export const validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings = <
  U extends string,
  T extends { [key in U]: unknown }
>(
  obj: T,
  keys: U[]
): Result<T & { [key in U]: NonEmptyStringArray | null }> => {
  const keysWithWrongTypeOfValue = keys.filter(
    (key) => !isNullOrNonEmptyArrOfNonEmptyStrings(obj[key])
  );

  if (arrayIsNonEmpty(keysWithWrongTypeOfValue)) {
    return {
      errors: map(
        keysWithWrongTypeOfValue,
        (key) =>
          `"${key}" field must be null or a non-empty array of non-empty strings, also white spaces in the beginning or the end are not allowed`
      ),
    };
  }

  // "as" assertion is needed because this implementation cannot verify the correct type
  return obj as Result<T & { [key in U]: NonEmptyStringArray | null }>;
};

export const validatePropsAreNonEmptyIfStrings = <
  U extends string,
  T extends { [key in U]: string | null }
>(
  obj: T,
  keys: U[]
): Result<null> => {
  const keysWithWrongTypeOfValue = keys.filter(
    (key) => !isNonEmptyIfString(obj[key])
  );

  if (arrayIsNonEmpty(keysWithWrongTypeOfValue)) {
    return {
      errors: map(
        keysWithWrongTypeOfValue,
        (key) =>
          `"${key}" cannot be an empty string or contain whitespace characters in the beginning or the end`
      ),
    };
  }

  return null;
};

export const arrayIsNonEmpty = <T>(arr: T[]): arr is NonEmptyArray<T> =>
  arr.length > 0;

export const map = <T, U>(
  arr: NonEmptyArray<T>,
  cb: (val: T) => U
): NonEmptyArray<U> => arr.map(cb) as NonEmptyArray<U>;

export const flat = <T>(
  arr: NonEmptyArray<NonEmptyArray<T>>
): NonEmptyArray<T> => arr.flat() as NonEmptyArray<T>;

export function flattenResults<T extends object>(
  results: Array<Result<T>>
): Result<Array<T>> {
  const resultsWithErrors = results.filter((v) => "errors" in v);

  if (arrayIsNonEmpty(resultsWithErrors)) {
    return {
      errors: flat(map(resultsWithErrors, ({ errors }) => errors)),
    };
  }

  // TS is smart enough to understand resultsWithErrors above have type {errors: NonEmptyStringArray}, but it cannot now that if resultsWithErrors is empty, all results have type T, so we need an "as" assertion
  return results as Array<T>;
}

export const objHasKeys = <U extends string>(
  obj: object,
  keys: U[]
): obj is Record<U, unknown> => equals(Object.keys(obj).sort(), keys.sort());

export const isNonEmptyString = (val: unknown): val is string =>
  typeof val === "string" && isNonEmpty(val);

export const isNonEmptyStringOrArrayofStrings = (val: unknown) =>
  isNonEmptyString(val) ||
  (isNonEmptyArrOfNonEmptyStrings(val) && val.length > 1);

const isNonEmptyArrOfNonEmptyStrings = (
  val: unknown
): val is NonEmptyStringArray =>
  Array.isArray(val) && arrayIsNonEmpty(val) && val.every(isNonEmptyString);

// returns true if given value is null or is a non-empty string without whitespace characters in the beginning or the end
const isNonEmptyIfString = (str: string | null): boolean =>
  str === null || isNonEmpty(str);

export const isNonEmpty = (str: string) => !!str && !/\s/.test(str.at(0) as string) &&  !/\s/.test(str.at(-1) as string)

// returns true iff obj[key] is either null or a non-empty array of strings and each string in that array do not contain white space in the beginning or the end
const isNullOrNonEmptyArrOfNonEmptyStrings = (
  val: unknown
): val is NonEmptyStringArray | null =>
  val === null || isNonEmptyArrOfNonEmptyStrings(val);
