import { useState } from "react";

import CollectionBadge from "components/MusicalCollection/CollectionBadge";
import Releases from "components/MusicalCollection/Releases";

import type { ArtistEntry } from "db/prisma";

const Entry = ({
  entry,
  debugReleases,
  hideQueenCollectionBadge = false,
}: {
  entry: ArtistEntry;
  debugReleases: boolean;
  hideQueenCollectionBadge?: boolean;
}) => {
  const [showReleases, setShowReleases] = useState(debugReleases);

  const {
    main_name,
    original_release_date,
    musical_releases,
    alternative_musical_entry_names,
    musical_entries_tags,
    relation_to_queen,
    comment,
    part_of_queen_collection,
  } = entry;

  const tags = musical_entries_tags.map(({ tags }) => tags.tag);
  const showQueenCollectionBadge =
    part_of_queen_collection && !hideQueenCollectionBadge;

  return (
    <li style={{ borderBottom: "solid 1px lightgrey" }}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowReleases(!showReleases)}
      >
        <h4 style={{ opacity: 0.8 }}>
          {main_name}
          {showQueenCollectionBadge && (
            <CollectionBadge label="part of queen collection" />
          )}
        </h4>
        {alternative_musical_entry_names.length > 0 && (
          <p style={{ fontStyle: "italic", marginTop: "-12px" }}>
            also known as{" "}
            {alternative_musical_entry_names.map((alt) => alt.name).join(", ")}
          </p>
        )}
        {tags.length > 0 && (
          <p style={{ marginTop: "-12px" }}>Tags: {tags.join(", ")}</p>
        )}
        {relation_to_queen && (
          <p style={{ marginTop: "-12px" }}>
            Relation to Queen: {relation_to_queen}
          </p>
        )}
        {comment && (
          <p style={{ marginTop: "-12px" }}>Comment: {comment}</p>
        )}
        <p style={{ fontStyle: "italic", marginTop: "-12px" }}>
          Original release date: {original_release_date ?? "Unknown"}
        </p>
      </div>
      {showReleases && (
        <Releases releases={musical_releases} debugReleases={debugReleases} />
      )}
    </li>
  );
};

export default Entry;
