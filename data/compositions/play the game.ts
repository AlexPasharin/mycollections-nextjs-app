import type { Composition } from "types/discography";

const data: Composition = {
  name: `Play The Game`,
  artist: `Queen`,
  versions: [
    {
      id: `ptg`,
    },
    { id: `ptg-mono`, versionName: "mono", parentVersion: "ptg" },
  ],
};

export default data;
