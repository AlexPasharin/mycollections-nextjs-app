import { queryMongoDB } from "./client";

export interface Artist {
  _id: number;
  name: string;
}

export default function getArtists() {
  return queryMongoDB(async (client) => {
    const db = client.db("music_collection");
    const collection = db.collection<Artist>("artists");

    return collection.find().toArray();
  });
}
