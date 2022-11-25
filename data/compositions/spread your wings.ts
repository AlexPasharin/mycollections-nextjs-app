import type { Composition } from "types/discography";

const data: Composition = {
  name: `Spread Your Wings`,
  artist: `Queen`,
  versions: [
    {
      id: `syw`,
    },
    { id: `syw-lk`, versionName: "Live Killers version" },
    {
      id: `syw-lk-stand-along`,
      versionName: "Live Killers version, single stand-along",
      parentVersion: `syw-lk`,
    },
    {
      id: `syw-lk-jap-stand-along`,
      versionName: "Live Killers version, Japanese single stand-along",
      parentVersion: `syw-lk`,
    },
  ],
};

export default data;
