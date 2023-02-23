import Link from "next/link";
import { useRouter } from "next/router";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Entries = {
  year: string;
  entries: { title: string; id: string }[];
}[];

interface Props {
  entries: Entries;
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
        {entries.map(({ year, entries }) => (
          <li key={year}>
            <h3>{year}</h3>
            <ul>
              {entries.map(({ id, title }) => (
                <li key={id}>
                  <Link href={`/${artist}/discography/${entryType}/${id}`}>
                    {title}
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
  entries: Entries;
  pageTitle: string;
}> = async (context) => {
  try {
    const { artist, entryType } = context.params!;
    const path = `${(artist as string).toLowerCase()}/discography/${entryType}`;

    const entries: { year: string; entries: string[] }[] = (
      await import(`data/${path}`)
    ).default;

    const resolvedEntries = await Promise.all(
      entries.map(async ({ year, entries }) => {
        const entriesData = await Promise.all(
          entries.map(async (s: string) => {
            const id = s.toLowerCase();

            const { title, artist } = (await import(`data/${path}/${id}`))
              .default;

            return { title: `${artist ? artist + " - " : ""}${title}`, id };
          })
        );

        return {
          year,
          entries: entriesData,
        };
      })
    );

    return {
      props: {
        entries: resolvedEntries,
        pageTitle: `${artist} ${entryType}`,
      },
    };
  } catch (e) {
    console.error(e);

    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
};
