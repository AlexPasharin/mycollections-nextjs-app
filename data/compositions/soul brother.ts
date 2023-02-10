import type { Composition } from "types/discography";

const data: Composition = {
  name: `Soul Brother`,
  artist: `Queen`,
  versions: [
    {
      id: `sb`,
    },
    {
      id: `sb-canada-edit`,
      versionName: "Canadian single edit",
    },
    {
      id: `sb-inverted`,
      versionName: "inverted stereo channels",
      parentVersion: "sb",
    },
  ],
};

export default data;
