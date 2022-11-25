import type { Composition } from "types/discography";

const data: Composition = {
  name: `Don't Stop Me Now`,
  artist: `Queen`,
  versions: [
    {
      id: `dsmn`,
    },
    { id: "dsmn-mono", versionName: "mono", parentVersion: "dsmn" },
  ],
};

export default data;
