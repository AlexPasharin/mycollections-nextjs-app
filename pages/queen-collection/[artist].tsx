import { Artist, getArtistByName, getArtists } from "mongodb/artists";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

type Props = Omit<InferGetStaticPropsType<typeof getStaticProps>, "pageTitle">;

const QueenCollectionArtist: NextPage<Props> = ({ name, entries }) => {
  console.log({ entries });
  return (
    <main>
      <h1>Queen Collection</h1>
      <h2>Entries by {name}</h2>
    </main>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const artists = await getArtists();

  return {
    paths: artists.map(({ name }) => ({
      params: {
        artist: name.toLowerCase(),
      },
    })),
    fallback: false,
  };
};

export default QueenCollectionArtist;

export const getStaticProps: GetStaticProps<{
  name: string;
  entries: Artist["entries"];
  pageTitle: string;
}> = async (context) => {
  const { artist } = context.params!; // we know that "artist" must be in path parameters

  const { name, entries } = (await getArtistByName(artist as string))!; // and we know that "artist" is a string and corresponds to a real artist in db

  return {
    props: {
      name,
      entries,
      pageTitle: `Queen Collection - Entries by Artist ${name}`,
    },
  };
};
