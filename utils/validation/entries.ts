import type { DBArtist } from "../../types/artists";
import { validateObjectsWithID } from ".";
import type { DBEntry2 } from "../../types/entries";
import type { ID, Result } from "../../types/utils";
import { Entry, ValidatedDBEntry } from "../../types/validation";

import {
  validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings,
  removeNils,
  validatePropsAreNonEmptyIfStrings,
  arrayIsNonEmpty,
  map,
} from "../../utils";
import validateReleaseDate from "./release_date";

export default function validateEntries(
  artists: DBArtist[],
  entries: DBEntry2[]
): Result<Entry[]> {
  const artistsMap = new Map(artists.map((a) => [a.id, a]));

  return validateObjectsWithID(entries, (entries, dbEntryIDs) =>
    validateEntry(entries, dbEntryIDs, artistsMap)
  );
}

const validateEntry = (
  entry: DBEntry2,
  dbEntryIDs: Set<ID>,
  artists: Map<ID, DBArtist>
): Result<Entry> => {
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
  const entryWithStringArrayFieldsValidated: Result<ValidatedDBEntry> =
    validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings(entry, [
      "tags",
      "parent_entries",
    ]);

  if ("errors" in entryWithStringArrayFieldsValidated) {
    errors.push(...entryWithStringArrayFieldsValidated.errors);
  } else {
    const { artist_id, parent_entries, entry_artist_id, entry_artist_name } =
      entryWithStringArrayFieldsValidated;

    if (parent_entries) {
      // every value in "parent_entries" array must correspond to an actual entry in the database
      const nonValidParentEntries = parent_entries.filter(
        (pa) => !dbEntryIDs.has(pa)
      );

      errors.push(
        ...nonValidParentEntries.map(
          (pa) => `Parent entry "${pa}" could not be found from database`
        )
      );
    }

    if (entry_artist_id === artist_id) {
      errors.push(
        `artist_id is not allowed to have the same value as entry_artist_id`
      );
    } else if (entry_artist_id) {
      const entry_artist = artists.get(entry_artist_id)!; // Since we assume this values come from database, entry_artist cannot be undefined

      entryWithStringArrayFieldsValidated.entry_artist = entry_artist.name;
    }

    if (entry_artist_name) {
      const artist = artists.get(entry_artist_id || artist_id)!; // Since we assume this values come from database, entry_artist cannot be undefined

      if (
        !Array.isArray(artist.other_names) ||
        !artist.other_names.includes(entry_artist_name)
      ) {
        errors.push(
          `Entry artist name "${entry_artist_name}" is specified, but artist ${artist.name}'s "other_names" property is not an array that contains the value "${entry_artist_name}"`
        );
      }
    }
  }

  if (arrayIsNonEmpty(errors)) {
    return {
      errors: map(errors, (e) => `Entry ${entry.id}: ${e}`),
    };
  }

  return removeNils({
    ...entryWithStringArrayFieldsValidated,
    part_of_queen_collection: part_of_queen_collection || null, // we keep the value of "part_of_queen_collection" only if it is true, to save space on the resulting data
    entry_artist_id: null,
  });
};
