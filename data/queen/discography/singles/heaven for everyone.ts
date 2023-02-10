import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Heaven For Everyone`,
  discogs_url: "https://www.discogs.com/master/20325-Queen-Heaven-For-Everyone",
  releaseDate: "1995.10.23",
  tracks: [
    {
      name: `Heaven For Everyone`,
      versions: [
        {
          id: `queen-hfe-edit`,
          releases: `not US promo CD, Virgin one-sided promo 12" or Swiss 1999 promo CD ROM`,
        },
        {
          id: `queen-hfe`,
          releases: `UK "part 1" CD, UK jukebox 7",  New Zealand cassette, US promo CD (except misprint one), Virgin one-sided promo 12" and Swiss 1999 promo CD ROM`,
        },
        {
          id: `queen-hfe-swiss-promo-video`,
          releases: `Swiss 1999 promo CD ROM`,
        },
      ],
    },
    {
      name: `It's A Beautiful Day`,
      versions: [
        {
          id: `iabd-full`,
          releases: `UK "part 1" CD, cassette releases (except for US), Dutch cardboard sleeve 2-track CD and 2010 "Singles collection 4" CD`,
        },
      ],
    },
    {
      name: `Keep Yourself Alive`,
      versions: [
        {
          id: `kya`,
          releases: `UK "part 2" CD, European 4-track CD, Australian CD and Japanese CD`,
        },
      ],
    },
    {
      name: `Seven Seas Of Rhye`,
      versions: [
        {
          id: `ssor`,
          releases: `UK "part 2" CD, European 4-track CD, Australian CD and Japanese CD`,
        },
      ],
    },
    {
      name: `Killer Queen`,
      versions: [
        {
          id: `kq`,
          releases: `UK "part 2" CD, European 4-track CD and Australian CD`,
        },
      ],
    },
    {
      name: `Soul Brother`,
      versions: [{ id: `sb-inverted`, releases: `US CD and cassette` }],
    },
    {
      name: `Made In Heaven`,
      versions: [{ id: `queen-mih`, releases: `US misprint promo CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `queen-hfe-edit`,
        },
        {
          track: `iabd-full`,
        },
        {
          track: `queen-hfe`,
        },
      ],
      releases: `Original 1995 UK "part 1" CD`,
    },
    {
      tracks: [
        {
          track: `queen-hfe-edit`,
        },
        {
          track: `kya`,
        },
        {
          track: `ssor`,
        },
        {
          track: `kq`,
        },
      ],
      releases: [
        `Original 1995 UK "part 2" CD`,
        "1995 European 4-track CD",
        "1995 Australian 4-track CD",
      ],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `queen-hfe-edit`,
        },
        {
          index: "A2",
          track: `iabd-full`,
        },
        {
          index: "B1",
          track: `queen-hfe-edit`,
        },
        {
          index: "B2",
          track: `iabd-full`,
        },
      ],
      releases: [`1995 UK cassette`, "1995 Australian cassette"],
    },
    {
      tracks: [
        {
          index: "A",
          track: `queen-hfe-edit`,
        },

        {
          index: "B",
          track: `queen-hfe`,
        },
      ],
      releases: `1995 UK jukebox 7"`,
    },
    {
      tracks: [
        {
          track: `queen-hfe-edit`,
        },
        {
          track: `iabd-full`,
        },
      ],
      releases: [
        `1995 Dutch cardboard sleeve 2-track CD`,
        `2010 "Singles collection 4" CD`,
      ],
    },
    {
      tracks: [
        {
          track: `queen-hfe-edit`,
        },
        {
          track: `kya`,
        },
        {
          track: `ssor`,
        },
      ],
      releases: `1995 Japanese CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `queen-hfe-edit`,
        },
        {
          index: "A2",
          track: `iabd-full`,
        },
        {
          index: "A3",
          track: `queen-hfe`,
        },
        {
          index: "B1",
          track: `queen-hfe-edit`,
        },
        {
          index: "B2",
          track: `iabd-full`,
        },
        {
          index: "B3",
          track: `queen-hfe`,
        },
      ],
      releases: "1995 New Zealand cassette",
    },
    {
      tracks: [
        {
          track: `queen-hfe-edit`,
        },
      ],
      releases: `1995 UK promo CD`,
    },
    {
      tracks: [
        {
          track: `queen-hfe-edit`,
        },
        {
          track: `sb-inverted`,
        },
      ],
      releases: `1996 US CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `queen-hfe-edit`,
        },
        {
          index: "A2",
          track: `sb-inverted`,
        },
        {
          index: "B1",
          track: `queen-hfe-edit`,
        },
        {
          index: "B2",
          track: `sb-inverted`,
        },
      ],
      releases: `1996 US cassette`,
    },
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `queen-hfe`,
        },
      ],
      releases: ["1996 US promo CD", `1996 Virgin one-sided promo 12"`],
    },
    {
      tracks: [
        {
          track: `queen-mih`,
        },
      ],
      releases: "1996 US misprint promo CD",
    },
    {
      tracks: [
        {
          track: `queen-hfe`,
        },
        {
          track: `queen-hfe-swiss-promo-video`,
        },
      ],
      releases: "1999 Swiss promo CD ROM",
    },
  ],
};

export default data;
