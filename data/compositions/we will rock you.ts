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
    { id: "wwry-ruined", versionName: "Rick Rubin ruined remix" },
    {
      id: "wwry-ruined-promo",
      versionName: 'Rick Rubin ruined remix, 12" promo version',
    },
    { id: "wwry-ruined-instr", versionName: "ruined instrumental" },
    {
      id: "wwry-ruined-bb",
      versionName: "big beat a capella",
    },
    {
      id: "wwry-ruined-zulu",
      versionName: "zulu scratch a capella",
    },
    { id: "wwry-ruined-effects-instr", versionName: "effects instrumental" },
    { id: "wwry-ruined-clap", versionName: "clap a capella" },
    { id: "wwry-ruined-effects-acapella", versionName: "effects a capella" },
    {
      id: "wwry-ruined-edit",
      versionName: "Rick Rubin ruined remix edit",
    },
  ],
};

export default data;
