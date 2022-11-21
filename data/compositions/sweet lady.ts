import type { Composition } from "types/discography";

const data: Composition = {
  name: "Sweet Lady",
  artist: "Queen",
  versions: [
    {
      id: "sl",
    },
    {
      id: "sl-stand-along",
      versionName: "stand-along",
      parentVersion: "sl",
    },
  ],
};

export default data;
