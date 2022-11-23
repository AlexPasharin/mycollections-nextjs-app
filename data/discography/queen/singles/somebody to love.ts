import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Somebody To Love",
  discogs_url: "https://www.discogs.com/Queen-Somebody-To-Love/master/6192",
  tracks: [
    {
      name: "Somebody To Love",
      versions: [
        { id: "stl" },
        { id: "stl-mono", releases: 'Electra 1976 promo 7"' },
      ],
    },
    {
      name: "White Man",
      versions: [
        {
          id: "wm",
          releases:
            'not Electra 1976 promo 7" or Polish 1977 7"/1980 one sided flexi 7"',
        },
      ],
    },
    {
      name: "Long Away",
      versions: [{ id: "la", releases: 'Polish 1977 7"' }],
    },
    {
      name: "Tie Your Mother Down",
      versions: [
        { id: "tymd", releases: 'UK 1988 3"CD' },
        { id: "tymd-stand-along", releases: 'Japanese 1991 3"CD' },
      ],
    },
    {
      name: "You Take My Breath Away",
      versions: [
        { id: "ytmba", releases: '2021 "The Greatest Pop-up store" 7"' },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "stl",
        },
        {
          indexes: ["B", 2],
          track: "wm",
        },
      ],
      releases: ['Original 1976 7"', '2008 "Singles collection 1" CD single'],
    },
    {
      tracks: [
        {
          index: "A",
          track: "stl",
        },
        { index: "A", track: "stl-mono" },
      ],
      releases: 'Electra 1976 promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "stl",
        },
        { index: "B", track: "la" },
      ],
      releases: 'Polish 1977 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "stl",
        },
      ],
      releases: 'Polish 1980 one-sided flexi 7"',
    },
    {
      tracks: [
        {
          track: "stl",
        },
        {
          track: "wm",
        },
        {
          track: "tymd",
          comment: "full album version with intro",
        },
      ],
      releases: 'UK 1988 3"CD',
    },
    {
      tracks: [
        {
          track: "stl",
        },
        {
          track: "wm",
        },
        {
          track: "tymd-stand-along",
        },
      ],
      releases: 'Japanese 1991 3"CD',
    },
    {
      tracks: [
        {
          index: "A",
          track: "stl",
        },
        { index: "B", track: "ytmba" },
      ],
      releases: '2021 "The Greatest Pop-up store" 7"',
    },
  ],
};

export default data;
