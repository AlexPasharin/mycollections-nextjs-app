import { useState } from "react";

import ReleaseDetails from "./ReleaseDetails";

import type { Release } from "./types";

const ReleaseInfo = ({
  release,
  debugReleases,
}: {
  release: Release;
  debugReleases: boolean;
}) => {
  const [showDetails, setShowDetails] = useState(debugReleases);

  const { version, id, ...rest } = release;

  return (
    <li style={{ margin: "8px 0" }} key={id}>
      <div
        style={{ cursor: "pointer", marginBottom: "12px" }}
        onClick={() => setShowDetails(!showDetails)}
      >
        {version}
      </div>
      {showDetails && <ReleaseDetails release={rest} />}
    </li>
  );
};

export default ReleaseInfo;
