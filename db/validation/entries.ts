import validateEntries from "../../utils/validation/entries";
import type { Entry } from "../../types/validation";
import { getArtists, getEntries } from "../../db";

export default async function validateDBEntries(): Promise<Entry[] | null> {
  const [artists, entries] = await Promise.all([
    getArtists(true),
    getEntries(true),
  ]);
  const validatedEntries = validateEntries(artists, entries);

  if ("errors" in validatedEntries) {
    console.error(`Encountered following errors validating entries:\n`);
    validatedEntries.errors.forEach((e) => console.error(e));

    return null;
  }

  console.log(`Entries validated successfully`);

  return validatedEntries;
}
