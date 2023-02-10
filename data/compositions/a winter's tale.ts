import type { Composition } from "types/discography";

const data: Composition = {
  name: `A Winter's Tale`,
  artist: `Queen`,
  versions: [
    {
      id: `awt`,
    },
    {
      id: `awt-stand-along`,
      versionName: "stand-along",
      parentVersion: "awt",
    },
  ],
};

export default data;
