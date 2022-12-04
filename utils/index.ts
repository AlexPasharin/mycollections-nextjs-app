import { readJson } from "fs-extra";
import { join } from "path";

export const getJSONData = <T = unknown>(path: string): Promise<T> =>
  readJson(join("data", `${path}.json`));
