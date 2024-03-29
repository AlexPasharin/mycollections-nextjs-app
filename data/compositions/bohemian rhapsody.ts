import type { Composition } from "types/discography";

const data: Composition = {
  name: "Bohemian Rhapsody",
  artist: "Queen",
  versions: [
    {
      id: "br",
    },
    {
      id: "br-stand-along",
      versionName: "stand-along",
      parentVersion: "br",
    },
    {
      id: "br-78-edit",
      versionName: "1978 promo edit",
    },
    {
      id: "br-88-stand-along",
      versionName: '1988 3"CD errorneous stand-along',
    },
    {
      id: "br-karaoke",
      versionName: "karaoke version",
    },
    {
      id: "br-karaoke-edit",
      versionName: "karaoke version, 2000 single edit",
      parentVersion: "br-karaoke",
    },
    {
      id: "br-video",
      versionName: "promo video",
    },
    {
      id: "br-qpr-hyde-park",
      versionName: "Queen + Paul Rodgers live in Hyde Park 15 July 2005",
      artist: "Queen + Paul Rodgers",
    },
    {
      id: "br-qpr-hyde-park-video",
      versionName: "Queen + Paul Rodgers live in Hyde Park 15 July 2005, video",
      artist: "Queen + Paul Rodgers",
    },
    {
      id: "br-wwry-london",
      versionName: "We Will Rock You London Cast musical - album version",
      artist: "We Will Rock You London Cast",
    },
    {
      id: "br-muppets",
      artist: "Queen + The Muppets",
    },
    {
      id: "br-muppets-video",
      versionName: "video",
      artist: "Queen + The Muppets",
    },
  ],
};

export default data;
