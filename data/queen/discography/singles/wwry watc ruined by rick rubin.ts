import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `We Will Rock You and We Are The Champions Ruined By Rick Rubin`,
  discogs_url:
    "https://www.discogs.com/master/36418-Queen-We-Will-Rock-You-We-Are-The-Champions",
  tracks: [
    {
      name: `We Will Rock You`,
      versions: [
        { id: "wwry-ruined", releases: `not promo 12"` },
        {
          id: "wwry-ruined-promo",
          releases: `promo 12"`,
        },
        { id: "wwry-ruined-instr", releases: `not French 1997 promo CD` },
        {
          id: "wwry-ruined-bb",
          releases: `not French 1997 promo CD`,
        },
        {
          id: "wwry-ruined-zulu",
          releases: `not French 1997 promo CD`,
        },
        { id: "wwry-ruined-effects-instr", releases: `promo 12"` },
        { id: "wwry-ruined-clap", releases: `promo 12"` },
        { id: "wwry-ruined-effects-acapella", releases: `promo 12"` },
        {
          id: "wwry-ruined-edit",
          releases: `French 1997 promo CD`,
        },
      ],
    },
    {
      name: `We Are The Champions`,
      versions: [{ id: `watc-ruined`, releases: `not French 1997 promo CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: [1, "A1"],
          track: "wwry-ruined",
        },
        {
          indexes: [2, "A2"],
          track: "wwry-ruined-instr",
        },
        {
          indexes: [3, "B1"],
          track: `watc-ruined`,
        },
        {
          indexes: [4, "B2"],
          track: "wwry-ruined-bb",
        },
        {
          indexes: [5, "B3"],
          track: "wwry-ruined-zulu",
        },
      ],
      releases: ["Original 1991 CD", "Original 1991 cassette"],
    },
    {
      tracks: [
        {
          index: "A1",
          track: "wwry-ruined-promo",
        },
        {
          index: "A2",
          track: "wwry-ruined-instr",
        },
        {
          index: "A3",
          track: "wwry-ruined-effects-instr",
        },
        {
          index: "B1",
          track: `watc-ruined`,
        },
        {
          index: "B2",
          track: "wwry-ruined-clap",
        },
        {
          index: "B3",
          track: "wwry-ruined-bb",
        },
        {
          index: "B4",
          track: "wwry-ruined-effects-acapella",
        },
        {
          index: "B5",
          track: "wwry-ruined-zulu",
        },
      ],
      releases: 'promo 12"',
    },
    {
      tracks: [
        {
          track: "wwry-ruined-edit",
        },
        {
          track: "wwry-ruined",
        },
      ],
      releases: `French 1997 promo CD`,
    },
  ],
};

export default data;
