import type { DBArtist } from "../../types/artists";
import type { ID, NonEmptyStringArray, Result } from "../../types/utils";
import type { ValidatedDBArtist } from "../../types/validation";

import {
  validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings,
  removeNils,
  validatePropsAreNonEmptyIfStrings,
  arrayIsNonEmpty,
  map,
} from "..";
import { validateObjectsWithID } from ".";

export default function validateArtists(
  artists: DBArtist[]
): Result<ValidatedDBArtist[]> {
  return validateObjectsWithID(artists, validateArtist);
}

const validateArtist = (
  artist: DBArtist,
  artistIDsSet: Set<ID>
): Result<ValidatedDBArtist> => {
  let errors: string[] = [];

  // "name" and "name_for_sorting" fields' values must be null or properly trimmed non-empty strings
  const stringPropsValidityCheck = validatePropsAreNonEmptyIfStrings(artist, [
    "name",
    "name_for_sorting",
  ]);

  errors.push(...(stringPropsValidityCheck?.errors || []));

  // "other_names" and "parent_artists" fields' values must be null or a non-empty array of non-empty strings
  const artistWithStringArrayFieldsValidated =
    validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings(artist, [
      "other_names",
      "parent_artists",
    ]);

  let parent_artists: NonEmptyStringArray | null = null;

  if ("errors" in artistWithStringArrayFieldsValidated) {
    errors.push(...artistWithStringArrayFieldsValidated.errors);
  } else {
    parent_artists = artistWithStringArrayFieldsValidated.parent_artists;
  }

  if (parent_artists) {
    // every value in "parent_artists" array must correspond to an actual artist in the database
    const nonValidParentArtistIDs = parent_artists.filter(
      (pa) => !artistIDsSet.has(pa)
    );

    errors.push(
      ...nonValidParentArtistIDs.map(
        (pa) => `Parent artist "${pa}" could not be found from database`
      )
    );
  }

  if (arrayIsNonEmpty(errors)) {
    return {
      // we know from above implementation that here this assertion must be true, TS can only identify errors as string[]
      errors: map(errors, (e) => `Artist ${artist.id}: ${e}`),
    };
  }

  return removeNils(artistWithStringArrayFieldsValidated);
};
