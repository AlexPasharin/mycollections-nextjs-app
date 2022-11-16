import Link from "next/link";

import type { NextPage } from "next";

import queenSinglesList from "data/discography/queen/singles";

interface Props {
  singles: string[];
}

const QueenSinglesPage: NextPage<Props> = ({ singles }) => (
  <>
    <h2>Queen singles:</h2>
    <ul>
      {singles.map((s) => (
        <Link href={`/queen/discography/singles/${s}`} key={s}>
          {s}
        </Link>
      ))}
    </ul>
  </>
);

export default QueenSinglesPage;

export async function getStaticProps() {
  return {
    props: {
      singles: queenSinglesList,
    },
  };
}
