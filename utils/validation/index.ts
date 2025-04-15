import { flattenResults } from "../../utils";
import { ID, Result } from "../../types/utils";

export const validateObjectsWithID = <T extends { id: ID }, U extends object>(
  objects: T[],
  validationFunc: (obj: T, objectsIDSet: Set<ID>) => Result<U>
): Result<U[]> => {
  const objectIDSet = new Set(objects.map((a) => a.id));

  return flattenResults(
    objects.map((artist) => validationFunc(artist, objectIDSet))
  );
};
