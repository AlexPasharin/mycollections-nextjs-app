import type { NextPage } from "next";

import Link from "next/link";

interface Props {
  singles: string[];
}

const QueenSinglesPage: NextPage<Props> = ({ singles }) => {
  return (
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
};

export default QueenSinglesPage;

export async function getStaticProps() {
  return {
    props: {
      singles: ["Keep Yourself Alive"],
    },
  };
}
