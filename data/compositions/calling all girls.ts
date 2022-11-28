import type { Composition } from "types/discography";

const data: Composition = {
  name: `Calling All Girls`,
  artist: `Queen`,
  versions: [
    {
      id: `cag`,
    },
    {
      id: `cag-mono`,
      versionName: "mono",
      parentVersion: "cag",
    },
  ],
};

export default data;
