import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `I Want It All`,
  discogs_url: "https://www.discogs.com/master/18479-Queen-I-Want-It-All",
  tracks: [
    {
      name: `I Want It All`,
      versions: [
        { id: `iwia-edit`, releases: `not French promo CD` },
        {
          id: `iwia`,
          releases: `12" releases, CD releases except for 3"CDs, UK promo CD or '2010 "Singles collection 3" CD, UK cassette and Argentinian cassette`,
        },
      ],
    },
    {
      name: `Hang On In There`,
      versions: [
        {
          id: `hoit-original`,
          releases: `not UK promo CD, US promo 7", French promo CD, Mexican promo 7", Brazilian promo 12" or '2010 "Singles collection 3" CD`,
        },
        { id: `hoit`, releases: `'2010 "Singles collection 3" CD` },
      ],
    },
    {
      name: `Under Pressure`,
      versions: [{ id: `up`, releases: `French promo CD` }],
    },
    {
      name: `The Invisible Man`,
      versions: [{ id: `tim`, releases: `Mexican promo 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `iwia-edit`,
        },
        {
          indexes: ["B", 2],
          track: `hoit-original`,
        },
      ],
      releases: ['Original 1989 7"', 'Austrian 3"CD', 'Japanese 3"CD'],
    },
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `iwia`,
        },
        {
          indexes: ["B1", 1],
          track: `iwia-edit`,
        },
        {
          indexes: ["B2", 2],
          track: `hoit-original`,
        },
      ],
      releases: ['Original 1989 12"', "German CD", "Argentinian cassette"],
    },
    {
      tracks: [
        {
          track: `iwia`,
        },
        {
          track: `hoit-original`,
        },
        {
          track: `iwia-edit`,
        },
      ],
      releases: `Original 1989 CD (except for Germany and 3"CD releases)`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `iwia`,
        },
        { index: "A2", track: `hoit-original` },
        { index: "A3", track: `iwia-edit` },
        {
          index: "B1",
          track: `iwia`,
        },
        { index: "B2", track: `hoit-original` },
        { index: "B3", track: `iwia-edit` },
      ],
      releases: "UK cassette",
    },
    {
      tracks: [
        {
          index: "A1",
          track: `iwia-edit`,
        },
        { index: "A2", track: `hoit-original` },
        {
          index: "B1",
          track: `iwia-edit`,
        },
        { index: "B2", track: `hoit-original` },
      ],
      releases: ["US cassette", "Australian cassette"],
    },
    {
      tracks: [
        {
          track: `iwia-edit`,
        },
      ],
      releases: `UK promo CD`,
    },
    {
      tracks: [
        { index: "A", track: `iwia-edit` },
        { index: "B", track: `iwia-edit` },
      ],
      releases: 'US promo 7"',
    },
    {
      tracks: [
        {
          track: `iwia`,
        },
        {
          track: `up`,
        },
      ],
      releases: `French promo CD`,
    },
    {
      tracks: [
        { index: "A", track: `iwia-edit` },
        { index: "B", track: `tim` },
      ],
      releases: `Mexican promo 7"`,
    },
    {
      tracks: [
        { index: "A", track: `iwia-edit` },
        { index: "B", track: `iwia` },
      ],
      releases: 'Brazilian promo 12"',
    },
    {
      tracks: [
        {
          track: `iwia-edit`,
        },
        {
          track: `hoit`,
        },
      ],
      releases: '2010 "Singles collection 3" CD',
    },
  ],
};

export default data;
