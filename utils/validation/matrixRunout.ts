import { arrayIsNonEmpty, isNonEmpty, isNonEmptyString } from "../../utils";
import { Result } from "../../types/utils";
import {
  MatrixRunout,
  MatrixRunoutDigitalKeys,
  MatrixRunoutVinylKeys,
} from "../../types/validation";

export default function validateMatrixRunout(
  value: unknown
): Result<{ matrixRunout: MatrixRunout | null }> {
  if (value === null) {
    return { matrixRunout: value };
  }

  if (typeof value === "string") {
    return isNonEmpty(value)
      ? { matrixRunout: value }
      : {
          errors: [
            `"matrix_runout" is a string, but not non-empty wihout empty spaces in the beginning or the end`,
          ],
        };
  }
  if (typeof value !== "object") {
    return { errors: [`"matrix_runout" is not a string or an object`] };
  }

  const entries = Object.entries(value);

  if (!entries.length) {
    return { errors: [`"matrix_runout" is an empty object`] };
  }

  let errors: string[] = [];

  let containsDigitalKeys = false;
  let containsVinylKeys = false;

  entries.forEach(([k, v]) => {
    if (k in MatrixRunoutDigitalKeys) {
      containsDigitalKeys = true;

      if (!digitalMatrixRunoutKeyValueIsCorrect(v)) {
        errors.push(
          `value of "matrix_runout" property "${k}" is not of correct type (should be a non empty string without white spaces in the beginning or the end or an object with similar string-value property "mirrored)"`
        );
      }
    } else if (k in MatrixRunoutVinylKeys) {
      containsVinylKeys = true;

      if (!vinylMatrixRunoutKeyValueIsCorrect(v)) {
        errors.push(
          `value of "matrix_runout" property "${k}" is not of correct type (should be a non empty string without white spaces in the beginning or the end or an object with similar string-value properties "etched" (mandatory), "stamped" (optional) or "comment" (optional)`
        );
      }
    } else if (k === "LP") {
      if (!lpMatrixRunoutKeyValueIsCorrect(v)) {
        errors.push(
          `value of "matrix_runout" property "${k}" is not of correct type (should only contain vinyl properties widh addmissible values)"`
        );
      }
    } else {
      errors.push(
        `"matrix_runout" is an object with a property "${k}", which is non admissible`
      );
    }
  });

  if (containsDigitalKeys && containsVinylKeys) {
    errors.push(
      `value of "matrix_runout" contains both digital and vinyl keys, which cannot be mixed`
    );
  }

  if (arrayIsNonEmpty(errors)) {
    return { errors };
  }

  return { matrixRunout: value as MatrixRunout };
}

const digitalMatrixRunoutKeyValueIsCorrect = (value: unknown): boolean => {
  if (isNonEmptyString(value)) {
    return true;
  }

  if (typeof value !== "object" || value === null) {
    return false;
  }

  const objKeys = Object.keys(value);

  if (
    objKeys.length < 1 ||
    objKeys.length > 2 ||
    !("mirrored" in value) ||
    !isNonEmptyString(value.mirrored)
  ) {
    return false;
  }

  if (
    objKeys.length === 2 &&
    (!("normal" in value) || !isNonEmptyString(value.normal))
  ) {
    return false;
  }

  return true;
};

const vinylMatrixRunoutKeyValueIsCorrect = (value: unknown): boolean => {
  if (isNonEmptyString(value)) {
    return true;
  }

  if (typeof value !== "object" || value === null) {
    return false;
  }

  const objKeys = Object.keys(value);

  if (
    objKeys.length < 1 ||
    objKeys.length > 3 ||
    objKeys.find((k) => k !== "stamped" && k !== "comment" && k !== "etched") ||
    !("etched" in value) ||
    !isNonEmptyString(value.etched)
  ) {
    return false;
  }

  if (
    ("stamped" in value && !isNonEmptyString(value.stamped)) ||
    ("comment" in value && !isNonEmptyString(value.comment))
  ) {
    return false;
  }

  return true;
};

const lpMatrixRunoutKeyValueIsCorrect = (value: unknown): boolean => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const entries = Object.entries(value);

  if (!entries.length) {
    return false;
  }

  for (const [k, v] of entries) {
    if (
      !(k in MatrixRunoutVinylKeys) ||
      !vinylMatrixRunoutKeyValueIsCorrect(v)
    ) {
      return false;
    }
  }

  return true;
};
