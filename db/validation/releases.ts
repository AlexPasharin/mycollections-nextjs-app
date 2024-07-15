import { getCountries, getEntries, getLabels, getReleases } from "../index";
import type {
  ValidatedDBEntry,
  ValidatedDBRelease,
} from "../../types/validation";
import validateReleases from "../../utils/validation/releases";
import { DBEntry2 } from "../../types/entries";

export default async function validateDBReleases(
  entries: DBEntry2[]
): Promise<ValidatedDBRelease[] | null> {
  let [releases, countries, labels] = await Promise.all([
    getReleases(),
    getCountries(),
    getLabels(),
  ]);

  const validatedReleases = validateReleases(
    releases,
    entries,
    countries,
    labels.map((l) => l.name)
  );

  if ("errors" in validatedReleases) {
    console.error(`Encountered following errors validating releases:\n`);
    validatedReleases.errors.forEach((e) => console.error(e));

    return null;
  }

  console.log(`Releases validated successfully`);

  return validatedReleases;
}
