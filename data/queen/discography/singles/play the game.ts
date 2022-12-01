import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Play The Game`,
  discogs_url: "https://www.discogs.com/master/12751-Queen-Play-The-Game",
  tracks: [
    {
      name: `Play The Game`,
      versions: [
        { id: `ptg` },
        { id: `ptg-mono`, releases: 'Electra promo 7"' },
      ],
    },
    {
      name: `A Human Body`,
      versions: [
        {
          id: `ahb`,
          releases: `not French jukebox 7", Electra promo 7" or Polish 1-track flexi 7"`,
        },
      ],
    },
    {
      name: `Rock It`,
      versions: [{ id: `ri`, releases: `French jukebox 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `ptg`,
        },
        {
          indexes: ["B", 2],
          track: `ahb`,
        },
      ],
      releases: ['Original 1980 7"', '2009 "Singles collection 2" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `ptg`,
        },
        { index: "A", track: `ptg-mono` },
      ],
      releases: `Electra promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `ptg`,
        },
        { index: "B", track: `ri` },
      ],
      releases: `French jukebox 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `ptg`,
        },
      ],
      releases: `Polish 1-track flexi 7"`,
    },
  ],
};

export default data;
