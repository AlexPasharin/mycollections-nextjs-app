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
  ],
};

export default data;
