import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `The Show Must Go On/Bohemian Rhapsody`,
  releaseDate: "1992.02.06",
  discogs_url:
    "https://www.discogs.com/master/1256197-Queen-The-Show-Must-Go-On-And-Bohemian-Rhapsody",
  tracks: [
    {
      name: `Bohemian Rhapsody`,
      versions: [{ id: "br-stand-along" }],
    },
    {
      name: `The Show Must Go On`,
      versions: [{ id: `tsmgo` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: "br-stand-along",
        },
        {
          index: "B",
          track: `tsmgo`,
        },
      ],
      releases: '1991 Hollywood Records 7"',
    },
    {
      tracks: [
        {
          index: "A1",
          track: "br-stand-along",
        },
        {
          index: "A2",
          track: `tsmgo`,
        },
        {
          index: "B1",
          track: "br-stand-along",
        },
        {
          index: "B2",
          track: `tsmgo`,
        },
      ],
      releases: `1991 Hollywood Records cassette`,
    },
  ],
};

export default data;
