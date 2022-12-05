import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `The Invisible Man`,
  discogs_url: "https://www.discogs.com/master/18648-Queen-The-Invisible-Man",
  tracks: [
    {
      name: `The Invisible Man`,
      versions: [
        { id: `tim` },
        {
          id: `tim-ext`,
          releases: `12" and CD releases, except for 2010 "Singles collection 3" CD`,
        },
      ],
    },
    {
      name: `Hijack My Heart`,
      versions: [{ id: `hmh`, releases: `not Philippines promo 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `tim`,
        },
        {
          indexes: ["B", 2],
          track: `hmh`,
        },
      ],
      releases: ['Original 1989 7"', '2010 "Singles collection 3" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `tim-ext`,
        },
        {
          index: "B1",
          track: `tim`,
        },
        {
          index: "B2",
          track: `hmh`,
        },
      ],
      releases: `Original 1989 12"`,
    },
    {
      tracks: [
        {
          track: `tim-ext`,
        },
        {
          track: `hmh`,
        },
        {
          track: `tim`,
        },
      ],
      releases: `Original 1989 CD/3"CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `tim`,
        },
        {
          index: "A2",
          track: `hmh`,
        },
        {
          index: "B1",
          track: `tim`,
        },
        {
          index: "B2",
          track: `hmh`,
        },
      ],
      releases: `Original 1989 cassette`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `tim`,
        },
        {
          index: "B",
          track: `tim`,
        },
      ],
      releases: `Philippines promo 7"`,
    },
  ],
};

export default data;
