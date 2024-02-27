import { useState } from "react";

import Releases from "components/Releases";

import type { MongoEntry } from "types/mongo/releases";

const Entry = ({
  entry,
  debugReleases,
}: {
  entry: MongoEntry;
  debugReleases: boolean;
}) => {
  const [showReleases, setShowReleases] = useState(debugReleases);

  const { name, releases, release_date } = entry;

  return (
    <li style={{ borderBottom: "solid 1px lightgrey" }}>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setShowReleases(!showReleases)}
      >
        <h4 style={{ opacity: 0.8 }}>{name}</h4>
        {release_date && (
          <p style={{ fontStyle: "italic", marginTop: "-12px" }}>
            Original release date: {release_date}
          </p>
        )}
      </div>
      {showReleases && (
        <Releases releases={releases} debugReleases={debugReleases} />
      )}
    </li>
  );
};

export default Entry;
