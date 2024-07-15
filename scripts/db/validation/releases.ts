import { getEntries } from "../../../db";
import validateDBReleases from "../../../db/validation/releases";

getEntries().then(validateDBReleases);
