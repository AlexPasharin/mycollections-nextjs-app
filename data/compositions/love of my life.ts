import type { Composition } from "types/discography";

const data: Composition = {
  name: `Love Of My Life`,
  artist: `Queen`,
  versions: [
    {
      id: `loml`,
    },
    {
      id: `loml-lk`,
      versionName: "Live Killers version",
    },
    {
      id: `loml-lk-stand-along`,
      versionName: "Live Killers version, EMI single stand-along",
      parentVersion: `loml-lk`,
    },
    {
      id: `loml-lk-jap-stand-along`,
      versionName: "Live Killers version, Japanese single stand-along",
      parentVersion: `loml-lk`,
    },
  ],
};

export default data;
