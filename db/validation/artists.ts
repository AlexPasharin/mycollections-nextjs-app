import { getArtists } from "../index";
import validateArtists from "../../utils/validation/artists";
import type { ValidatedDBArtist } from "../../types/validation";

export default async function validateDBArtists(): Promise<
  ValidatedDBArtist[] | null
> {
  const artists = await getArtists();
  const validatedArtists = validateArtists(artists);

  if ("errors" in validatedArtists) {
    console.error("Encountered following errors validating artists:\n");
    validatedArtists.errors.forEach((e) => console.error(e));

    return null;
  }

  console.info("Artists validated successfully");

  return validatedArtists.value;
}
