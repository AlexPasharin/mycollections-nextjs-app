import type { Composition } from "types/discography";

const data: Composition = {
  name: "Somebody To Love",
  artist: "Queen",
  versions: [
    {
      id: "stl",
    },
    {
      id: "stl-mono",
      versionName: "mono",
      parentVersion: "stl",
    },
  ],
};

export default data;
