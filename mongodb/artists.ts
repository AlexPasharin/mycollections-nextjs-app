import { queryMongoDB } from "./client";

export interface Artist {
  _id: number;
  name: string;
}

export const getArtists = () =>
  queryMongoDB<Artist[]>((client) => {
    const db = client.db("music_collection");
    const collection = db.collection<Artist>("artists");

    return collection.find().toArray();
  });

export const insertArtists = (artists: { id: number; name: string }[]) =>
  queryMongoDB((client) => {
    const db = client.db("music_collection");
    const collection = db.collection<Artist>("artists");

    return collection.insertMany(
      artists.map(({ id, name }) => ({
        _id: id,
        name,
      }))
    );
  });
