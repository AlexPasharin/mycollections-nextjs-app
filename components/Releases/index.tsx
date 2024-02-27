import ReleaseInfo from "./ReleaseInfo";
import { Release } from "./types";

const Releases = ({
  releases,
  debugReleases,
}: {
  releases: Release[] | undefined;
  debugReleases: boolean;
}) => (
  <div style={{ marginBottom: "16px" }}>
    {releases ? (
      <ol>
        {releases.map((release) => (
          <ReleaseInfo
            release={release}
            key={release.id}
            debugReleases={debugReleases}
          />
        ))}
      </ol>
    ) : (
      <span style={{ fontWeight: "bold" }}>
        No releases for this entry in collection
      </span>
    )}
  </div>
);

export default Releases;
