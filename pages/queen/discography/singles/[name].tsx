import Link from "next/link";
import type { NextPage } from "next";

import getQueenSingleData from "lib/discography/getQueenSingleData";
import queenSinglesList from "data/discography/queen/singles";

import type { SingleEntryData } from "types/discography";

interface Props {
  single: SingleEntryData;
}

const QueenSinglesPage: NextPage<Props> = ({ single }) => {
  const { title, discogs_url, textContent, trackLists, tracks } = single;

  return (
    <div>
      <div style={{ marginTop: "20px" }}>
        <Link href="/queen/discography/singles">Back to Queen singles</Link>
      </div>
      <h1>{title}</h1>
      <a href={discogs_url} target="_blank">
        {discogs_url}
      </a>
      {trackLists.map((tl, i) => (
        <TrackList key={i} {...tl} />
      ))}
      <hr />
      {stringToParagraphs(textContent).map((paragraphContent, i) => (
        <p key={i}>{paragraphContent}</p>
      ))}
      <div>
        <h2>Tracks: </h2>
        <ul>
          {tracks.map(({ name, releases }) => (
            <li key={name}>
              <b>{name}</b>
              {releases && <span> - {releases}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QueenSinglesPage;

export async function getStaticPaths() {
  return {
    paths: queenSinglesList.map((name) => ({ params: { name } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const single = await getQueenSingleData(params.name.toLowerCase());

  return {
    props: {
      single,
    },
  };
}

// export async function getServerSideProps({
//   params,
// }: {
//   params: { name: string };
// }) {
//   const single = await getQueenSingleData(params.name.toLowerCase());

//   if (!single) {
//     return { notFound: true };
//   }

//   return {
//     props: {
//       single,
//     },
//   };
// }

const TrackList = ({
  tracks,
  releases,
}: SingleEntryData["trackLists"][number]) => (
  <div>
    <ul style={{ marginBottom: "5px" }}>
      {tracks.map((t, idx) => (
        <li key={idx} style={{ fontSize: "1.1em" }}>
          {t}
        </li>
      ))}
    </ul>
    <ul style={{ marginLeft: "60px", marginTop: "5px" }}>
      {releases.map((r) => (
        <li key={r} style={{ marginBottom: "2px" }}>
          {r}
        </li>
      ))}
    </ul>
  </div>
);

const stringToParagraphs = (str: string): string[] =>
  str
    .split("\n")
    .map((p) => p.trim())
    .filter((p) => !!p);
