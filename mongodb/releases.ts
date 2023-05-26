import { Collection } from "mongodb";

import { queryMongoDB } from "./client";

import { DBArtist2 } from "../types/artists";
import { DBEntry2, DBRelease2 } from "../types/entries";
import { complement, isNil, pickBy } from "ramda";
import { NullableToOptional } from "../types/utils";

export const removeNulls = <T>(obj: T): NullableToOptional<T> =>
  pickBy(complement(isNil), obj);

export type Entry = NullableToOptional<
  Omit<DBEntry2, "artist_id" | "type" | "entry_artist_id"> & {
    entryArtist?: string;
    releases?: NullableToOptional<DBRelease2>[];
  }
>;

export type EnhancedArtist = DBArtist2 & {
  entries: Record<string, Entry[]>;
};

export type MongoArtist = Omit<EnhancedArtist, "id"> & {
  _id: EnhancedArtist["id"];
};

export const insertReleases = (releases: MongoArtist[]) =>
  queryReleasesCollection((releasesCollection) =>
    releasesCollection.insertMany(releases)
  );

export const getArtists = () =>
  queryReleasesCollection(async (collection) =>
    collection
      .find<{ _id: number; name: string }>({}, { projection: { entries: 0 } })
      .toArray()
  );

export const getArtistReleases = (artistName: string) =>
  queryReleasesCollection((collection) =>
    // case insenstive search by artist name
    collection.findOne({
      name: {
        $regex: new RegExp(
          `^${artistName.replaceAll("+", "\\+").replaceAll("*", "\\*")}$`
        ),
        $options: "i",
      },
    })
  );

const queryReleasesCollection = async <T>(
  queryFunc: (releasesCollection: Collection<MongoArtist>) => Promise<T>
) =>
  queryMongoDB((client) => {
    const releasesCollection = client
      .db("music_collection")
      .collection<MongoArtist>("releases");

    return queryFunc(releasesCollection);
  });
