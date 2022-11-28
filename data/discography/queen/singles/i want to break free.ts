import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `I Want To Break Free`,
  discogs_url:
    "https://www.discogs.com/master/14881-Queen-I-Want-To-Break-Free",
  tracks: [
    {
      name: `I Want To Break Free`,
      versions: [
        {
          id: `iwtbf-remix`,
          releases: `not 12" releases or some 7" releases (at least Spain, Portugal, Brazil and Argentinian promo)`,
        },
        {
          id: `iwtbf-ext`,
          releases: `12" releases`,
        },
        {
          id: `iwtbf-remix-edit`,
          releases: `Capitol promo 7"`,
        },
        {
          id: `iwtbf`,
          releases: `Some 7" releases (at least Spain, Portugal, Brazil and Argentinian promo)`,
        },
        {
          id: `iwtbf-video`,
          releases:
            "1986 German promo CD video single (which in reality is apparently hardly playable)",
        },
      ],
    },
    {
      name: `Machines`,
      versions: [
        {
          id: `machines`,
          releases: `not Capitol releases, some 7" releases (Mexican promo, Argentinian promo and Brazil) or 1986 German promo CD video single`,
        },
        {
          id: `machines-instru`,
          releases: `Capitol releases, except for promo 7" or promo 12"`,
        },
      ],
    },
    {
      name: `It's A Hard Life`,
      versions: [
        {
          id: `iahl`,
          releases: `Brazilian 7", 1986 German promo CD video single and 1988/91 3"CDs`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `iwtbf-remix`,
        },
        {
          indexes: ["B", 2],
          track: `machines`,
        },
      ],
      releases: [
        'Original 1984 EMI 7" (not Spain, Portugal or Brazil)',
        '2009 "Singles collection 2" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf-ext`,
        },
        { index: "B", track: `machines` },
      ],
      releases: 'Original 1984 EMI 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf-remix`,
        },
        { index: "B", track: `machines-instru` },
      ],
      releases: 'Original 1984 Capitol 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf-ext`,
        },
        { index: "B", track: `machines-instru` },
      ],
      releases: 'Original 1984 Capitol 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf-remix`,
        },
        { index: "B", track: `iwtbf-remix-edit` },
      ],
      releases: 'Capitol promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf-remix`,
        },
        { index: "B", track: `iwtbf-ext` },
      ],
      releases: 'Capitol promo 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf`,
        },
        { index: "B", track: `machines` },
      ],
      releases: ['Spanish 7"', 'Portugalian 7"'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf`,
        },
        { index: "B", track: `iahl` },
      ],
      releases: 'Brazil 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf-remix`,
        },
        { index: "B", track: `iwtbf-remix` },
      ],
      releases: 'Mexican promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `iwtbf`,
        },
        { index: "B", track: `iwtbf` },
      ],
      releases: 'Argentinian promo 7"',
    },
    {
      tracks: [
        {
          track: `iahl`,
        },
        {
          track: `iwtbf-remix`,
        },
        {
          track: `iwtbf-video`,
        },
      ],
      releases: `1986 German promo CD video single (which in reality is apparently hardly playable)`,
    },
    {
      tracks: [
        {
          track: `iwtbf-remix`,
        },
        {
          track: `machines`,
        },
        {
          track: `iahl`,
        },
      ],
      releases: `1988/91 3"CDs`,
    },
  ],
};

export default data;
