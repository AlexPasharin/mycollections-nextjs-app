import { readJson } from "fs-extra";
import { join } from "path";
import { complement, isNil, pickBy } from "ramda";

import {
  NonEmptyStringArray,
  NullableToOptional,
  Result,
} from "../types/utils";

export const getJSONData = <T = unknown>(path: string): Promise<T> =>
  readJson(join("data", `${path}.json`));

// removes from the object all keys whose value if null or undefined
export const removeNils = <T>(obj: T): NullableToOptional<T> =>
  pickBy<T, NullableToOptional<T>>(complement(isNil), obj);

// validate if a given object's "unknown" typed property specified by a given key is actually null or a non-empty array of non-empty strings
// white spaces in the beginning or the end of any string are not allowed either
const validatePropIsNullOrNonEmptyArrOfNonEmptyStrings = <
  U extends string,
  T extends { [key in U]: unknown }
>(
  obj: T,
  key: U
): Result<T & { [key in U]: NonEmptyStringArray | null }> => {
  const isPropsNullOrNonEmptyArrOfNonEmptyStrings =
    objPropIsNullOrNonEmptyArrOfNonEmptyStrings(obj, key);

  return isPropsNullOrNonEmptyArrOfNonEmptyStrings
    ? obj
    : {
        errors: [
          `"${key}" field must be null or a non-empty array of non-empty strings, also white spaces in the beginning or the end are not allowed`,
        ],
      };
};

export const validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings = <
  U extends string,
  T extends { [key in U]: unknown }
>(
  obj: T,
  keys: U[]
): Result<T & { [key in U]: NonEmptyStringArray | null }> => {
  let result: any = obj;

  for (const key of keys) {
    result = validatePropIsNullOrNonEmptyArrOfNonEmptyStrings(result, key);

    if ("errors" in result) {
      return result;
    }
  }

  return result;
};

export const objPropIsNullOrNonEmptyArrOfNonEmptyStrings = <
  U extends string,
  T extends { [key in U]: unknown }
>(
  obj: T,
  key: U
): obj is T & { [key in U]: NonEmptyStringArray | null } => {
  const val = obj[key];

  return (
    val === null ||
    (Array.isArray(val) &&
      val.length > 0 &&
      val.every(
        (el) => typeof el === "string" && el.length > 0 && el.trim() === el
      ))
  );
};

export const validatePropsAreNonEmptyIfStrings = <
  U extends string,
  T extends { [key in U]: unknown }
>(
  obj: T,
  keys: U[]
): Result<true> => {
  for (const key of keys) {
    const validityCheck = validatePropIsNonEmptyIfString(obj, key);

    if (validityCheck !== true) {
      return validityCheck;
    }
  }

  return true;
};

const validatePropIsNonEmptyIfString = <
  U extends string,
  T extends { [key in U]: unknown }
>(
  obj: T,
  key: U
): Result<true> => {
  const val = obj[key];

  return typeof val === "string" && (!val || val.trim() !== val)
    ? {
        errors: [
          `"${key}" cannot be an empty string or containg empty spaces in the beginning or the end`,
        ],
      }
    : true;
};
