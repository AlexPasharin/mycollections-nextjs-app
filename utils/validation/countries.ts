import type { NonEmptyStringArray, Result } from "../../types/utils";
import type {
  StringOrStringArray,
  ValidatedCountriesType,
} from "../../types/validation";
import { objHasKeys } from "../index";

export default function validateCountries(
  value: unknown,
  countries: Record<string, string | undefined>
): Result<{ countries: ValidatedCountriesType | null }> {
  if (value === null) {
    return { value: { countries: null } };
  }

  let errors: string[] = [];

  if (typeof value === "object" && !Array.isArray(value)) {
    if (objHasKeys(value, ["made in", "printed in"])) {
      const objValidation = validateObjPropsAsStringOrArrayOfStrings(
        value,
        ["made in", "printed in"],
        countries
      );

      return objValidation;
    } else if (objHasKeys(value, ["CD", "slipcase"])) {
      const cdPropValue =
        typeof value.CD === "object" &&
        value.CD !== null &&
        objHasKeys(value.CD, ["made in", "printed in"])
          ? validateObjPropsAsStringOrArrayOfStrings(
              value.CD,
              ["made in", "printed in"],
              countries,
              "Countries field's property's 'CD' field's"
            )
          : {
              errors: [
                `Countries field value ${JSON.stringify(
                  value
                )} has property "CD", but it is not an object of addmissible shape (should have properties "made in" and "printed in" and only them)`,
              ],
            };

      const slipcasePropValue =
        typeof value.slipcase === "object" &&
        value.slipcase !== null &&
        objHasKeys(value.slipcase, ["printed in"])
          ? validateObjPropsAsStringOrArrayOfStrings(
              value.slipcase,
              ["printed in"],
              countries,
              "Countries field's property's 'slipcase' field's"
            )
          : {
              errors: [
                `Countries field value ${JSON.stringify(
                  value
                )} has property "slipcase", but it is not an object of addmissible shape (should have only property "printed in")`,
              ],
            };

      if ("countries" in cdPropValue && "countries" in slipcasePropValue) {
        return {
          value: {
            countries: {
              CD: cdPropValue.countries,
              slipcase: slipcasePropValue.countries,
            } as any,
          },
        };
      }

      if ("errors" in cdPropValue) {
        errors.push(...cdPropValue.errors);
      }

      if ("errors" in slipcasePropValue) {
        errors.push(...slipcasePropValue.errors);
      }
    } else {
      errors.push(
        `Countries field value ${JSON.stringify(
          value
        )} is an object of non-admissible shape (should have either properties "made in" and "printed in" or properties "CD" and "slipcase", and only those)`
      );
    }

    return { errors: errors as NonEmptyStringArray }; // we know from above implementstion that here this assertion must be true, TS can only identify errors as string[]
  }

  return validateCountriesFieldAsStringOrArrayOfStrings(value, countries);
}

const validateCountriesFieldAsStringOrArrayOfStrings = (
  value: unknown,
  countries: Record<string, string | undefined>,
  prefix = "Countries field value"
): Result<{ countries: StringOrStringArray }> => {
  let errors: string[] = [];

  // if value is an array, it should be an array of strings, all of which satisfy the condition of the previous if-claws
  if (Array.isArray(value)) {
    if (!value.length) {
      return {
        errors: [`${prefix} is an array, but it's empty`],
      };
    }

    const stringMembers = value.filter((v) => typeof v === "string");
    const nonStringMembers = value.filter((v) => typeof v !== "string");

    // all elements of array must be a string
    if (nonStringMembers.length) {
      errors.push(
        ...nonStringMembers.map(
          (v) => `${prefix} is an array, but its element ${v} is not a string`
        )
      );
    }

    const countriesResolved = stringMembers.map(
      (v) =>
        countries[v] || {
          error: `${prefix} is an array, but its element ${v} does not correspond to an actual country`,
        }
    );

    const countriesResolvedErrors = countriesResolved.filter(
      (cr) => typeof cr !== "string"
    );

    if (countriesResolvedErrors.length) {
      errors.push(...countriesResolvedErrors.map(({ error }) => error));
    } else if (!errors.length) {
      return { value: { countries: countriesResolved as NonEmptyStringArray } }; // we know from above that in this clause this assertion must be true
    }
  } else if (typeof value === "string") {
    const countryResolved = countries[value];

    if (typeof countryResolved === "string") {
      return { value: { countries: countryResolved } };
    }

    errors.push(
      `${prefix} ${value} is a string, but it does not correspond to an actual country`
    );
  } else {
    errors.push(
      `${prefix} ${JSON.stringify(
        value
      )} is not a string or an array of strings`
    );
  }

  return { errors: errors as NonEmptyStringArray }; // we know from above implementstion that here this assertion must be true, TS can only identify errors as string[]
};

const validateObjPropsAsStringOrArrayOfStrings = <U extends string>(
  obj: Record<string, unknown>,
  propNames: U[],
  countries: Record<string, string | undefined>,
  prefix?: string
): Result<{ countries: Record<U, StringOrStringArray> }> => {
  const results = propNames.map((propName) => ({
    result: validateObjPropAsStringOrArrayOfStrings(obj, propName, countries),
    propName,
    prefix,
  }));

  const errors = results.reduce<string[]>((acc, { result }) => {
    if ("errors" in result) {
      return [...acc, ...result.errors];
    }

    return acc;
  }, []);

  if (errors.length) {
    return { errors: errors as NonEmptyStringArray };
  }

  return {
    value: {
      countries: results.reduce(
        (acc, { result, propName }) => ({
          ...acc,
          [propName]: (result as { value: { countries: NonEmptyStringArray } })
            .value.countries,
        }),
        {}
      ) as Record<U, StringOrStringArray>,
    },
  };
};

const validateObjPropAsStringOrArrayOfStrings = (
  obj: Record<string, unknown>,
  propName: string,
  countries: Record<string, string | undefined>,
  prefix = "Countries field's"
): Result<{ countries: StringOrStringArray }> =>
  validateCountriesFieldAsStringOrArrayOfStrings(
    obj[propName],
    countries,
    `${prefix} ${propName} property's value`
  );
