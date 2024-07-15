import { validateObjectsWithID } from ".";
import type { DBEntry2 } from "../../types/entries";
import type { ID, NonEmptyStringArray, Result } from "../../types/utils";
import { ValidatedDBEntry } from "../../types/validation";

import {
  validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings,
  removeNils,
  validatePropsAreNonEmptyIfStrings,
  arrayIsNonEmpty,
  map,
} from "../../utils";
import validateReleaseDate from "./release_date";

export default function validateEntries(
  entries: DBEntry2[]
): Result<ValidatedDBEntry[]> {
  return validateObjectsWithID(entries, validateEntry);
}

export const validateEntry = (
  entry: DBEntry2,
  dbEntryIDs: Set<ID>
): Result<ValidatedDBEntry> => {
  let errors: string[] = [];

  // "name", "comment", "discogs_url", "relation_to_queen", "entry_artist_name" must be non-empty not contain white space characters in the beginning and in the end
  const stringPropsValidityCheck = validatePropsAreNonEmptyIfStrings(entry, [
    "name",
    "comment",
    "discogs_url",
    "relation_to_queen",
    "entry_artist_name",
  ]);

  if (stringPropsValidityCheck) {
    errors.push(...stringPropsValidityCheck.errors);
  }

  // release_date must be valid
  const releaseDateValidityCheck = validateReleaseDate(entry.release_date);

  if (releaseDateValidityCheck) {
    errors.push(...releaseDateValidityCheck.errors);
  }

  // if entry is not a part of queen_collection, "relation_to_queen" must be null
  const { part_of_queen_collection, relation_to_queen } = entry;
  if (!part_of_queen_collection && typeof relation_to_queen === "string") {
    errors.push(
      `Relation to queen should be null if entry is not a part of queen collection`
    );
  }

  // "tags" and "parent_entries" fields' values must be null or a non-empty array of non-empty strings
  const entryWithStringArrayFieldsValidated =
    validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings(entry, [
      "tags",
      "parent_entries",
    ]);

  let parent_entries: NonEmptyStringArray | null = null;

  if ("errors" in entryWithStringArrayFieldsValidated) {
    errors.push(...entryWithStringArrayFieldsValidated.errors);
  } else {
    parent_entries = entryWithStringArrayFieldsValidated.parent_entries;
  }

  if (parent_entries) {
    // every value in "parent_entries" array must correspong to an actual entry in the database
    const nonValidParentEntries = parent_entries.filter(
      (pa) => !dbEntryIDs.has(pa)
    );

    errors.push(
      ...nonValidParentEntries.map(
        (pa) => `Parent entry "${pa}" could not be found from database`
      )
    );
  }

  if (arrayIsNonEmpty(errors)) {
    return {
      errors: map(errors, (e) => `Entry ${entry.id}: ${e}`),
    };
  }

  return removeNils({
    ...entryWithStringArrayFieldsValidated,
    part_of_queen_collection: part_of_queen_collection || null, // we keep the value of "part_of_queen_collection" only if it is true, to save space on the resulting data
  });
};
