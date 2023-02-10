import type { Composition } from "types/discography";

const data: Composition = {
  name: "Liar",
  artist: "Queen",
  versions: [
    {
      id: "liar",
    },
    { id: "liar-edit", versionName: '7" edit' },
    {
      id: "liar-edit-mono",
      versionName: '7" edit mono',
      parentVersion: "liar-edit",
    },
    {
      id: "liar-bbc-1",
      versionName: "BBC session 1",
    },
    {
      id: `liar-bbc-1-stereo-swap`,
      versionName: "BBC session 1, HR stereo swap",
      parentVersion: "liar-bbc-1",
    },
  ],
};

export default data;
