import { DBEntry2, DBRelease2 } from "./entries";
import { DBArtist2 } from "./artists";
import { NullableToOptional, NonEmptyStringArray } from "./utils";

export type StringOrStringArray = string | string[];
export type CountriesObjectType<T> = { "made in": T; "printed in": T };

export type ValidatedCountriesType =
  | StringOrStringArray
  | CountriesObjectType<StringOrStringArray>;

export type ValidatedDBArtist = NullableToOptional<
  Omit<DBArtist2, "parent_artists" | "other_names">
> & {
  parent_artists?: NonEmptyStringArray;
  other_names?: NonEmptyStringArray;
};

export type ValidatedDBEntry = NullableToOptional<
  Omit<DBEntry2, "tags" | "parent_entries">
> & {
  tags?: NonEmptyStringArray;
  parent_entries?: NonEmptyStringArray;
  part_of_queen_collection?: true;
};

type LabelsType = { label: string } | { labels: string[] };
type CatNumbersType =
  | { cat_number: string }
  | { cat_numbers: string[] | { "in UK": string; "in Europe": string } };

type ValidCatNumbersObject =
  | (LabelsType & CatNumbersType)
  | LabelsType
  | CatNumbersType;

export type ValidatedCatNumbers =
  | ValidCatNumbersObject
  | ValidCatNumbersObject[];

export enum MatrixRunoutAllowedKeys {
  CD1 = "CD1",
  CD2 = "CD2",
  "Side A" = "Side A",
  "Side B" = "Side B",
}

export type MatrixRunout =
  | string
  | { [key in MatrixRunoutAllowedKeys]?: string };

export type ValidatedDBRelease = NullableToOptional<
  Omit<
    DBRelease2,
    | "countries"
    | "cat_numbers"
    | "matrix_runout"
    | "tags"
    | "parent_releases"
    | "speed"
  >
> & {
  countries?: ValidatedCountriesType;
  cat_numbers?: ValidatedCatNumbers;
  matrix_runout?: MatrixRunout;
  part_of_queen_collection?: true;
  tags?: string[];
  parent_releases?: string[];
  jukebox_hole?: true;
  picture_sleeve?: false;
  speed?: 33;
};
