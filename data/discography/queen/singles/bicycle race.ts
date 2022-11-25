import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Bicycle Race`,
  discogs_url: "",
  tracks: [
    {
      name: `Bicycle Race`,
      versions: [
        { id: `br`, releases: `not Electra promo 12"` },
        { id: `br-mono`, releases: `Electra promo 7"` },
        {
          id: `br-fbg-promo-segue`,
          releases: 'Electra promo 12"',
        },
        {
          id: `fbg-br-promo-segue`,
          releases: 'Electra promo 12"',
        },
      ],
    },
    {
      name: `Fat Bottomed Girls`,
      versions: [
        {
          id: `fbg-single-edit`,
          releases: `not Electra promo 7" / 12" promos, Polish 7" or Yugoslavian 7"`,
        },
        { id: "fbg", releases: 'Yugoslavian 7"' },
      ],
    },
    {
      name: `Spread Your Wings`,
      versions: [{ id: `syw`, releases: `Polish 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "br",
        },
        {
          indexes: ["B", 2],
          track: "fbg-single-edit",
        },
      ],
      releases: [
        'Original EMI 1978 7"',
        '2008 "Singles collection 1" CD single',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: "br",
        },
        { index: "A", track: "br-mono" },
      ],
      releases: 'Electra 1978 promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "br",
        },
        { index: "B", track: "fbg" },
      ],
      releases: 'Yugoslavian 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "br",
        },
        { index: "B", track: "syw" },
      ],
      releases: 'Polish 7"',
    },
    {
      tracks: [
        {
          index: "X",
          track: "fbg-br-promo-segue",
        },
        { index: "Y", track: "br-fbg-promo-segue" },
      ],
      releases: 'Electra promo 12"',
    },
  ],
};

export default data;
