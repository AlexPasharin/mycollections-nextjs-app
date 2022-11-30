import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Pain Is So Close To Pleasure`,
  discogs_url:
    "https://www.discogs.com/master/16222-Queen-Pain-Is-So-Close-To-Pleasure",
  tracks: [
    {
      name: `Pain Is So Close To Pleasure`,
      versions: [
        { id: `pisctp-single-remix`, releases: `not Australian 7"` },
        { id: `pisctp-extended-remix`, releases: `12" releases` },
        { id: `pisctp`, releases: `Australian 7"` },
      ],
    },
    {
      name: `Don't Lose Your Head`,
      versions: [
        { id: `dlyh`, releases: `not Australian 7" or Capitol promo 7"` },
      ],
    },
    {
      name: `Who Wants To Live Forever`,
      versions: [{ id: `wwtlf-single-edit`, releases: `Australian 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `pisctp-single-remix`,
        },
        {
          indexes: ["B", 2],
          track: `dlyh`,
        },
      ],
      releases: ['Original 1986 7"', '2010 "Singles collection 3" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `pisctp-extended-remix`,
        },
        { index: "B1", track: `pisctp-single-remix` },
        { index: "B2", track: `dlyh` },
      ],
      releases: 'Original 1986 12"',
    },
    {
      tracks: [
        { index: "A", track: `pisctp-single-remix` },
        { index: "B", track: `pisctp-single-remix` },
      ],
      releases: 'Capitol promo 7"',
    },
    {
      tracks: [
        { index: "A", track: `pisctp` },
        { index: "B", track: `wwtlf-single-edit` },
      ],
      releases: 'Australian 7"',
    },
  ],
};

export default data;
