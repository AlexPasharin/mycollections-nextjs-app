import { useState } from "react";

import Releases from "components/Releases";

import type { musical_entries as MusicalEntry } from "generated/prisma/client";

const Entry = ({
  entry,
  debugReleases,
}: {
  entry: MusicalEntry;
  debugReleases: boolean;
}) => {
  const [showReleases, setShowReleases] = useState(debugReleases);

  const {
    main_name,
    original_release_date,
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
        <Releases releases={[]} debugReleases={debugReleases} />
      )}
    </li>
  );
};

export default Entry;
