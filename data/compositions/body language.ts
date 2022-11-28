import type { Composition } from "types/discography";

const data: Composition = {
  name: `Body Language`,
  artist: `Queen`,
  versions: [
    {
      id: `bl`,
    },
    {
      id: `bl-mono`,
      versionName: "mono",
      parentVersion: "bl",
    },
  ],
};

export default data;
