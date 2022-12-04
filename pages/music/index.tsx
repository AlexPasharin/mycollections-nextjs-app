import { ChangeEventHandler, useState } from "react";

import type { GetStaticProps } from "next";

import { getJSONData } from "utils";

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

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      pageTitle: "My Music Collection",
      releases: await getNonQueenReleasesFromJSON(),
    },
  };
};

const getNonQueenReleasesFromJSON =
  async (): Promise<NonQueenReleasesUnpacked> => {
    const data = await getJSONData<NonQueenReleasesByArtist[]>(
      "non_queen/collection"
    );

    return data
      .map(({ artist, releases }) =>
        releases.map((r) => ({ ...r, artist_name: artist }))
      )
      .flat();
  };
