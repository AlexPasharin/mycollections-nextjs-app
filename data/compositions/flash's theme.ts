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
      id: `ft-video`,
      versionName: "video",
      trackName: "Flash",
    },
    {
      id: `ft`,
    },
    {
      id: `ft-vanguard-edit`,
      versionName: "Vanguard remix edit",
      trackName: "Flash",
      artist: "Queen + Vanguard",
    },
    {
      id: `ft-vanguard-ext`,
      versionName: "Vanguard Extended Mix",
      trackName: "Flash",
      artist: "Queen + Vanguard",
    },
    {
      id: `ft-vanguard-video`,
      versionName: "Vanguard mix video",
      trackName: "Flash",
      artist: "Queen + Vanguard",
    },
    {
      id: `ft-electro`,
      versionName: "Electro Remix",
      trackName: "Flash",
      artist: "Queen + Vanguard",
    },
    {
      id: `ft-tomcraft`,
      versionName: "Tomcraft Remix",
      trackName: "Flash",
    },
    {
      id: `ft-tomcraft-edit`,
      versionName: "Tomcraft Remix edit",
      trackName: "Flash",
    },
    {
      id: `ft-smith-selway`,
      versionName: "Christian Smith & John Selway Remix",
      trackName: "Flash",
    },
    {
      id: `ft-flashmix-2003`,
      versionName: "Flash mix",
      trackName: "Flash",
    },
  ],
};

export default data;
