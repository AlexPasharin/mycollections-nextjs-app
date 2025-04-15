import { arrayIsNonEmpty, isNonEmpty, isNonEmptyString } from "../../utils";
import { Result } from "../../types/utils";
import {
  MatrixRunout,
  MatrixRunoutDigitalKeys,
  MatrixRunoutVinylKeys,
} from "../../types/validation";
import { identity, sortBy } from "ramda";

export default function validateMatrixRunout(
  value: unknown
): Result<{ matrixRunout: MatrixRunout | null }> {
  if (value === null) {
    return { value: { matrixRunout: value } };
  }

  if (typeof value === "string") {
    return isNonEmpty(value)
      ? { value: { matrixRunout: value } }
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

  const addErrorOnCondition = (error: string, cond = true) => {
    if (cond) {
      errors.push(error);
    }
  };

  let containsDigitalKeys = false;
  let containsVinylKeys = false;

  let cdKeyDigits: number[] = [];
  let dvdKeyDigits: number[] = [];
  let bdKeyDigits: number[] = [];
  let sidesKeyDigits: number[] = [];

  const populateKeyDigits = (
    key: string,
    keyDigits: number[],
    regex: RegExp,
    transformtionFn = (str: string): number => (str ? parseInt(str, 10) : 0)
  ) => {
    const match = key.match(regex);

    if (match?.[1]) {
      keyDigits.push(transformtionFn(match[1]));
    }
  };

  entries.forEach(([k, v]) => {
    if (k in MatrixRunoutDigitalKeys) {
      containsDigitalKeys = true;

      addErrorOnCondition(
        `value of "matrix_runout" property "${k}" is not of correct type (should be a non empty string without white spaces in the beginning or the end or an object with similar string-value property "mirrored)"`,
        !digitalMatrixRunoutKeyValueIsCorrect(v)
      );

      populateKeyDigits(k, cdKeyDigits, /^CD(\d*)$/);
      populateKeyDigits(k, dvdKeyDigits, /^DVD(\d*)$/);
      populateKeyDigits(k, bdKeyDigits, /^BD(\d*)$/);
    } else if (k in MatrixRunoutVinylKeys) {
      containsVinylKeys = true;

      addErrorOnCondition(
        `value of "matrix_runout" property "${k}" is not of correct type (should be a non empty string without white spaces in the beginning or the end or an object with similar string-value properties "etched" (mandatory), "stamped" (optional) or "comment" (optional)`,
        !vinylMatrixRunoutKeyValueIsCorrect(v)
      );

      populateKeyDigits(k, sidesKeyDigits, /^Side ([A-Z]+)$/, sideLetterCode);
    } else if (k === "LP") {
      addErrorOnCondition(
        `value of "matrix_runout" property "${k}" is not of correct type (should only contain vinyl properties widh addmissible values)`,
        !lpMatrixRunoutKeyValueIsCorrect(v)
      );
    } else if (k === "mirrored") {
      addErrorOnCondition(
        `value of "matrix_runout" property "${k}" should be a non empty string without white spaces in the beginning or the end"`,
        !isNonEmptyString(v)
      );
    } else {
      addErrorOnCondition(
        `"matrix_runout" is an object with a property "${k}", which is non admissible`
      );
    }
  });

  addErrorOnCondition(
    `value of "matrix_runout" contains both digital and vinyl keys, which cannot be mixed`,
    containsDigitalKeys && containsVinylKeys
  );

  const checkKeyDigitsForErrors = (
    keyDigits: number[],
    idenitifier: string
  ) => {
    if (keyDigits.length) {
      keyDigits = sortBy(identity, keyDigits);

      addErrorOnCondition(
        `"matrix_runout" contains both "${idenitifier}" key and "${idenitifier}(number)" key`,
        keyDigits[0] === 0 && keyDigits.length > 1
      );

      addErrorOnCondition(
        `"matrix_runout" contains "${idenitifier}" keys, but they are not consecutive numbers starting from 1`,
        keyDigits[0] !== 0 &&
          keyDigits[keyDigits.length - 1] !== keyDigits.length
      );
    }
  };

  checkKeyDigitsForErrors(cdKeyDigits, "CD");
  checkKeyDigitsForErrors(dvdKeyDigits, "DVD");
  checkKeyDigitsForErrors(bdKeyDigits, "BD");

  if (sidesKeyDigits.length) {
    sidesKeyDigits = sortBy(identity, sidesKeyDigits);

    // 'if "matrix_runout" contains "Side X" it must also contain only "Side Y"'
    if (sidesKeyDigits[0] === sideLetterCode("X")) {
      addErrorOnCondition(
        'if "matrix_runout" contains "Side X" it must also contain only "Side Y"',
        sidesKeyDigits.length !== 2 || sidesKeyDigits[1] !== sideLetterCode("Y")
      );
    } else {
      // otherwise it must be either combination "Side AA" / "Side A" or consecutive letters starting from A`
      addErrorOnCondition(
        `"matrix_runout" contains "Side (letter)" keys, but they are not consecutive letters starting from A`,
        // if release has "Side AA", it must have only "Side A" as the other side
        sidesKeyDigits[0] === 0
          ? sidesKeyDigits.length !== 2 || sidesKeyDigits[1] !== 1
          : sidesKeyDigits[sidesKeyDigits.length - 1] !== sidesKeyDigits.length
      );
    }
  }

  addErrorOnCondition(
    `when "matrix_runout" contains "mirrored" property it is not allowed to have other properties`,
    "mirrored" in value && entries.length !== 1
  );

  addErrorOnCondition(
    `when "matrix_runout" contains "${MatrixRunoutVinylKeys["Both A sides"]}" property it is not allowed to have other properties`,
    MatrixRunoutVinylKeys["Both A sides"] in value && entries.length !== 1
  );

  if (
    MatrixRunoutVinylKeys["Stereo side"] in value ||
    MatrixRunoutVinylKeys["Mono side"] in value
  )
    addErrorOnCondition(
      `when "matrix_runout" contains "Stereo side" or "Mono side" property, it must contain both and only them`,
      !(MatrixRunoutVinylKeys["Stereo side"] in value) ||
        !(MatrixRunoutVinylKeys["Mono side"] in value) ||
        entries.length !== 2
    );

  if (arrayIsNonEmpty(errors)) {
    return { errors };
  }

  return { value: { matrixRunout: value as MatrixRunout } };
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

const sideLetterCode = (str: string): number =>
  str === "AA" ? 0 : str.charCodeAt(0) - "A".charCodeAt(0) + 1;
