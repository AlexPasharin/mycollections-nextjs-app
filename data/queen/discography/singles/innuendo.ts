import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Innuendo`,
  discogs_url: "",
  tracks: [
    {
      name: `Innuendo`,
      versions: [
        {
          id: `innuendo`,
          releases: `not 12" or CD releases except for UK promo 12", US promo CD, Mexican promo 12" or 2010 "Singles collection 4" CD`,
        },
        {
          id: `innuendo-exp`,
          releases: `12" and CD releases except for UK promo 12", US promo CD, Mexican promo 12" or 2010 "Singles collection 4" CD`,
        },
      ],
    },
    {
      name: `Bijou`,
      versions: [
        {
          id: `bijou`,
          releases: `not UK promo 12", US promo CD or Mexican promo 12"`,
        },
      ],
    },
    {
      name: `Under Pressure`,
      versions: [
        {
          id: `up`,
          releases: `12" and CD releases except for UK promo 12", US promo CD, Mexican promo 12" or 2010 "Singles collection 4" CD`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `innuendo`,
        },
        {
          indexes: ["B", 2],
          track: `bijou`,
        },
      ],
      releases: ['Original 1991 7"', '2010 "Singles collection 4" CD'],
    },
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `innuendo`,
        },
        {
          indexes: ["B1", 2],
          track: `up`,
        },
        {
          indexes: ["B2", 3],
          track: `bijou`,
        },
      ],
      releases: [`Original 1991 12"`, `Original 1991 CD`],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `innuendo`,
        },
        {
          index: "A2",
          track: `bijou`,
        },
        {
          index: "B1",
          track: `innuendo`,
        },
        {
          index: "B2",
          track: `bijou`,
        },
      ],
      releases: `Original 1991 cassette`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `innuendo`,
        },
        {
          index: "A",
          track: `innuendo`,
        },
      ],
      releases: `UK promo 12"`,
    },
    {
      tracks: [
        {
          track: `innuendo`,
        },
      ],
      releases: `US promo CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `innuendo`,
        },
        {
          index: "A2",
          track: `bijou`,
        },
      ],
      releases: `German one-sided promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `innuendo`,
        },
        {
          index: "B",
          track: `innuendo`,
        },
      ],
      releases: `Mexican promo 12"`,
    },
  ],
};

export default data;
