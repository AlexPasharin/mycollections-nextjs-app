import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Too Much Love Will Kill You`,
  discogs_url:
    "https://www.discogs.com/master/123597-Queen-Too-Much-Love-Will-Kill-You",
  releaseDate: "1995.12.05",
  tracks: [
    {
      name: `Too Much Love Will Kill You`,
      versions: [
        { id: `queen-tmlwky` },
        { id: `queen-tmlwky-edit`, releases: `1995 US and 1996 UK promo CDs` },
      ],
    },
    {
      name: `Impromptu`,
      versions: [
        { id: `rio-blues-us`, releases: `US releases, except for promo CD` },
      ],
    },
    {
      name: `We Will Rock You`,
      versions: [
        {
          id: `wwry`,
          releases: `UK pink 7", European 4-track CD and UK cassette`,
        },
      ],
    },
    {
      name: `We Are The Champions`,
      versions: [
        {
          id: `watc`,
          releases: `UK 7" (pink vinyl and jukebox), European 4-track CD and UK cassette`,
        },
      ],
    },
    {
      name: `Spread Your Wings`,
      versions: [
        {
          id: `syw`,
          releases: `European 4-track CD and Dutch 1996 2-track CD`,
        },
      ],
    },
    {
      name: `I Was Born To Love You`,
      versions: [
        { id: `queen-iwbtly`, releases: `2010 "Singles collection 4" CD` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `queen-tmlwky`,
        },
        {
          track: `rio-blues-us`,
        },
      ],
      releases: `Original US 1995 CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `queen-tmlwky`,
        },
        {
          index: "A2",
          track: `rio-blues-us`,
        },
        {
          index: "B1",
          track: `queen-tmlwky`,
        },
        {
          index: "B2",
          track: `rio-blues-us`,
        },
      ],
      releases: `US 1995 cassette`,
    },
    {
      tracks: [
        {
          track: `queen-tmlwky-edit`,
        },
        {
          track: `queen-tmlwky`,
        },
      ],
      releases: `US 1995 promo CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `queen-tmlwky`,
        },
        {
          index: "B1",
          track: `wwry`,
        },
        {
          index: "B2",
          track: `watc`,
        },
      ],
      releases: `Original 1996 UK pink 7"`,
    },
    {
      tracks: [
        {
          track: `queen-tmlwky`,
        },
        {
          track: `syw`,
        },
        {
          track: `wwry`,
        },
        {
          track: `watc`,
        },
      ],
      releases: [`Original 1996 UK CD`, `European 1996 4-track CD`],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `queen-tmlwky`,
        },
        {
          index: "A2",
          track: `wwry`,
        },
        {
          index: "A3",
          track: `watc`,
        },
        {
          index: "B1",
          track: `queen-tmlwky`,
        },
        {
          index: "B2",
          track: `wwry`,
        },
        {
          index: "B3",
          track: `watc`,
        },
      ],
      releases: `1996 UK cassette`,
    },
    {
      tracks: [
        {
          track: `queen-tmlwky-edit`,
        },
        {
          track: `queen-tmlwky`,
        },
        {
          track: `wwry`,
        },
        {
          track: `watc`,
        },
      ],
      releases: `1996 UK promo CD`,
    },
    {
      tracks: [
        {
          track: `queen-tmlwky`,
        },
        {
          track: `syw`,
        },
      ],
      releases: `Dutch 1996 2-track CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `queen-tmlwky`,
        },
        {
          index: "B",
          track: `watc`,
        },
      ],
      releases: `1996 UK jukebox 7"`,
    },
    {
      tracks: [
        {
          track: `queen-tmlwky`,
        },
        {
          track: `queen-iwbtly`,
        },
      ],
      releases: `2010 "Singles collection 4" CD`,
    },
  ],
};

export default data;
