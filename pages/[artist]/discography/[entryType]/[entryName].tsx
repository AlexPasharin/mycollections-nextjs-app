import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import getExtendedDiscographyEntryData from "lib/discography/getExtendedDiscographyEntryData";
import queenSinglesList from "data/queen/discography/singles";

import type { ExtendedDiscographyEntryData } from "types/discography";

type Props = Omit<InferGetStaticPropsType<typeof getStaticProps>, "pageTitle">;

const DiscographyEntryPage: NextPage<Props> = ({ entry }) => {
  const router = useRouter();
  const { entryType, artist } = router.query;

  const { title, discogs_url, textContent, trackLists, tracks } = entry;

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Link href={`/${artist}/discography/${entryType}`}>
          Back to {artist} {entryType}
        </Link>
      </div>
      <h1>{title}</h1>
      <a href={discogs_url} target="_blank">
        {discogs_url}
      </a>
      {trackLists.map((tl, i) => (
        <TrackList key={i} {...tl} />
      ))}
      <hr />
      <section dangerouslySetInnerHTML={{ __html: textContent }} />
      {/* {stringToParagraphs(textContent).map((paragraphContent, i) => (
        <p key={i}>{paragraphContent}</p>
      ))} */}
      <div>
        <h2>Tracks: </h2>
        <ul>
          {tracks.map(({ name, releases, artist }) => (
            <li key={name}>
              <b>
                {artist && (
                  <>
                    <i>{artist}</i> -{" "}
                  </>
                )}
                {name}
              </b>
              {releases && <span> - {releases}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DiscographyEntryPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: queenSinglesList
      .map(({ singles }) =>
        singles.map((entryName) => ({
          params: { entryName, entryType: "singles", artist: "Queen" },
        }))
      )
      .flat(),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  entry: ExtendedDiscographyEntryData;
  pageTitle: string;
}> = async (context) => {
  const { entryName, entryType, artist } = context.params!;

  const entry = await getExtendedDiscographyEntryData({
    entryName: (entryName as string).toLowerCase(),
    entryType: entryType as string,
    artist: artist as string,
  });

  if (!entry) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }

  return {
    props: {
      entry,
      pageTitle: `${entryName} - ${artist} ${entryType}`,
    },
  };
};

const TrackList = ({
  tracks,
  releases,
}: ExtendedDiscographyEntryData["trackLists"][number]) => (
  <div>
    <ul style={{ marginBottom: "5px" }}>
      {tracks.map(({ index, track_html }, idx) => (
        <li key={idx} style={{ fontSize: "1.1em", display: "table-row" }}>
          <span style={{ display: "table-cell", paddingRight: "5px" }}>
            {index}
          </span>
          <span
            style={{ display: "table-cell" }}
            dangerouslySetInnerHTML={{ __html: track_html }}
          />
        </li>
      ))}
    </ul>
    <ul style={{ marginLeft: "60px", marginTop: "5px" }}>
      {releases?.map((r) => (
        <li key={r} style={{ marginBottom: "2px" }}>
          {r}
        </li>
      ))}
    </ul>
  </div>
);
