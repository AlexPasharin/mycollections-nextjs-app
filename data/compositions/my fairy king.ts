import type { Composition } from "types/discography";

const data: Composition = {
  name: `My Fairy King`,
  artist: `Queen`,
  versions: [
    {
      id: `mfk`,
    },
    {
      id: `mfk-bbc`,
      versionName: "BBC session",
    },
    {
      id: `mfk-bbc-stereo-swap`,
      versionName: "BBC session, HR stereo swap",
      parentVersion: `mfk-bbc`,
    },
  ],
};

export default data;
