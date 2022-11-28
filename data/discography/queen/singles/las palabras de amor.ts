import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Las Palabras De Amor`,
  discogs_url:
    "https://www.discogs.com/master/265701-Queen-Las-Palabras-De-Amor-The-Words-Of-Love",
  tracks: [
    {
      name: `Las Palabras De Amor`,
      versions: [{ id: `lpda` }],
    },
    {
      name: `Cool Cat`,
      versions: [{ id: `cc`, releases: 'not South American promo 7"s' }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `lpda`,
        },
        {
          indexes: ["B", 2],
          track: `cc`,
        },
      ],
      releases: ['Original 1982 7"', '2009 "Singles collection 2" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `lpda`,
        },
        { index: "B", track: `lpda` },
      ],
      releases: `Chile and Argentina promo 7"s`,
    },
  ],
};

export default data;
