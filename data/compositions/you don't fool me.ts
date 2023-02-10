import type { Composition } from "types/discography";

const data: Composition = {
  name: `You Don't Fool Me`,
  artist: `Queen`,
  versions: [
    {
      id: `ydfm`,
    },
    {
      id: `ydfm-edit`,
      versionName: "edit",
    },
    {
      id: `ydfm-sexy`,
      versionName: "Sexy Club Mix",
    },
    {
      id: `ydfm-sexy-error`,
      versionName: "Sexy Club Mix - UK error edit",
      parentVersion: `ydfm-sexy`,
    },
    {
      id: `ydfm-divaz`,
      versionName: "Dancing Divaz Club Mix",
    },
    {
      id: `ydfm-divaz-instr`,
      versionName: "Dancing Divaz Instrumental Club Mix",
    },
    {
      id: `ydfm-divaz-rhythm`,
      versionName: "Dancing Divaz Rhythm Mix",
    },
    {
      id: `ydfm-bs`,
      versionName: "B.S. Project Remix",
    },
    {
      id: `ydfm-bs-edit`,
      versionName: "B.S. Project Remix edit",
    },
    {
      id: `ydfm-dub`,
      versionName: "Dub Dance Single Mix",
    },
    {
      id: `ydfm-french-edit`,
      versionName: "French edit",
    },
    {
      id: `ydfm-club`,
      versionName: "Freddy's Club Mix",
    },
    {
      id: `ydfm-refenge-dub`,
      versionName: "Freddy's Revenge Dub",
    },
    {
      id: `ydfm-for-a-day`,
      versionName: "Queen For A Day Mix",
    },
    {
      id: `ydfm-late`,
      versionName: "Late Mix",
    },
    {
      id: `ydfm-forever-megamix`,
      versionName: "Queen Forever Megamix",
    },
  ],
};

export default data;
