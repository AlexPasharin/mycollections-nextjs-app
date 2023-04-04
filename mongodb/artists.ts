import { Collection } from "mongodb";

import { queryMongoDB } from "./client";
import { DBArtist } from "../types/artists";
import { DBEntry, DBRelease } from "../types/entries";
import { complement, isNil, pickBy } from "ramda";

type NullableKeys<T> = {
  [K in keyof T]: null extends T[K] ? K : never;
}[keyof T];

type NullableToOptional<T> = {
  [K in keyof T as Exclude<K, NullableKeys<T>>]: T[K];
} & {
  [K in NullableKeys<T>]?: T[K];
};

export const removeNulls = <T>(obj: T): NullableToOptional<T> =>
  pickBy(complement(isNil), obj);

export type Entry = NullableToOptional<
  Omit<DBEntry, "artist_id" | "type" | "entry_artist_id"> & {
    entryArtist?: string;
    releases?: NullableToOptional<DBRelease>[];
  }
>;

export type EnhancedArtist = DBArtist & {
  entries: Record<string, Entry[]>;
};

export type Artist = Omit<EnhancedArtist, "id"> & {
  _id: EnhancedArtist["id"];
};

export const getArtists = () =>
  queryArtistsCollection((artistsCollection) =>
    artistsCollection
      // dont include "entries" in all artists response
      .find<{ _id: number; name: string }>({}, { projection: { entries: 0 } })
      .toArray()
  );

export const getArtistByName = (name: string) =>
  queryArtistsCollection((artistsCollection) =>
    // case insenstive search by artist name
    artistsCollection.findOne({
      name: {
        $regex: new RegExp(
          `^${name.replaceAll("+", "\\+").replaceAll("*", "\\*")}$`
        ),
        $options: "i",
      },
    })
  );

export const upsertArtists = (artists: EnhancedArtist[]) =>
  queryArtistsCollection(async (artistsCollection) => {
    if (!artists.length) {
      console.log("No artists to upsert");

      return;
    }

    await Promise.all(
      artists.map(async (artist) => {
        const { id, ...rest } = artist;

        const { acknowledged, upsertedId } = await artistsCollection.replaceOne(
          { _id: id },
          rest,
          {
            upsert: true,
          }
        );

        if (upsertedId) {
          console.log(
            `Succesfully inserted a new artist with id ${upsertedId}`
          );
        } else if (acknowledged) {
          console.log(`Succesfully updated artists with id ${id}`);
        } else {
          console.log(`Upserting artist with id ${id} was not acknowledged :(`);
        }
      })
    );
  });

export const deleteArtists = (artists: { _id: number }[]) =>
  queryArtistsCollection(async (artistsCollection) => {
    if (!artists.length) {
      console.log("No artists to delete");

      return;
    }

    const idsToDelete = artists.map((a) => a._id);
    console.log({ idsToDelete });
    console.log(`Attempting to delete ${idsToDelete.length} documents...`);

    const { deletedCount } = await artistsCollection.deleteMany({
      _id: { $in: artists.map((a) => a._id) },
    });

    console.log(
      `Succesfully deleted ${deletedCount} documents from "music_collection.artists" collection`
    );
  });

const queryArtistsCollection = async <T>(
  queryFunc: (artistsCollection: Collection<Artist>) => Promise<T>
) =>
  queryMongoDB((client) => {
    const artistsCollection = client
      .db("music_collection")
      .collection<Artist>("artists");

    return queryFunc(artistsCollection);
  });
