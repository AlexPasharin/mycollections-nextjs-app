import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { readdir } from "fs/promises";
import path from "path";

import getExtendedDiscographyEntryData from "lib/discography/getExtendedDiscographyEntryData";

import type { ExtendedDiscographyEntryData } from "types/discography";
import BackButton from "components/BackButton";

type Props = Omit<InferGetStaticPropsType<typeof getStaticProps>, "pageTitle">;

const DiscographyEntryPage: NextPage<Props> = ({ entry }) => {
  const router = useRouter();
  const { entryType, artist } = router.query;

  const { title, discogs_url, textContent, trackLists, tracks } = entry;

  const hasForeightArtistTracks = trackLists.some((list) =>
    list.tracks.some((t) => t.isForeignAristTrack)
  );

  return (
    <div>
      <BackButton text={`Back to ${artist} ${entryType}`}/>
      <h1>{title}</h1>
      <a href={discogs_url} target="_blank">
        {discogs_url}
      </a>
      {trackLists.map((tl, i) => (
        <TrackList key={i} {...tl} />
      ))}
      {hasForeightArtistTracks && <p>* No {artist} involment</p>}
      <hr />
      <section dangerouslySetInnerHTML={{ __html: textContent }} />
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

export const getStaticPaths: GetStaticPaths = async () => {
  const queenSingles = (
    await readdir(path.join("data", "queen", "discography", "singles"))
  )
    .filter((name) => path.extname(name) === ".ts")
    .map((name) => name.split(".")[0])
    .filter((name) => name !== "index");

  return {
    paths: queenSingles.map((s) => ({
      params: {
        entryName: s,
        entryType: "singles",
        artist: "Queen",
      },
    })),
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

  // TODO temporary workaround, coz does not work on windows
  /*   if (!entry) {
    return {
      redirect: {
        permanent: false,
        destination: "/404",
      },
    };
  }
 */
  return {
    props: {
      entry: entry!, // related to the workaround above
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
