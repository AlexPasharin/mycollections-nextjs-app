import type { Composition } from "types/discography";

const data: Composition = {
  name: `We Are The Champions`,
  artist: `Queen`,
  versions: [
    {
      id: `watc`,
    },
    {
      id: `watc-mono`,
      versionName: "mono",
      parentVersion: "watc",
    },
  ],
};

export default data;
