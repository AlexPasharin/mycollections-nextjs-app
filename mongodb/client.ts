import { MongoClient } from "mongodb";

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@my-collections.ylptma2.mongodb.net/?retryWrites=true&w=majority`;

export const queryMongoDB = async <T>(
  queryFunc: (client: MongoClient) => Promise<T>
) => {
  const client = new MongoClient(uri);
  await client.connect();

  const result = await queryFunc(client);

  await client.close();

  return result;
};
