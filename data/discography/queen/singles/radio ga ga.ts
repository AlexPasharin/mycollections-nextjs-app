import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Radio Ga Ga`,
  discogs_url: "https://www.discogs.com/master/14672-Queen-Radio-Ga-Ga",
  tracks: [
    {
      name: `Radio Ga Ga`,
      versions: [
        {
          id: `rgg`,
          releases: `not 12", Capitol releases or Japanese promo 7"`,
        },
        {
          id: `rgg-ext`,
          releases:
            '12" releases, except Capitol Records promo and cassette releases',
        },
        {
          id: `rgg-instru`,
          releases:
            '12" releases, except Capitol Records promo and cassette releases',
        },
        {
          id: `rgg-capitol-edit`,
          releases: 'Capitol 7" releases, Capitol promo 12", Japanese promo 7"',
        },
        {
          id: `rgg-jap-promo-edit`,
          releases: 'Japanese promo 7"',
        },
      ],
    },
    {
      name: `I Go Crazy`,
      versions: [
        {
          id: `igc`,
          releases: `not Capitol promo 7"/12"s, Japanese promo 7" or 2021  "The Greatest Pop-up store" 7"`,
        },
      ],
    },
    {
      name: `Hammer To Fall`,
      versions: [{ id: `htf-edit`, releases: `1988/91 3"CDs` }],
    },
    {
      name: `I'm In Love With My Car`,
      versions: [
        { id: `iilwmc`, releases: `2021  "The Greatest Pop-up store" 7"` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `rgg`,
        },
        {
          indexes: ["B", 2],
          track: `igc`,
        },
      ],
      releases: ['Original 1984 EMI 7"', '2009 "Singles collection 2" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `rgg-ext`,
        },
        { index: "B1", track: `rgg-instru` },
        { index: "B2", track: `igc` },
      ],
      releases: ['Original 1984 12"', "Dutch cassette"],
    },
    {
      tracks: [
        {
          index: "A",
          track: `rgg-capitol-edit`,
        },
        { index: "B", track: `igc` },
      ],
      releases: 'Original 1984 Capitol 7"',
    },
    {
      tracks: [
        {
          index: "A1",
          track: `rgg-ext`,
        },
        { index: "A2", track: `rgg-instru` },
        { index: "A3", track: `igc` },
        {
          index: "B1",
          track: `rgg-ext`,
        },
        { index: "B2", track: `rgg-instru` },
        { index: "B3", track: `igc` },
      ],
      releases: "Capitol cassette",
    },
    {
      tracks: [
        {
          index: "A",
          track: `rgg-capitol-edit`,
        },
        { index: "B", track: `rgg-capitol-edit` },
      ],
      releases: ['Capitol promo 7"', 'Capitol promo 12"'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `rgg-capitol-edit`,
        },
        { index: "B", track: `rgg-jap-promo-edit` },
      ],
      releases: 'Japanese promo 7"',
    },
    {
      tracks: [
        {
          track: `rgg`,
        },
        {
          track: `igc`,
        },
        {
          track: `htf-edit`,
        },
      ],
      releases: `1988/91 3"CDs`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `rgg`,
        },
        { index: "B", track: `iilwmc` },
      ],
      releases: `2021  "The Greatest Pop-up store" 7"`,
    },
  ],
};

export default data;
