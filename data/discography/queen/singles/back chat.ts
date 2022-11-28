import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Back Chat`,
  discogs_url: "https://www.discogs.com/master/13509-Queen-Back-Chat",
  tracks: [
    {
      name: `Back Chat`,
      versions: [
        {
          id: `bc-remix`,
          releases: `most 7" releases, 2009 "Singles collection 2" CD`,
        },
        {
          id: `bc-ext`,
          releases: `12" releases`,
        },
        {
          id: `bc`,
          releases: `some 7" releases  (Canada, Brazil, Holland, Peru, Argentina)`,
        },
      ],
    },
    {
      name: `Staying Power`,
      versions: [
        {
          id: `sp`,
          releases: `not Japanese 7", Argentinian promo 7" or Mexican 12"`,
        },
      ],
    },
    {
      name: `Las Palabras De Amor`,
      versions: [{ id: `lpda`, releases: `Japanese 7"` }],
    },
    {
      name: `Calling All Girls`,
      versions: [{ id: `cag`, releases: `Mexican 12"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `bc-remix`,
        },
        {
          indexes: ["B", 2],
          track: `sp`,
        },
      ],
      releases: ['Original 1982 7"', '2009 "Singles collection 2" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `bc-ext`,
        },
        { index: "B", track: `sp` },
      ],
      releases: 'Original 1982 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `bc`,
        },
        { index: "B", track: `sp` },
      ],
      releases: `Some 7" releases (Canada, Brazil, Holland, Peru)`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `bc-remix`,
        },
        { index: "B", track: `lpda` },
      ],
      releases: `Japanese 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `bc`,
        },
        { index: "A", track: `bc` },
      ],
      releases: 'Argentinian promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `bc-ext`,
        },
        { index: "B", track: `cag` },
      ],
      releases: `Mexican 12"`,
    },
  ],
};

export default data;
