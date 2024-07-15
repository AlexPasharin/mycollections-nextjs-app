import { DBEntry2, DBRelease2 } from "./entries";
import { DBArtist } from "./artists";
import {
  NullableToOptional,
  NonEmptyStringArray,
  NonEmptyArray,
} from "./utils";

export type StringOrStringArray = string | NonEmptyStringArray;
export type CountriesObjectType =
  | {
      "made in": StringOrStringArray;
      "printed in": StringOrStringArray;
    }
  | {
      CD: {
        "made in": StringOrStringArray;
        "printed in": StringOrStringArray;
      };
      slipcase: {
        "printed in": StringOrStringArray;
      };
    };

export type ValidatedCountriesType = StringOrStringArray | CountriesObjectType;

export type ValidatedDBArtist = NullableToOptional<
  Omit<DBArtist, "parent_artists" | "other_names">
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

type LabelsType = { label: string } | { labels: NonEmptyStringArray };
export type CatNumbersObjType =
  | NonEmptyStringArray
  | {
      "in UK": string | NonEmptyStringArray;
      "in Europe": string | NonEmptyStringArray;
    };

type CatNumbersType =
  | { cat_number: string }
  | {
      cat_numbers:
        | CatNumbersObjType
        | {
            CD: string | CatNumbersObjType;
            slipcase: string | CatNumbersObjType;
          };
    };

export type ValidCatNumbersObject =
  | (LabelsType & CatNumbersType)
  | LabelsType
  | CatNumbersType;

export type ValidatedCatNumbers =
  | ValidCatNumbersObject
  | NonEmptyArray<ValidCatNumbersObject>;

export enum MatrixRunoutVinylKeys {
  "Side A" = "Side A",
  "Side B" = "Side B",
  "Side C" = "Side C",
  "Side D" = "Side D",
  "Side E" = "Side E",
  "Side F" = "Side F",
  "Side G" = "Side G",
  "Side H" = "Side H",
  "Side I" = "Side I",
  "Side AA" = "Side AA",
  "Side X" = "Side X",
  "Side Y" = "Side Y",
  "Mono side" = "Mono side",
  "Stereo side" = "Stereo side",
  "Both A sides" = "Both A sides",
}

export enum MatrixRunoutDigitalKeys {
  CD = "CD",
  CD1 = "CD1",
  CD2 = "CD2",
  CD3 = "CD3",
  CD4 = "CD4",
  CD5 = "CD5",
  CD6 = "CD6",
  CD7 = "CD7",
  CD8 = "CD8",
  CD9 = "CD9",
  CD10 = "CD10",
  DVD = "DVD",
  DVD1 = "DVD1",
  DVD2 = "DVD2",
  DVD3 = "DVD3",
  DVD4 = "DVD4",
  BD = "BD",
  BD1 = "BD1",
  BD2 = "BD2",
  "3''CD" = "3''CD",
  "4HD_BD" = "4HD_BD",
  "mirrored" = "mirrored",
}

type MatrixRunoutVinylKeyValue =
  | string
  | { etched: string; stamped?: string; comment?: string };

export type MatrixRunout =
  | string
  | {
      [key in MatrixRunoutVinylKeys]?: MatrixRunoutVinylKeyValue;
    }
  | ({
      [key in MatrixRunoutDigitalKeys]?:
        | string
        | { mirrored: string; normal?: string };
    } & { LP?: MatrixRunoutVinylKeyValue });

export type Speed = 33 | { "Side B": 33 } | { "Disk 2": 33 };

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
  speed?: Speed;
};
