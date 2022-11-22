import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `We Are The Champions`,
  discogs_url: "https://www.discogs.com/master/6649-Queen-We-Are-The-Champions",
  tracks: [
    {
      name: `We Are The Champions`,
      versions: [
        { id: `watc`, releases: 'not UK mispress promo 7"' },
        { id: `watc-mono`, releases: 'Electra 1977 promo 7" and 12"' },
      ],
    },
    {
      name: `We Will Rock You`,
      versions: [
        {
          id: `wwry`,
          releases:
            'notElectra 1977 promo 7", Polish 1 track flexi 7", US 1992 7", 1994 European CDs or 2006 download',
        },
        { id: "wwry-mono", releases: 'Electra 1977 promo 12"' },
        { id: "wwry-ruined", releases: "US 1992 promo CD" },
      ],
    },
    {
      name: `Fat Bottomed Girls`,
      versions: [
        { id: `fbg-single-edit`, releases: 'UK 1988 and Japanese 1991 3"CDs' },
      ],
    },
    {
      name: `These Are The Days Of Our Lives`,
      versions: [{ id: `tatdool`, releases: 'US 1992 7" and cassette' }],
    },
    {
      name: `Friends Will Be Friends`,
      versions: [
        {
          id: `fwbf`,
          releases: "European 1994 CD singles (except for Dutch mispress CD)",
        },
      ],
    },
    {
      name: `A Kind Of Magic`,
      versions: [{ id: `akom`, releases: "1994 Dutch mispress CD" }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "watc",
        },
        {
          indexes: ["B", 2],
          track: "wwry",
        },
      ],
      releases: [
        'Original 1977 7"',
        '1979 Electra Spun Gold series 7"',
        'Canadian Gold Standard series 7"',
        '2008 "Singles collection 1" CD single',
        "1996 Dutch CD",
        "1996 French CD",
        "2007 UK promo CD",
        '2017 UK Record Store Day 12"',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: "wwry",
        },
        { index: "B", track: "wwry" },
      ],
      releases: 'UK mispress promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "watc",
        },
        { index: "A", track: "watc-mono" },
      ],
      releases: 'Electra 1977 promo 7"',
    },
    {
      tracks: [
        {
          index: "A1",
          track: "wwry",
        },
        {
          index: "A2",
          track: "watc",
        },
        {
          index: "B1",
          track: "wwry-mono",
        },
        {
          index: "B2",
          track: "watc-mono",
        },
      ],
      releases: 'Electra 1977 promo 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "watc",
        },
      ],
      releases: 'Polish 1 track flexi 7"',
    },
    {
      tracks: [
        {
          track: "watc",
        },
        {
          track: "wwry",
        },
        {
          track: "fbg-single-edit",
        },
      ],
      releases: ['UK 1988 3"CD', 'Japanese 1991 3"CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: "watc",
        },
        { index: "B", track: "tatdool" },
      ],
      releases: 'US 1992 7"',
    },
    {
      tracks: [
        {
          index: "A1",
          track: "watc",
        },
        {
          index: "A2",
          track: ["wwry", "watc"],
        },
        { index: "B", track: "tatdool" },
      ],
      releases: "US 1992 cassette",
    },
    {
      tracks: [
        {
          track: "watc",
        },
        {
          track: ["wwry", "watc"],
        },
        {
          track: "wwry-ruined",
        },
      ],
      releases: "US 1992 promo CD",
    },
  ],
};

export default data;
