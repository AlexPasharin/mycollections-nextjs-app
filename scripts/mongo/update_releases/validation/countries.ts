import { equals } from "ramda";

import type { Result } from "../../../../types/utils";
import { DBRelease2 } from "../../../../types/entries";

type StringOrStringArray = string | string[];
type CountriesObjectType<T> = { "made in": T; "printed in": T };

export type ValidatedCountriesType =
  | StringOrStringArray
  | CountriesObjectType<StringOrStringArray>;

export const validateCountriesField = <T extends DBRelease2>(
  fieldValue: unknown,
  dbCountries: Record<string, string | undefined>
): Result<{
  countries: ValidatedCountriesType | null;
}> => {
  const stringValidation = validateCountriesFieldAsStringOrArrayOfStrings(
    fieldValue,
    dbCountries
  );

  if (stringValidation !== null) {
    return stringValidation;
  }

  if (fieldValue === null) {
    return { countries: null };
  }

  if (
    typeof fieldValue !== "object" ||
    !equals(Object.keys(fieldValue).sort(), ["made in", "printed in"])
  ) {
    return {
      errors: [
        `Countries field ${JSON.stringify(
          fieldValue
        )} is not an object of required shape (allowed keys: "made in", "printed in")`,
      ],
    };
  }

  const madeInCountries = (fieldValue as CountriesObjectType<unknown>)[
    "made in"
  ];

  const madeInCountriesResolved =
    validateCountriesFieldAsStringOrArrayOfStrings(
      madeInCountries,
      dbCountries
    );

  if (madeInCountriesResolved === null) {
    return {
      errors: [
        `The value ${JSON.stringify(
          madeInCountries
        )} of the key "made in" is not a string or an array of strings`,
      ],
    };
  }

  if ("errors" in madeInCountriesResolved) {
    return {
      errors: madeInCountriesResolved.errors,
    };
  }

  const printedInCountries = (fieldValue as CountriesObjectType<unknown>)[
    "printed in"
  ];

  const printedInCountriesResolved =
    validateCountriesFieldAsStringOrArrayOfStrings(
      printedInCountries,
      dbCountries
    );

  if (printedInCountriesResolved === null) {
    return {
      errors: [
        `The value ${JSON.stringify(
          printedInCountries
        )} of the key "printed in" is not a string or an array of strings`,
      ],
    };
  }

  if ("errors" in printedInCountriesResolved) {
    return {
      errors: printedInCountriesResolved.errors,
    };
  }

  return {
    countries: {
      ["made in"]: madeInCountriesResolved.countries,
      ["printed in"]: printedInCountriesResolved.countries,
    },
  };
};

const validateCountriesFieldAsStringOrArrayOfStrings = (
  fieldValue: unknown,
  dbCountries: Record<string, string | undefined>
): Result<{ countries: StringOrStringArray } | null> => {
  // if fieldValue is a string, it should correspond to an actual string as a key in dbCountries dictionary
  if (typeof fieldValue === "string") {
    const countryValue = dbCountries[fieldValue];

    if (countryValue) {
      return {
        countries: countryValue,
      };
    } else {
      return {
        errors: [`Country id ${fieldValue} does not correspond to a country`],
      };
    }
  }

  // if fieldValue is an array, it should be an array of strings, all of which satisfy the condition of the previous if-claws
  if (Array.isArray(fieldValue)) {
    if (!fieldValue.length) {
      return {
        errors: [`Countries array cannot be empty`],
      };
    }

    const stringMembers = fieldValue.filter((v) => typeof v === "string");
    const nonStringMembers = fieldValue.filter((v) => typeof v !== "string");

    if (nonStringMembers.length) {
      // case when some elements are not strings
      return {
        errors: nonStringMembers.map(
          (v) =>
            `Countries field is an array and its element ${v} is not an array`
        ),
      };
    }

    const countriesResolved = stringMembers.map(
      (v) => validateCountriesField(v, dbCountries) // note recurssive call
    );
    const countriesResolvedErrors = countriesResolved.filter(
      (cr): cr is { errors: string[] } => "errors" in cr
    );

    if (countriesResolvedErrors.length) {
      return {
        errors: countriesResolvedErrors.map(({ errors }) => errors).flat(),
      };
    }

    return {
      // we know that if we are here, in resurssive call every returned "countries" value is a string
      countries: (countriesResolved as { countries: string }[]).map(
        ({ countries }) => countries
      ),
    };
  }

  return null;
};
