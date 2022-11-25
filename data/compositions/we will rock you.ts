import type { Composition } from "types/discography";

const data: Composition = {
  name: `We Will Rock You`,
  artist: `Queen`,
  versions: [
    {
      id: `wwry`,
    },
    {
      id: `wwry-mono`,
      versionName: "mono",
      parentVersion: "wwry",
    },
    {
      id: `wwry-lk-fast`,
      versionName: "Live Killers fast version",
    },
    {
      id: `wwry-lk-fast-stand-along`,
      versionName: "Live Killers fast version, single stand-along",
      parentVersion: `wwry-lk-fast`,
    },
    {
      id: `wwry-lk-fast-stand-along-mono`,
      versionName: "Live Killers fast version, single stand-along mono",
      parentVersion: `wwry-lk-fast`,
    },
    {
      id: `wwry-lk-fast-jap-stand-along`,
      versionName: "Live Killers fast version, Japanese single stand-along",
      parentVersion: `wwry-lk-fast`,
    },
    { id: "wwry-ruined", versionName: "1992 Rick Rubin remix" },
  ],
};

export default data;
