import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `I'm Going Slightly Mad`,
  discogs_url:
    "https://www.discogs.com/master/19607-Queen-Im-Going-Slightly-Mad",
  tracks: [
    {
      name: `I'm Going Slightly Mad`,
      versions: [{ id: `igsm` }],
    },
    {
      name: `The Hitman`,
      versions: [{ id: `th` }],
    },
    {
      name: `Lost Opportunity`,
      versions: [
        {
          id: `lo`,
          releases: `12" and CD releases except for 2010 "Singles collection 4" CD`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `igsm`,
        },
        {
          indexes: ["B", 2],
          track: `th`,
        },
      ],
      releases: ['Original 1991 7"', '2010 "Singles collection 4" CD'],
    },
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `igsm`,
        },
        {
          indexes: ["B1", 2],
          track: `th`,
        },
        {
          indexes: ["B2", 3],
          track: `lo`,
        },
      ],
      releases: [`Original 1991 12"`, `Original 1991 CD`],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `igsm`,
        },
        {
          index: "A2",
          track: `th`,
        },
        {
          index: "B1",
          track: `igsm`,
        },
        {
          index: "B2",
          track: `th`,
        },
      ],
      releases: `Original 1991 cassette`,
    },
  ],
};

export default data;
