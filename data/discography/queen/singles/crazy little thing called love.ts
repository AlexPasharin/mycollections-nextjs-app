import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Crazy Little Thing Called Love`,
  discogs_url:
    "https://www.discogs.com/master/7224-Queen-Crazy-Little-Thing-Called-Love",
  tracks: [
    {
      name: `Crazy Little Thing Called Love`,
      versions: [
        { id: `cltcl`, releases: 'not Polish flexi 7"' },
        { id: `cltcl-mono`, releases: 'Electra promo 7"' },
      ],
    },
    {
      name: `We Will Rock You`,
      versions: [
        {
          id: `wwry-lk-fast-stand-along`,
          releases: `not Electra releases, Colombian 12", Polish flexi 7" or 1988/91 3"CDs`,
        },
        {
          id: `wwry-lk-fast-stand-along-mono`,
          releases: `Polish flexi 7"`,
        },
      ],
    },
    {
      name: `Spread Your Wings`,
      versions: [
        {
          id: `syw-lk-stand-along`,
          releases: `1979 Electra 7", except for Japan`,
        },
        { id: `syw-lk-jap-stand-along`, releases: `1979 Japanese 7"` },
        { id: "syw", releases: '1988/91 3"CDs' },
      ],
    },
    {
      name: `Bicycle Race`,
      versions: [
        { id: `br-ext`, releases: `Colombian 12"` },
        { id: `br`, releases: `1983 "Spun Cold" series 7"` },
      ],
    },
    {
      name: `Play The Game`,
      versions: [{ id: `ptg`, releases: `Canadian "Gold Standard" 7"` }],
    },
    {
      name: `Flash's Theme`,
      versions: [{ id: `ft-single-edit`, releases: `1988/91 3"CDs` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `cltcl`,
        },
        {
          indexes: ["B", 2],
          track: `wwry-lk-fast-stand-along`,
        },
      ],
      releases: [
        'Original EMI 1979 7"',
        'German 12"',
        'Venezuelian 12"',
        '2009 "Singles collection 2" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `cltcl`,
        },
        { index: "B", track: `syw-lk-stand-along` },
      ],
      releases: `1979 Electra 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `cltcl`,
        },
        { index: "B", track: `syw-lk-jap-stand-along` },
      ],
      releases: `1979 Japanese 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `cltcl`,
        },
        { index: "A", track: `cltcl-mono` },
      ],
      releases: `Electra promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `cltcl`,
        },
        { index: "B", track: `br-ext` },
      ],
      releases: `Colombian 12"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `cltcl-mono`,
        },
        { index: "B", track: `wwry-lk-fast-stand-along-mono` },
      ],
      releases: `Polish flexi 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `cltcl`,
        },
        { index: "B", track: `br` },
      ],
      releases: `1983 "Spun Cold" series 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `cltcl`,
        },
        { index: "B", track: `ptg` },
      ],
      releases: `Canadian "Gold Standard" 7"`,
    },
    {
      tracks: [
        {
          track: `cltcl`,
        },
        {
          track: `syw`,
        },
        {
          track: `ft-single-edit`,
        },
      ],
      releases: '1988/91 3"CDs',
    },
  ],
};

export default data;
