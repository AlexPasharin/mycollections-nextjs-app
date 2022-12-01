import Link from "next/link";
import { useRouter } from "next/router";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import queenSinglesList from "data/queen/discography/singles";

interface Props {
  entries: typeof queenSinglesList;
}

const DiscographyEntryPage: NextPage<Props> = ({ entries }) => {
  const router = useRouter();
  const { artist, entryType } = router.query;

  return (
    <>
      <h2>
        {artist} {entryType}
      </h2>
      <ul>
        {entries.map(({ year, singles }) => (
          <li key={year}>
            <h3>{year}</h3>
            <ul>
              {singles.map((s) => (
                <li key={s}>
                  <Link href={`/${artist}/discography/${entryType}/${s}`}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default DiscographyEntryPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { entryType: "singles", artist: "Queen" } }],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  entries: typeof queenSinglesList;
  pageTitle: string;
}> = async (context) => {
  try {
    const { artist, entryType } = context.params!;
    const entries = (
      await import(
        `data/${(artist as string).toLowerCase()}/discography/${entryType}`
      )
    ).default;

    return {
      props: {
        entries,
        pageTitle: `${artist} ${entryType}`,
      },
    };
  } catch (e) {
    console.log({ e });
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
};
