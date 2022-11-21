import type { Composition } from "types/discography";

const data: Composition = {
  name: "Seven Seas Of Rhye",
  artist: "Queen",
  versions: [
    {
      id: "ssor",
    },
    {
      id: "ssor-mono",
      versionName: "mono",
      parentVersion: "ssor",
    },
  ],
};

export default data;
