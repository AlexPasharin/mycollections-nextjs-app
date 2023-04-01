import getArtists, { Artist } from "mongodb/artists";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function QueenCollection({ artists }: Props) {
  return (
    <main>
      <h1>Queen Collection</h1>
      <h2>Artists</h2>
      <ul>
        {artists.map(({ _id, name }) => (
          <li key={_id}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps<{
  artists: Artist[];
}> = async () => {
  return {
    props: {
      artists: await getArtists(),
      pageTitle: "My Queen Collection",
    },
  };
};
