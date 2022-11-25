import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Love Of My Life (live)`,
  discogs_url: "https://www.discogs.com/master/264412-Queen-Love-Of-My-Life",
  tracks: [
    {
      name: `Love Of My Life`,
      versions: [
        {
          id: `loml-lk-stand-along`,
          releases: `not Japanese 7"`,
        },
        {
          id: `loml-lk-jap-stand-along`,
          releases: `Japanese 7"`,
        },
      ],
    },
    {
      name: `Now I'm Here`,
      versions: [
        {
          id: `nih-lk`,
          releases: `not Chile promo 7" or Polish 1-track flexi 7"`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "loml-lk-stand-along",
        },
        {
          indexes: ["B", 2],
          track: "nih-lk",
        },
      ],
      releases: ['Original EMI 1979 7"', '2009 "Singles collection 2" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `loml-lk-jap-stand-along`,
        },
        { index: "B", track: "nih-lk" },
      ],
      releases: `Japanese 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: "loml-lk-stand-along",
        },
        { index: "A", track: "loml-lk-stand-along" },
      ],
      releases: 'Chile promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "loml-lk-stand-along",
        },
      ],
      releases: `Polish 1-sided flexi 7"`,
    },
  ],
};

export default data;
