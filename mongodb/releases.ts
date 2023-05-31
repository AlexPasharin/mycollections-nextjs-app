import { Collection } from "mongodb";

import { queryMongoDB } from "./client";

import { DBArtist2 } from "../types/artists";
import { DBEntry2, DBRelease2 } from "../types/entries";
import { complement, isNil, pickBy } from "ramda";
import { NullableToOptional } from "../types/utils";

import { ValidatedDBArtist } from "../scripts/mongo/update_releases/validation/artists";
import { ValidatedDBEntry } from "../scripts/mongo/update_releases/validation/entries";
import { ValidatedDBRelease } from "../scripts/mongo/update_releases/validation/releases";

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

export type EnhancedEntry = ValidatedDBEntry & {
  releases?: Omit<ValidatedDBRelease, "entry_id">[];
};

export type MongoEntry = Omit<EnhancedEntry, "artist_id" | "type">;

export type MongoArtist = Omit<ValidatedDBArtist, "id"> & {
  _id: string;
  entries?: { [index: string]: MongoEntry[] };
};

export const insertReleases = (releases: MongoArtist[]) =>
  queryReleasesCollection((releasesCollection) =>
    releasesCollection.insertMany(releases)
  );

export interface Artist {
  _id: number;
  name: string;
  name_for_sorting?: string;
}

export const getArtists = () =>
  queryReleasesCollection((collection) =>
    collection
      .find<Artist>(
        {},
        { projection: { _id: 1, name: 1, name_for_sorting: 1 } }
      )
      .toArray()
  );

export const getAllReleases = () =>
  queryReleasesCollection((collection) => collection.find({}).toArray());

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

export const upsertReleases = (artists: MongoArtist[]) =>
  queryReleasesCollection(async (releasesCollection) => {
    if (!artists.length) {
      console.log("No artists to upsert");

      return;
    }

    await Promise.all(
      artists.map(async (artist) => {
        try {
          const { _id, ...rest } = artist;

          const { acknowledged, upsertedId } =
            await releasesCollection.replaceOne({ _id }, rest, {
              upsert: true,
            });

          if (upsertedId) {
            console.log(
              `Succesfully inserted a new artist with id ${upsertedId}`
            );
          } else if (acknowledged) {
            console.log(`Succesfully updated artists with id ${_id}`);
          } else {
            throw `Upserting artist with id ${_id} was not acknowledged :(`;
          }
        } catch (e) {
          console.error(e);

          throw e;
        }
      })
    );
  });

export const deleteArtists = (artists: { _id: string }[]) =>
  queryReleasesCollection(async (releasesCollection) => {
    if (!artists.length) {
      console.log("No artists to delete");

      return;
    }

    const idsToDelete = artists.map((a) => a._id);
    console.log({ idsToDelete });
    console.log(`Attempting to delete ${idsToDelete.length} documents...`);

    const { deletedCount } = await releasesCollection.deleteMany({
      _id: { $in: artists.map((a) => a._id) },
    });

    console.log(
      `Succesfully deleted ${deletedCount} documents from "music_collection.artists" collection`
    );
  });

const queryReleasesCollection = async <T>(
  queryFunc: (releasesCollection: Collection<MongoArtist>) => Promise<T>
) =>
  queryMongoDB((client) => {
    const releasesCollection = client
      .db("music_collection")
      .collection<MongoArtist>("releases");

    return queryFunc(releasesCollection);
  });
