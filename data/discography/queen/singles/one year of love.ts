import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `One Year Of Love`,
  discogs_url: "https://www.discogs.com/master/15606-Queen-One-Year-Of-Love",
  tracks: [
    {
      name: `One Year Of Love`,
      versions: [
        { id: `oyol`, releases: `not Hollywood Records 1992 promo CD` },
        { id: `oyol-edit`, releases: `Hollywood Records 1992 promo CD` },
      ],
    },
    {
      name: `Gimme The Prize`,
      versions: [
        {
          id: `gtp`,
          releases: `not Philippines 7" or Hollywood Records 1992 promo CD`,
        },
      ],
    },
    {
      name: `Seven Seas Of Rhye`,
      versions: [{ id: `ssor`, releases: `French 12"` }],
    },
    {
      name: `Princes Of The Universe`,
      versions: [{ id: `potu`, releases: `Spanish 12"` }],
    },
    {
      name: `Don't Lose Your Head`,
      versions: [{ id: `dlyh`, releases: `Philippines 7"` }],
    },
    {
      name: `We Are The Champions`,
      versions: [{ id: `watc`, releases: `Hollywood Records 1992 promo CD` }],
    },
    {
      name: `Barcelona`,
      versions: [
        { id: `barcelona`, releases: `Hollywood Records 1992 promo CD` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `oyol`,
        },
        {
          indexes: ["B", 2],
          track: `gtp`,
        },
      ],
      releases: [
        'Original 1986 7"',
        'French promo 12"',
        '2010 "Singles collection 3" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `oyol`,
        },
        { index: "B1", track: `gtp` },
        { index: "B2", track: `ssor` },
      ],
      releases: 'French 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `oyol`,
        },
        { index: "B1", track: `gtp` },
        { index: "B2", track: `potu` },
      ],
      releases: 'Spanish 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `oyol`,
        },
        { index: "B", track: `dlyh` },
      ],
      releases: `Philippines 7"`,
    },
    {
      tracks: [
        {
          track: `oyol`,
        },
        {
          track: `watc`,
        },
        {
          track: `barcelona`,
        },
      ],
      releases: `Hollywood Records 1992 promo CD`,
    },
  ],
};

export default data;
