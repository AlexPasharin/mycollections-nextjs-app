import { getEntries } from "../index";
import validateEntries from "../../utils/validation/entries";
import type { ValidatedDBEntry } from "../../types/validation";
import { DBEntry2 } from "../../types/entries";

export default async function validateDBEntries(
  entries: DBEntry2[]
): Promise<ValidatedDBEntry[] | null> {
  const validatedEntries = validateEntries(entries);

  if ("errors" in validatedEntries) {
    console.error(`Encountered following errors validating entries:\n`);
    validatedEntries.errors.forEach((e) => console.error(e));

    return null;
  }

  console.log(`Entries validated successfully`);

  return validatedEntries;
}
