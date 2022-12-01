import type { Composition } from "types/discography";

const data: Composition = {
  name: `Under Pressure`,
  artist: `Queen & David Bowie`,
  versions: [
    {
      id: `up`,
    },
    {
      id: `up-mono`,
      versionName: "mono",
      parentVersion: "up",
    },
  ],
};

export default data;
