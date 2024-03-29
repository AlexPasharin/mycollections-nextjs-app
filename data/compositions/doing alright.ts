import type { Composition } from "types/discography";

const data: Composition = {
  name: "Doing Alright",
  artist: "Queen",
  versions: [
    {
      id: "dar",
    },
    {
      id: "dar-bbc",
      versionName: "BBC session",
    },
    {
      id: "dar-bbc-stereo-swap",
      versionName: "BBC session, HR stereo swap",
      parentVersion: "dar-bbc",
    },
  ],
};

export default data;
