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
    { id: "wwry-ruined", versionName: "1992 Rick Rubin remix" },
  ],
};

export default data;
