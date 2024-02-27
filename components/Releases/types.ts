import type { MongoEntry } from "types/mongo/releases";

export type Release = NonNullable<MongoEntry["releases"]>[number];

export type TableRowInfo = {
  label: string;
  value?: string | null;
};
