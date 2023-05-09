import { Collection } from "mongodb";

import { queryMongoDB } from "./client";

export const insertReleases = (releases: {}[]) =>
  queryReleasesCollection((releasesCollection) =>
    releasesCollection.insertMany(releases)
  );

const queryReleasesCollection = async <T>(
  queryFunc: (releasesCollection: Collection<{}>) => Promise<T>
) =>
  queryMongoDB((client) => {
    const releasesCollection = client
      .db("music_collection")
      .collection("releases");

    return queryFunc(releasesCollection);
  });
