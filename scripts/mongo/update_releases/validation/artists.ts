import type { DBArtist2 } from "../../../../types/artists";
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

type ValidatedDBArtist = NullableToOptional<
  Omit<DBArtist2, "parent_artists" | "other_names">
> & {
  parent_artists?: NonEmptyStringArray;
  other_names?: NonEmptyStringArray;
};

export const validateArtist = (
  artist: DBArtist2,
  dbArtistIDs: Set<string>
): Result<ValidatedDBArtist> => {
  // "other_names" and "parent_artists" fields' values must be null or a non-empty array of non-empty strings
  const artistWithStringArrayFieldsValidated =
    validatePropsAreNullOrNonEmptyArrOfNonEmptyStrings(artist, [
      "other_names",
      "parent_artists",
    ]);

  if ("errors" in artistWithStringArrayFieldsValidated) {
    return artistWithStringArrayFieldsValidated;
  }

  // every value in "parent_artists" array must correspond to an actual artist in the database
  const nonValidParentArtists = (
    artistWithStringArrayFieldsValidated.parent_artists || []
  ).filter((pa) => !dbArtistIDs.has(pa));

  if (nonValidParentArtists.length) {
    return {
      errors: nonValidParentArtists.map(
        (pa) => `Parent artist "${pa}" could not be found from database`
      ),
    };
  }

  const stringPropsValidityCheck = validatePropsAreNonEmptyIfStrings(
    artistWithStringArrayFieldsValidated,
    ["name", "name_for_sorting"]
  );

  if (stringPropsValidityCheck !== true) {
    return stringPropsValidityCheck;
  }

  return removeNils(artistWithStringArrayFieldsValidated);
};
