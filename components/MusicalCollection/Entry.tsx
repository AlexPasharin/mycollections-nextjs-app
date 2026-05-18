import { useState } from "react";

import Releases from "components/MusicalCollection/Releases";

import type { ArtistEntry } from "db/prisma";

const Entry = ({
  entry,
  debugReleases,
}: {
  entry: ArtistEntry;
  debugReleases: boolean;
}) => {
  const [showReleases, setShowReleases] = useState(debugReleases);

  const {
    main_name,
    original_release_date,
    musical_releases,
  } = entry;

  return (
    <li style={{ borderBottom: "solid 1px lightgrey" }}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowReleases(!showReleases)}
      >
        <h4 style={{ opacity: 0.8 }}>{main_name}</h4>
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
