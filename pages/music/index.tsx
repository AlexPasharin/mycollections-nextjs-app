import { readFile } from "fs";
import { ChangeEventHandler, useState } from "react";

import type {
  NonQueenRelease,
  NonQueenReleasesByArtist,
} from "types/non_queen";

import styles from "styles/non_queen_collection.module.sass";

type NonQueenReleasesUnpacked = (NonQueenRelease & { artist_name: string })[];

interface Props {
  releases: NonQueenReleasesUnpacked;
}

export default function MusicPage({ releases }: Props) {
  const [searchKey, setSearchKey] = useState("");

  const filteredReleases = searchKey
    ? releases.filter(
        (e) =>
          e.artist_name.toLowerCase().includes(searchKey) ||
          e.name.toLowerCase().includes(searchKey)
      )
    : releases;

  const onSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchKey(e.target.value.toLowerCase());
  };

  return (
    <div className={styles["non-queen-collection"]}>
      <h1>Music Collection (non Queen related)</h1>
      <div className={styles["non-queen-filter"]}>
        <span className={styles["non-queen-filter-text"]}>Filter:</span>
        <input value={searchKey} onChange={onSearch} />
      </div>
      <ul className={styles["non-queen-releases"]}>
        {filteredReleases.map((e) => (
          <li key={e.id}>
            <h2>
              {e.artist_name} - {e.name}
            </h2>
            <div>Format: {e.format}</div>
            <a href={e.discogs_url}>{e.discogs_url}</a>
            {e.comment && (
              <div>
                <i>{e.comment}</i>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: "My Music Collection",
      releases: await getNonQueenReleasesFromJSON(),
    },
  };
}

const getJSONData = (path: string) =>
  new Promise((resolve, reject) => {
    readFile(`./data/${path}.json`, { encoding: "utf8" }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });

const getNonQueenReleasesFromJSON =
  async (): Promise<NonQueenReleasesUnpacked> => {
    const data = (await getJSONData(
      "non_queen/collection"
    )) as NonQueenReleasesByArtist[];

    return data
      .map(({ artist, releases }) =>
        releases.map((r) => ({ ...r, artist_name: artist }))
      )
      .flat();
  };
