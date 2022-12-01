import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `We Will Rock You (live)`,
  discogs_url: "https://www.discogs.com/master/7803-Queen-We-Will-Rock-You",
  tracks: [
    {
      name: `We Will Rock You`,
      versions: [
        {
          id: `wwry-lk-fast-stand-along`,
          releases: `not Japanese 7"`,
        },
        {
          id: `wwry-lk-fast-jap-stand-along`,
          releases: `Japanese 7"`,
        },
        { id: `wwry-lk-fast-stand-along-mono`, releases: "promo 7" },
      ],
    },
    {
      name: `Let Me Entertain You`,
      versions: [
        { id: `lmey-lk-electra-stand-along`, releases: `not promo 7"` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `wwry-lk-fast-stand-along`,
        },
        {
          index: "B",
          track: `lmey-lk-electra-stand-along`,
        },
      ],
      releases: `Original 1979 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `wwry-lk-fast-stand-along`,
        },
        {
          index: "A",
          track: `wwry-lk-fast-stand-along-mono`,
        },
      ],
      releases: `promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `wwry-lk-fast-jap-stand-along`,
        },
        {
          index: "B",
          track: `lmey-lk-electra-stand-along`,
        },
      ],
      releases: `Japanese 7"`,
    },
  ],
};

export default data;
