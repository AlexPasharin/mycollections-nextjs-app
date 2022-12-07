import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Headlong`,
  discogs_url: "https://www.discogs.com/master/19277-Queen-Headlong",
  tracks: [
    {
      name: `Headlong`,
      versions: [
        { id: `headlong-us-edit`, releases: `Hollywood Record releases` },
        {
          id: `headlong`,
          releases: `not Hollywood Record cassette or 2010 "Singles collection 4" CD`,
        },
        { id: `headlong-lp-edit`, releases: `2010 "Singles collection 4" CD` },
      ],
    },
    {
      name: `Under Pressure`,
      versions: [{ id: `up`, releases: `Hollywood Record releases` }],
    },
    {
      name: `All God's People`,
      versions: [
        {
          id: `agp`,
          releases: `not Hollywood Record, French, Japanese, Australasia releases or Dutch CD with clown picture sleeve`,
        },
      ],
    },
    {
      name: `Mad The Swine`,
      versions: [
        {
          id: `mts`,
          releases: `12" and CD releases, except for Hollywoord Record promo CD, French 12"/CD, Dutch CD with clown picture sleeve or 2010 "Singles collection 4" CD`,
        },
      ],
    },
    {
      name: `The Hitman`,
      versions: [
        {
          id: `th`,
          releases: `French and Australasia releases, Dutch CD with clown picture sleeve`,
        },
      ],
    },
    {
      name: `Lost Opportunity`,
      versions: [
        {
          id: `lo`,
          releases: `French, Australasia and Japanese 12"/CD releases, Dutch CD with clown picture sleeve`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A1",
          track: `headlong-us-edit`,
        },
        {
          index: "A2",
          track: `up`,
        },
        {
          index: "B1",
          track: `headlong-us-edit`,
        },
        {
          index: "B2",
          track: `up`,
        },
      ],
      releases: `Original 1991 Hollywoord Records cassette`,
    },
    {
      tracks: [
        {
          track: `headlong-us-edit`,
        },
        {
          track: `headlong`,
        },
        {
          track: `up`,
        },
      ],
      releases: `Hollywood Records promo CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `headlong`,
        },
        {
          index: "B",
          track: `agp`,
        },
      ],
      releases: `Original 1991 Parlophone 7" (except for France and Australia)`,
    },
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `headlong`,
        },
        {
          indexes: ["B1", 2],
          track: `agp`,
        },
        {
          indexes: ["B2", 3],
          track: `mts`,
        },
      ],
      releases: [
        `Original 1991 Parlophone 12"`,
        `Original 1991 Parlophone CD (except for France and Holland)`,
        "Dutch CD (standard picture sleeve)",
      ],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `headlong`,
        },
        {
          index: "A2",
          track: `agp`,
        },
        {
          index: "B1",
          track: `headlong`,
        },
        {
          index: "B2",
          track: `agp`,
        },
      ],
      releases: `Original 1991 Parlophone cassette (except Australasia)`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `headlong`,
        },
        {
          index: "A2",
          track: `th`,
        },
      ],
      releases: ['French 7"', 'Australian 7"'],
    },
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `headlong`,
        },
        {
          indexes: ["B1", 2],
          track: `th`,
        },
        {
          indexes: ["B2", 3],
          track: `lo`,
        },
      ],
      releases: [
        `French promo 12"`,
        `French CD`,
        "Dutch CD (clown picture sleeve)",
      ],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `headlong`,
        },
        {
          index: "A2",
          track: `th`,
        },
        {
          index: "B1",
          track: `headlong`,
        },
        {
          index: "B2",
          track: `th`,
        },
      ],
      releases: `Australasia cassette`,
    },
    {
      tracks: [
        {
          track: `headlong`,
        },
        {
          track: `mts`,
        },
        {
          track: `lo`,
        },
      ],
      releases: `Japanese CD`,
    },
    {
      tracks: [
        {
          track: `headlong-lp-edit`,
        },
        {
          track: `agp`,
        },
      ],
      releases: `2010 "Singles collection 4" CD`,
    },
  ],
};

export default data;
