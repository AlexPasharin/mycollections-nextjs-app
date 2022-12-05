import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Scandal`,
  discogs_url: "https://www.discogs.com/master/18634-Queen-Scandal",
  tracks: [
    {
      name: `Scandal`,
      versions: [
        { id: `scandal` },
        {
          id: `scandal-ext`,
          releases: `12" and CD releases, except for US withdrawn CD, US 1 track promo CD,  Brazil 12" or '2010 "Singles collection 3" CD'`,
        },
      ],
    },
    {
      name: `My Life Has Been Saved`,
      versions: [
        {
          id: `mlhbs`,
          releases: `not US promo 7", US 1 track promo CD, Mexican promo 7" or Brazil promo 12"`,
        },
      ],
    },
    {
      name: `Hijack My Heart`,
      versions: [{ id: `hmh`, releases: `US withdrawn CD` }],
    },
    {
      name: `Stealin'`,
      versions: [{ id: `stealin'`, releases: `US withdrawn CD` }],
    },
    {
      name: `Breakthru`,
      versions: [{ id: `breakthru`, releases: `Mexican promo 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `scandal`,
        },
        {
          indexes: ["B", 2],
          track: "mlhbs",
        },
      ],
      releases: ['Original 1989 7"', '2010 "Singles collection 3" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `scandal-ext`,
        },
        {
          index: "B1",
          track: `scandal`,
        },
        {
          index: "B2",
          track: "mlhbs",
        },
      ],
      releases: `Original 1989 12"`,
    },
    {
      tracks: [
        {
          track: `scandal-ext`,
        },
        {
          track: "mlhbs",
        },
        {
          track: `scandal`,
        },
      ],
      releases: ['UK etched 1-sided 12"', `Original 1989 CD/3"CD`],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `scandal`,
        },
        {
          index: "A2",
          track: "mlhbs",
        },
        {
          index: "B1",
          track: `scandal`,
        },
        {
          index: "B2",
          track: "mlhbs",
        },
      ],
      releases: `Original Parlophone 1989 cassette`,
    },
    {
      tracks: [
        {
          track: `scandal`,
        },
        {
          track: "mlhbs",
        },
        {
          track: `hmh`,
        },
        {
          track: "stealin'",
        },
      ],
      releases: `US withdrawn CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `scandal`,
        },
        {
          index: "A",
          track: `scandal`,
        },
      ],
      releases: `US promo 7"`,
    },
    {
      tracks: [
        {
          track: `scandal`,
        },
      ],
      releases: `US promo CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `scandal`,
        },
        {
          index: "B",
          track: `breakthru`,
        },
      ],
      releases: `Mexican promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `scandal`,
        },
        {
          index: "B",
          track: `scandal`,
        },
      ],
      releases: `Brazil promo 7"`,
    },
  ],
};

export default data;
