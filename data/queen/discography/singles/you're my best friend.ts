import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "You're My Best Friend",
  discogs_url:
    "https://www.discogs.com/Queen-Youre-My-Best-Friend-bw-39/master/6246",
  tracks: [
    {
      name: "You're My Best Friend",
      versions: [{ id: "ymbf" }],
    },
    {
      name: "'39",
      versions: [
        {
          id: "39-stand-along",
          releases: 'not 1982 Canadian Gold Standard series 7"',
        },
      ],
    },
    {
      name: "Bohemian Rhapsody",
      versions: [
        {
          id: "br-stand-along",
          releases: '1982 Canadian Gold Standard series 7"',
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "ymbf",
        },
        {
          indexes: ["B", 2],
          track: "39-stand-along",
        },
      ],
      releases: ['Original 1976 7"', '2008 "Singles collection 1" CD single'],
    },
    {
      tracks: [
        {
          index: "A",
          track: "ymbf",
        },
        { index: "B", track: "br-stand-along" },
      ],
      releases: '1982 Canadian Gold Standard series 7"',
    },
  ],
};

export default data;
