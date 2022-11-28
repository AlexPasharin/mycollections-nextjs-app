import type { Composition } from "types/discography";

const data: Composition = {
  name: `Flash's Theme`,
  artist: `Queen`,
  versions: [
    {
      id: `ft-single-edit`,
      versionName: "single edit",
      trackName: "Flash",
    },
    {
      id: `ft-single-edit-mono`,
      versionName: "single edit mono",
      trackName: "Flash",
      parentVersion: `ft-single-edit`,
    },
    {
      id: `ft`,
    },
  ],
};

export default data;
