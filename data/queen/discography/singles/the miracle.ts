import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `The Miracle`,
  discogs_url: "https://www.discogs.com/master/19074-Queen-The-Miracle",
  tracks: [
    {
      name: `The Miracle`,
      versions: [{ id: `tm` }],
    },
    {
      name: `Stone Cold Crazy`,
      versions: [{ id: `scc-nov-74-89-edit`, releases: `` }],
    },
    {
      name: `My Melancholy Blues`,
      versions: [{ id: `mmb-77-houston-89-edit`, releases: `` }],
    },
    {
      name: `I Want It All`,
      versions: [{ id: `iwia`, releases: `` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `tm`,
        },
        {
          indexes: ["B", 2],
          track: `scc-nov-74-89-edit`,
        },
      ],
      releases: ['Original 1989 7"', '2010 "Singles collection 4" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `tm`,
        },
        {
          index: "B1",
          track: `scc-nov-74-89-edit`,
        },
        {
          index: "B2",
          track: `mmb-77-houston-89-edit`,
        },
      ],
      releases: [`Original 1989 12"`, `Original 1989 CD/3"CD`],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `tm`,
        },
        {
          index: "A2",
          track: `scc-nov-74-89-edit`,
        },
        {
          index: "B1",
          track: `tm`,
        },
        {
          index: "B2",
          track: `scc-nov-74-89-edit`,
        },
      ],
      releases: `Original 1989 cassette`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `tm`,
        },
        {
          index: "B",
          track: `iwia`,
        },
      ],
      releases: `Argentinian misprint promo 7"`,
    },
  ],
};

export default data;
