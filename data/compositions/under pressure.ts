import type { Composition } from "types/discography";

const data: Composition = {
  name: `Under Pressure`,
  artist: `Queen & David Bowie`,
  versions: [
    {
      id: `up`,
    },
    {
      id: `up-mono`,
      versionName: "mono",
      parentVersion: "up",
    },
    {
      id: `up-rah`,
      versionName: "rah mix",
    },
    {
      id: `up-rah-edit`,
      versionName: "rah mix edit",
    },
    {
      id: `up-rah-video`,
      versionName: "rah mix video",
    },
    {
      id: `up-rah-video-making`,
      versionName: "rah mix: making of video",
    },
    {
      id: `up-spencer`,
      versionName: "Mike Spencer Mix",
    },
    {
      id: `up-knebworth-mix`,
      versionName: "Knebworth Mix",
    },
    {
      id: `up-club`,
      versionName: "club 2000 mix",
    },
  ],
};

export default data;
