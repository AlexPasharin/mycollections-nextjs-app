import type { Composition } from "types/discography";

const data: Composition = {
  name: "Killer Queen",
  artist: "Queen",
  versions: [
    {
      id: "kq",
    },
    {
      id: "kq-mono",
      versionName: "mono",
      parentVersion: "kq",
    },
  ],
};

export default data;
