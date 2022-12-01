import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Save Me`,
  discogs_url: "https://www.discogs.com/master/12906-Queen-Save-Me",
  tracks: [
    {
      name: `Save Me`,
      versions: [
        { id: `sm-single-mix`, releases: `not 2009 "Singles collection 2" CD` },
        { id: `sm`, releases: '2009 "Singles collection 2" CD' },
      ],
    },
    {
      name: `Let Me Entertain You`,
      versions: [
        {
          id: `lmey-lk-emi-stand-along`,
          releases: `not Electra releases, Polish 1-track flexi 7" or Guatemala 7"`,
        },
      ],
    },
    {
      name: `Sheer Heart Attack`,
      versions: [
        {
          id: `sha-lk`,
          releases: `Electra releases, except for Canadian promo 7"`,
        },
      ],
    },
    {
      name: `Bicycle Race`,
      versions: [{ id: `br`, releases: `Guatemala 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `sm-single-mix`,
        },
        {
          index: "B",
          track: `lmey-lk-emi-stand-along`,
        },
      ],
      releases: 'Original EMI 1980 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `sm-single-mix`,
        },
        {
          index: "B",
          track: `sha-lk`,
        },
      ],
      releases: 'Original Electra 1980 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `sm-single-mix`,
        },
        {
          index: "A",
          track: `sm-single-mix`,
        },
      ],
      releases: 'Canadian promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `sm-single-mix`,
        },
        {
          index: "B",
          track: `br`,
        },
      ],
      releases: `Guatemala 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `sm-single-mix`,
        },
      ],
      releases: 'Polish 1-track flexi 7"',
    },
    {
      tracks: [
        {
          track: `sm`,
        },
        {
          track: `lmey-lk-emi-stand-along`,
        },
      ],
      releases: `2009 "Singles collection 2" CD`,
    },
  ],
};

export default data;
