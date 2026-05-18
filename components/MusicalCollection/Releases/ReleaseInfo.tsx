import { useState } from "react";

import ReleaseDetails from "./ReleaseDetails";

import type { ArtistEntryRelease } from "db/prisma";

const ReleaseInfo = ({
  release,
  debugReleases,
}: {
  release: ArtistEntryRelease;
  debugReleases: boolean;
}) => {
  const [showDetails, setShowDetails] = useState(debugReleases);

  const { release_version, release_id, ...rest } = release;

  return (
    <li style={{ margin: "8px 0" }} key={release_id}>
      <div
        style={{ cursor: "pointer", marginBottom: "12px" }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {release_version}
      </div>
      {showDetails && <ReleaseDetails release={rest} />}
    </li>
  );
};

export default ReleaseInfo;
