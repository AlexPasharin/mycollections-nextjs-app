import Image from "next/image";
import Link from "next/link";

import type { NextPage, GetStaticProps, GetStaticPaths } from "next";

import styles from "styles/queen-discography.module.sass";
import { useRouter } from "next/router";

const QueenDiscographyPage: NextPage = () => {
  const router = useRouter();
  const { artist } = router.query;

  return (
    <>
      <h1>{artist} Discography</h1>
      <div className={styles["image-wrapper"]}>
        <Image
          src="/images/queen.jpeg"
          alt="Queen band"
          width="800"
          height="450"
        />
      </div>
      <Link href={`/${artist}/discography/singles`}>{artist} singles</Link>
    </>
  );
};

export default QueenDiscographyPage;

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
