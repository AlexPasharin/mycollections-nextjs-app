import Link from "next/link";
import { useRouter } from "next/router";

import type { NextPage } from "next";

import queenSinglesList from "data/discography/queen/singles";

interface Props {
  singles: string[];
}

const QueenSinglesPage: NextPage<Props> = ({ singles }) => {
  const router = useRouter();

  return (
    <>
      <h2>Queen singles:</h2>
      <ul>
        {singles.map((s) => (
          <Link href={`${router.pathname}/${s}`} key={s}>
            {s}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default QueenSinglesPage;

export async function getStaticProps() {
  return {
    props: {
      singles: queenSinglesList,
      pageTitle: "Queen singles",
    },
  };
}
