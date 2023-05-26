import type { DBEntry2 } from "../../../../types/entries";
import type {
  NonEmptyStringArray,
  NullableToOptional,
  Result,
} from "../../../../types/utils";

import {
  validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings,
  removeNils,
  validatePropsAreNonEmptyIfStrings,
} from "../../../../utils";
import { releaseDateIsValid } from "./release_date";

type ValidatedDBEntry = NullableToOptional<
  Omit<DBEntry2, "tags" | "parent_entries">
> & {
  tags?: NonEmptyStringArray;
  parent_entries?: NonEmptyStringArray;
  part_of_queen_collection?: true;
};

export const validateEntries = (
  entry: DBEntry2,
  dbEntryIDs: Set<string>
): Result<ValidatedDBEntry> => {
  const releaseDateValidityCheck = releaseDateIsValid(entry.release_date);

  if (releaseDateValidityCheck !== true) {
    return releaseDateValidityCheck;
  }

  // "tags" anf "parent_entries" fields' values must be null or a non-empty array of non-empty strings
  const entryWithStringArrayFieldsValidated =
    validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings(entry, [
      "tags",
      "parent_entries",
    ]);

  if ("errors" in entryWithStringArrayFieldsValidated) {
    return entryWithStringArrayFieldsValidated;
  }

  // every value in "parent_entries" array must correspong to an actual entry in the database
  const nonValidParentEntries = (
    entryWithStringArrayFieldsValidated.parent_entries || []
  ).filter((pa) => !dbEntryIDs.has(pa));

  if (nonValidParentEntries.length) {
    return {
      errors: nonValidParentEntries.map(
        (pa) => `Parent entry "${pa}" could not be found from database`
      ),
    };
  }

  const stringPropsValidityCheck = validatePropsAreNonEmptyIfStrings(
    entryWithStringArrayFieldsValidated,
    ["comment", "discogs_url", "relation_to_queen"]
  );

  if (stringPropsValidityCheck !== true) {
    return stringPropsValidityCheck;
  }

  return removeNils({
    ...entryWithStringArrayFieldsValidated,
    part_of_queen_collection:
      entryWithStringArrayFieldsValidated.part_of_queen_collection || null,
  });
};
