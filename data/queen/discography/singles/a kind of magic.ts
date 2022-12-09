import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `A Kind Of Magic`,
  releaseDate: "1986.03.17",
  discogs_url: "https://www.discogs.com/master/16015-Queen-A-Kind-Of-Magic",
  tracks: [
    {
      name: `A Kind Of Magic`,
      versions: [
        {
          id: `akom`,
          releases: `not 12" releases, except for Capitol promo 12"`,
        },
        { id: `akom-ext`, releases: `12" releases` },
      ],
    },
    {
      name: `A Dozen Red Roses For My Darling`,
      versions: [
        {
          id: `adrrfmd`,
          releases: `not 12" releases, Capitol releases, Mexican promo 7" or Argentinian promo 7"`,
        },
        { id: `adrrfmd-ext`, releases: `12" EMI releases` },
      ],
    },
    {
      name: `Gimme The Prize`,
      versions: [
        { id: `gtp`, releases: `Capitol releases, except for 7"/12" promos` },
      ],
    },
    {
      name: `One Vision`,
      versions: [{ id: `ov-edit`, releases: `1988/91 3"CDs` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `akom`,
        },
        {
          indexes: ["B", 2],
          track: `adrrfmd`,
        },
      ],
      releases: ['Original EMI 1986 7"', '2010 "Singles collection 3" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `akom-ext`,
        },
        { index: "B", track: `adrrfmd-ext` },
      ],
      releases: 'Original EMI 1986 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `akom`,
        },
        {
          index: "B",
          track: `gtp`,
        },
      ],
      releases: `Original Capitol 1986 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `akom-ext`,
        },
        {
          index: "B",
          track: `gtp`,
        },
      ],
      releases: `Original Capitol 1986 12"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `akom`,
        },
        {
          index: "B",
          track: `akom`,
        },
      ],
      releases: [
        `Capitol promo 7"`,
        'Mexican promo 7"',
        'Argentinian promo 7"',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `akom`,
        },
        {
          index: "B",
          track: `akom-ext`,
        },
      ],
      releases: `Capitol promo 12"`,
    },
    {
      tracks: [
        {
          track: `akom`,
        },
        {
          track: `adrrfmd`,
        },
        {
          track: `ov-edit`,
        },
      ],
      releases: `1988/91 3"CDs`,
    },
  ],
};

export default data;
