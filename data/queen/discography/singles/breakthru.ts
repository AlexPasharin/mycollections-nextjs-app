import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Breakthru`,
  discogs_url: "https://www.discogs.com/master/18431-Queen-Breakthru",
  tracks: [
    {
      name: `Breakthru`,
      versions: [
        { id: `breakthru` },
        {
          id: `breakthru-ext`,
          releases: `12" and CD releases, except for US 1 track promo CD or 2010 "Singles collection 3" CD`,
        },
        {
          id: `breakthru-now-edit`,
          releases: `US 4 track promo CD`,
        },
        {
          id: `breakthru-almost-now-edit`,
          releases: `US 4 track promo CD`,
        },
      ],
    },
    {
      name: `Stealin'`,
      versions: [{ id: `stealin'`, releases: `not Capitol releases` }],
    },
    {
      name: `I Want It All`,
      versions: [
        {
          id: `iwia-edit`,
          releases: `Capitol releases, except for US promo 7"/promo CDs`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `breakthru`,
        },
        {
          indexes: ["B", 2],
          track: `stealin'`,
        },
      ],
      releases: [
        'Original Parlophone 1989 7"',
        '2010 "Singles collection 3" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `breakthru-ext`,
        },
        {
          index: "B1",
          track: `breakthru`,
        },
        {
          index: "B2",
          track: `stealin'`,
        },
      ],
      releases: `Original 1989 12"`,
    },
    {
      tracks: [
        {
          track: `breakthru-ext`,
        },
        {
          track: `stealin'`,
        },
        {
          track: `breakthru`,
        },
      ],
      releases: `Original 1989 CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `breakthru`,
        },
        {
          index: "A2",
          track: `stealin'`,
        },
        {
          index: "B1",
          track: `breakthru`,
        },
        {
          index: "B2",
          track: `stealin'`,
        },
      ],
      releases: `Original Parlophone 1989 cassette`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `breakthru`,
        },
        {
          index: "B",
          track: `iwia-edit`,
        },
      ],
      releases: 'Original Capitol 1989 7"',
    },
    {
      tracks: [
        {
          index: "A1",
          track: `breakthru`,
        },
        {
          index: "A2",
          track: `iwia-edit`,
        },
        {
          index: "B1",
          track: `breakthru`,
        },
        {
          index: "B2",
          track: `iwia-edit`,
        },
      ],
      releases: `Original Capitol 1989 cassette`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `breakthru`,
        },
        {
          index: "B",
          track: `breakthru`,
        },
      ],
      releases: 'US promo 7"',
    },
    {
      tracks: [
        {
          track: `breakthru-now-edit`,
        },
        {
          track: `breakthru-almost-now-edit`,
        },
        {
          track: `breakthru-ext`,
        },
        {
          track: `breakthru`,
        },
      ],
      releases: `US 4 track promo CD`,
    },
    {
      tracks: [
        {
          track: `breakthru`,
        },
      ],
      releases: `US 1 track promo CD`,
    },
  ],
};

export default data;
