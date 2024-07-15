import { getEntries } from "../../../db";
import validateDBEntries from "../../../db/validation/entries";

getEntries().then(validateDBEntries);
