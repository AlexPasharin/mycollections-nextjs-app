import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Spread Your Wings`,
  discogs_url: "",
  tracks: [
    {
      name: `Spread Your Wings`,
      versions: [{ id: `syw` }],
    },
    {
      name: `Sheer Heart Attack`,
      versions: [
        { id: `sha`, releases: `not 2021 "The Greatest Pop-up store" 7"` },
      ],
    },
    {
      name: `One Year Of Love`,
      versions: [
        { id: `oyol`, releases: `2021 "The Greatest Pop-up store" 7"` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "syw",
        },
        {
          indexes: ["B", 2],
          track: "sha",
        },
      ],
      releases: ['Original 1978 7"', '2008 "Singles collection 1" CD single'],
    },
    {
      tracks: [
        {
          index: "A",
          track: "syw",
        },
        {
          index: "B",
          track: "oyol",
        },
      ],
      releases: `2021 "The Greatest Pop-up store" 7"`,
    },
  ],
};

export default data;
