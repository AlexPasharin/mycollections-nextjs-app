import type { Composition } from "types/discography";

const data: Composition = {
  name: `Hang On In There`,
  artist: `Queen`,
  versions: [
    {
      id: `hoit`,
      versionName: "full length version",
    },
    {
      id: `hoit-original`,
      versionName: "original single edit",
      parentVersion: "hoit",
    },
  ],
};

export default data;
