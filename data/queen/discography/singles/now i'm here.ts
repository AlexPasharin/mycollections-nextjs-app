import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Now I'm Here",
  discogs_url: "https://www.discogs.com/Queen-Now-Im-Here/master/50193",
  tracks: [
    {
      name: "Now I'm Here",
      versions: [{ id: "nih" }],
    },
    {
      name: "Lily Of The Valley",
      versions: [
        { id: "lov-stand-along", releases: 'Not Japanese 1976 7" re-issue' },
      ],
    },
    {
      name: "Keep Yourself Alive",
      versions: [{ id: "kya", releases: 'Japanese 1976 7" re-issue' }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "nih",
        },
        {
          indexes: ["B", 2],
          track: "lov-stand-along",
        },
      ],
      releases: ['Original 1975 7"', '2008 "Singles collection 1" CD single'],
    },
    {
      tracks: [
        {
          index: "A",
          track: "nih",
        },
        {
          index: "B",
          track: "kya",
        },
      ],
      releases: 'Japanese 1976 7" re-issue',
    },
  ],
};

export default data;
