import ReleaseInfo from "./ReleaseInfo";
import type { ArtistEntryRelease } from "db/prisma";

const Releases = ({
  releases,
  debugReleases,
}: {
  releases: ArtistEntryRelease[];
  debugReleases: boolean;
}) => (
  <div style={{ marginBottom: "16px" }}>
    {releases.length > 0 ? (
      <ol>
        {releases.map((release) => (
          <ReleaseInfo
            release={release}
            key={release.release_id}
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
