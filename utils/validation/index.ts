import { flattenResults } from "../../utils";
import { ID, Result } from "../../types/utils";

export const validateObjectsWithID = <T extends { id: ID }, U extends object>(
  objects: T[],
  validatationFunc: (obj: T, objectsIDSet: Set<ID>) => Result<U>
): Result<U[]> =>
  flattenResults(
    objects.map((artist) =>
      validatationFunc(artist, new Set(objects.map((a) => a.id)))
    )
  );
