import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Another One Bites The Dust (1998 Wyclef Jean Remix)`,
  artist: "Queen / Wyclef Jean Featuring Pras & Free",
  discogs_url:
    "https://www.discogs.com/master/26337-Queen-Wyclef-Jean-Featuring-Pras-Free-Another-One-Bites-The-Dust",
  releaseDate: "1998.11.14",
  tracks: [
    {
      name: `Another One Bites The Dust`,
      versions: [
        { id: `aobtd-small-soldiers`, releases: `not EU 2-track CD` },
        {
          id: `aobtd-small-soldiers-instr`,
          releases: `European (non-UK) releases, except for EU 2-track CD, Mexican CD, all US releases`,
        },
        {
          id: `aobtd-small-soldiers-edit`,
          releases: `EU 2-track CD, Italian 12", US promo CD and US promo 4-track 12"`,
        },
        {
          id: `aobtd-small-soldiers-video-mix`,
          releases: `European 7-track 12" releases, US CD and US promo 7-track 12"`,
        },
        {
          id: `aobtd-black-rock-star`,
          releases: `UK releases, except for 1-track promo CD, European 7-track 12" releases, US CD and US promo 7-track 12"`,
        },
        {
          id: `aobtd-black-rock-star-edit`,
          releases: `UK CD and 12", European and US 7-track 12" releases`,
        },
        {
          id: `aobtd-black-rock-star-acapella`,
          releases: `Italian 12", European 7-track 12" releases, US promo CD, US promo 12" releases`,
        },
        {
          id: `aobtd-black-rock-star-instr`,
          releases: `European and US 7-track 12" releases and US CD`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        { indexes: [1, "A1"], track: `aobtd-small-soldiers` },

        {
          indexes: [2, "B1"],
          track: `aobtd-black-rock-star`,
        },
        {
          indexes: [3, "B2"],
          track: `aobtd-black-rock-star-edit`,
        },
      ],
      releases: [`Original 1998 UK 12"`, `Original 1998 UK CD`],
    },
    {
      tracks: [
        { index: "A1", track: `aobtd-small-soldiers` },

        {
          index: "A2",
          track: `aobtd-black-rock-star`,
        },
        { index: "B1", track: `aobtd-small-soldiers` },

        {
          index: "B2",
          track: `aobtd-black-rock-star`,
        },
      ],
      releases: `Original 1998 UK cassette`,
    },
    {
      tracks: [{ track: `aobtd-small-soldiers` }],
      releases: `UK promo CD`,
    },
    {
      tracks: [
        { indexes: [1, "A1"], track: `aobtd-small-soldiers` },

        {
          indexes: [2, "B1"],
          artist: "Gary Glitter",
          track: "Rock And Roll Part 2",
          foreign_artist: true,
        },
        {
          indexes: [3, "B2"],
          track: `aobtd-small-soldiers-instr`,
        },
      ],
      releases: [
        `Original 1998 EU 3-track 12"`,
        `Original 1998 EU 3-track CD`,
        `Mexican CD`,
      ],
    },
    {
      tracks: [
        { track: `aobtd-small-soldiers-edit` },
        { track: `aobtd-small-soldiers-instr` },
      ],
      releases: `Original 1998 EU 2-track CD`,
    },
    {
      tracks: [
        { index: "A", track: `aobtd-small-soldiers` },

        {
          index: "B",
          artist: "Gary Glitter",
          track: "Rock And Roll Part 2",
          foreign_artist: true,
        },
      ],
      releases: `Original 1998 EU 2-track 12"`,
    },
    {
      tracks: [
        { indexes: [1, "A1"], track: `aobtd-small-soldiers-edit` },

        {
          indexes: [2, "A2"],
          track: `aobtd-small-soldiers`,
        },
        {
          indexes: [3, "B1"],
          track: `aobtd-small-soldiers-instr`,
        },
        {
          indexes: [4, "B2"],
          track: `aobtd-black-rock-star-acapella`,
        },
      ],
      releases: [
        `Original 1998 Italian 4-track 12"`,
        `US promo CD`,
        `US promo 4-track 12"`,
      ],
    },
    {
      tracks: [
        { index: "A1", track: `aobtd-small-soldiers` },
        {
          index: "A2",
          track: `aobtd-small-soldiers-video-mix`,
        },
        { index: "A3", track: `aobtd-small-soldiers-instr` },
        {
          index: "A4",
          track: `aobtd-black-rock-star-acapella`,
        },
        { index: "B1", track: `aobtd-black-rock-star` },
        {
          index: "B2",
          track: `aobtd-black-rock-star-edit`,
        },
        {
          index: "B3",
          track: `aobtd-black-rock-star-instr`,
        },
      ],
      releases: [
        `Original 1998 Italian 7-track 12"`,
        `Original 1998 Spanish 12"`,
        `US promo 7-track 12"`,
      ],
    },
    {
      tracks: [
        {
          track: `aobtd-small-soldiers-video-mix`,
        },
        { track: `aobtd-small-soldiers` },

        { track: `aobtd-black-rock-star` },
        { track: `aobtd-small-soldiers-instr` },
        { track: `aobtd-black-rock-star-instr` },
      ],
      releases: `Original 1998 US CD`,
    },
  ],
};

export default data;
