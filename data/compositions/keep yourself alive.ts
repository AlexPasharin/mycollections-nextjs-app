import type { Composition } from "types/discography";

const data: Composition = {
  name: "Keep yourself alive",
  artist: "Queen",
  versions: [
    { id: "kya" },
    { id: "kya-mono", versionName: "mono", parentVersion: "kya" },
    {
      id: "kya-bbc-1",
      versionName: "BBC session 1",
    },
    {
      id: "kya-bbc-1-stereo-swap",
      versionName: "BBC session 1, HR stereo swap",
      parentVersion: "kya-bbc-1",
    },
    { id: "kya-edit", versionName: "Electra 1975 edit" },
    {
      id: "kya-edit-mono",
      versionName: "Electra 1975 edit mono",
      parentVersion: "kya-edit",
    },
    { id: "kya-llrt", versionName: "long lost re-take" },
    { id: "kya-lk", versionName: "Live Killers version" },
    {
      id: "kya-lk-hr-98",
      versionName: "Live Killers version, 1998 HR promo cut",
      parentVersion: "kya-lk",
    },
  ],
};

export default data;
