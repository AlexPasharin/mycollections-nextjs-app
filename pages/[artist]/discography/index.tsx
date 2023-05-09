import Image from "next/image";
import Link from "next/link";

import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import styles from "styles/discography.module.sass";
import { useRouter } from "next/router";
import BackButton from "components/BackButton";

const ArtistDiscographyPage: NextPage = () => {
  const router = useRouter();
  const artist = router.query.artist as string;

  return (
    <>
      <BackButton text="Back to main page"/>
      <h1>{artist} Discography</h1>
      <div className={styles["image-wrapper"]}>
        <Image
          src={`/images/${artist.toLowerCase()}.jpeg`}
          alt={artist}
          width="800"
          height="450"
        />
      </div>
      <Link href={`/${artist}/discography/singles`}>{artist} singles</Link>
    </>
  );
};

export default ArtistDiscographyPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { artist: "Queen" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { artist } = context.params!;

  return {
    props: {
      pageTitle: `${artist} Discography`,
    },
  };
};
