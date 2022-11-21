import type { Composition } from "types/discography";

const data: Composition = {
  name: "Keep yourself alive",
  artist: "Queen",
  versions: [
    { id: "kya" },
    { id: "kya-mono", versionName: "mono", parentVersion: "kya" },
    {
      id: "kya-bbc-1",
      versionName: "live at the BBC session 1",
    },
    {
      id: "kya-bbc-1-stereo-swap",
      versionName: "live at the BBC session 1, HR stereo swap",
      parentVersion: "kya-bbc-1",
    },
    { id: "kya-edit", versionName: "Electra 75 edit" },
    {
      id: "kya-edit-mono",
      versionName: "Electra 75 edit mono",
      parentVersion: "kya-edit",
    },
    { id: "kya-llrt", versionName: "long lost re-take" },
    { id: "kya-lk", versionName: "Live Killers version" },
    {
      id: "kya-lk-hr-98",
      versionName: "Live Killers version, 98 HR promo cut",
      parentVersion: "kya-lk",
    },
  ],
};

export default data;
