import Link from "next/link";
import { useRouter } from "next/router";

import type { GetStaticProps, NextPage } from "next";

import queenSinglesList from "data/discography/queen/singles";

interface Props {
  singles: typeof queenSinglesList;
}

const QueenSinglesPage: NextPage<Props> = ({ singles }) => {
  const router = useRouter();

  return (
    <>
      <h2>Queen singles:</h2>
      <ul>
        {singles.map(({ year, singles }) => (
          <li key={year}>
            <h3>{year}</h3>
            <ul>
              {singles.map((s) => (
                <li key={s}>
                  <Link href={`${router.pathname}/${s}`}>{s}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default QueenSinglesPage;

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      singles: queenSinglesList,
      pageTitle: "Queen singles",
    },
  };
};
