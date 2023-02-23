import type { Composition } from "types/discography";

const data: Composition = {
  name: `Another One Bites The Dust`,
  artist: `Queen`,
  versions: [
    {
      id: `aobtd`,
    },
    { id: `aobtd-mono`, versionName: "mono", parentVersion: `aobtd` },
    {
      id: `aobtd-ext`,
      versionName: "extended version",
    },
    {
      id: `aobtd-small-soldiers`,
      versionName: "Small Soldiers remix",
      artist: "Queen / Wyclef Jean Featuring Pras & Free",
    },
    {
      id: `aobtd-small-soldiers-instr`,
      versionName: "Small Soldiers remix instrumental",
      artist: "Queen / Wyclef Jean Featuring Pras & Free",
    },
    {
      id: `aobtd-small-soldiers-edit`,
      versionName: "Small Soldiers remix radio edit",
      artist: "Queen / Wyclef Jean Featuring Pras & Free",
    },
    {
      id: `aobtd-small-soldiers-video-mix`,
      versionName: "Small Soldiers remix video mix",
      artist: "Queen / Wyclef Jean Featuring Pras & Free",
    },
    {
      id: `aobtd-black-rock-star`,
      versionName: "Team 1 Black Rock Star Main Pass Mix",
      artist: "Queen / Wyclef Jean Featuring Pras & Free",
    },
    {
      id: `aobtd-black-rock-star-edit`,
      versionName: "Team 1 Black Rock Star Radio Edit",
      artist: "Queen / Wyclef Jean Featuring Pras & Free",
    },
    {
      id: `aobtd-black-rock-star-acapella`,
      versionName: "Team 1 Black Rock Star a capella",
      artist: "Queen / Wyclef Jean Featuring Pras & Free",
    },
    {
      id: `aobtd-black-rock-star-instr`,
      versionName: "Team 1 Black Rock Star instrumental",
      artist: "Queen / Wyclef Jean Featuring Pras & Free",
    },
  ],
};

export default data;
