import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `One Vision`,
  discogs_url: "https://www.discogs.com/master/15607-Queen-One-Vision",
  tracks: [
    {
      name: `One Vision`,
      versions: [
        {
          id: `ov-edit`,
          releases: `not 12" releases (except for Capitol promo 12") or Argentinian cassette`,
        },
        {
          id: `bv`,
          releases: `not Capitol promo 7"/12"/cassette, Mexican promo 7" or 2005 French CD`,
        },
        {
          id: `ov-ext`,
          releases: ``,
        },
        {
          id: `ov-promo-edit`,
          releases: `12" releases (except for Capitol promo 12"), rgentinian cassette`,
        },
      ],
    },
    {
      name: `We Will Rock You`,
      versions: [{ id: `wwry`, releases: `2005 French CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `ov-edit`,
        },
        {
          indexes: ["B", 2],
          track: `bv`,
        },
      ],
      releases: ['Original 1985 7"', '2010 "Singles collection 3" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `ov-ext`,
        },
        { index: "B", track: `bv` },
      ],
      releases: ['Original 1985 12"', "Argentinian cassette"],
    },
    {
      tracks: [
        {
          index: "A",
          track: `ov-edit`,
        },
        {
          index: "B",
          track: `ov-promo-edit`,
        },
      ],
      releases: `Capitol promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `ov-edit`,
        },
        {
          index: "B",
          track: `ov-edit`,
        },
      ],
      releases: [
        `Capitol promo 12"`,
        `Capitol promo cassette`,
        'Mexican promo 7"',
      ],
    },
    {
      tracks: [
        {
          track: `ov-edit`,
        },
        {
          track: `wwry`,
        },
      ],
      releases: `2005 French CD`,
    },
  ],
};

export default data;
