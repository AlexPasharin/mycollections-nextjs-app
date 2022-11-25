import type { Composition } from "types/discography";

const data: Composition = {
  name: `Crazy Little Thing Called Love`,
  artist: `Queen`,
  versions: [
    {
      id: `cltcl`,
    },
    { id: `cltcl-mono`, versionName: "mono", parentVersion: `cltcl` },
  ],
};

export default data;
