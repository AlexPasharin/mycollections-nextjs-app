import type { Composition } from "types/discography";

const data: Composition = {
  name: "Tie Your Mother Down",
  artist: "Queen",
  versions: [
    {
      id: "tymd",
    },
    { id: "tymd-stand-along", versionName: "stand-along" },
    {
      id: "tymd-stand-along-mono",
      versionName: "stand-along mono",
      parentVersion: "stand-along",
    },
  ],
};

export default data;
