import { Collection } from "mongodb";

import { queryMongoDB } from "./client";

import { MongoArtist } from "../types/mongo/releases";
import { Artist } from "../types/mongo/artists";
import { equals } from "ramda";

export const insertReleases = (releases: MongoArtist[]) =>
  queryReleasesCollection((releasesCollection) =>
    releasesCollection.insertMany(releases)
  );

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

export const upsertReleases = async (
  newArtistsData: MongoArtist[],
  oldArtistsData: MongoArtist[]
) => {
  if (!newArtistsData.length) {
    console.log("No artists to upsert");

    return;
  }

  const oldDataMap = oldArtistsData.reduce<
    Record<string, MongoArtist | undefined>
  >((acc, artist) => ({ ...acc, [artist._id]: artist }), {});

  await queryReleasesCollection(async (releasesCollection) => {
    await Promise.all(
      newArtistsData.map(async (artist) => {
        try {
          const oldArtistData = oldDataMap[artist._id];

          if (equals(oldArtistData, artist)) {
            return; // dont do anything if artist already in Mongo and its data didn't change
          }

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
};

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
