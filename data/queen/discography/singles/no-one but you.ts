import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `No-one But You (Only The Good Dies Young)`,
  discogs_url:
    "https://www.discogs.com/master/20392-Queen-No-One-But-You-Only-The-Good-Die-Young",
  releaseDate: "1997-12",
  tracks: [
    {
      name: `No-one But You`,
      versions: [{ id: `nby` }],
    },
    {
      name: `Princes Of The Universe`,
      versions: [
        {
          id: `potu`,
          releases: `1997 4-track CD releases and 1997 withdrawn UK 7"`,
        },
      ],
    },
    {
      name: `We Will Rock You`,
      versions: [
        {
          id: "wwry-ruined",
          releases: `1997 4-track CD releases, 1997 withdrawn UK 7", 1998 UK releases (except UK 2-track promo CD) and 2010 "Singles collection 4" CD`,
        },
        { id: `wwry`, releases: `UK jukebox 7"` },
      ],
    },
    {
      name: `Gimme The Prize`,
      versions: [
        {
          id: `gtp-eye-single`,
          releases: `not UK jukebox 7" or UK promo CDs (both 1997 and 1998)`,
        },
      ],
    },
    {
      name: `Tie Your Mother Down`,
      versions: [{ id: "tymd-stand-along", releases: `UK 1998 releases` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: [1, "A1"],
          track: `nby`,
        },
        {
          indexes: [2, "A2"],
          track: `potu`,
        },
        {
          indexes: [3, "B1"],
          track: "wwry-ruined",
        },
        {
          indexes: [4, "B2"],
          track: `gtp-eye-single`,
        },
      ],
      releases: [
        `Original 1997 Dutch 4-track CD`,
        `Original 1997 Japanese CD`,
        `Original 1997 UK withdrawn UK PD 7"`,
      ],
    },
    {
      tracks: [
        {
          track: `nby`,
        },
        {
          track: `gtp-eye-single`,
        },
      ],
      releases: `Original 1997 Dutch 2-track CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `nby`,
        },
        {
          index: "B",
          track: `wwry`,
        },
      ],
      releases: `UK jukebox 7"`,
    },
    {
      tracks: [
        {
          track: `nby`,
        },
      ],
      releases: `1997 UK promo CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `nby`,
        },
        {
          index: "A2",
          track: "wwry-ruined",
        },
        {
          index: "B1",
          track: "tymd-stand-along",
        },
        {
          index: "B2",
          track: `gtp-eye-single`,
        },
      ],
      releases: `Original 1998 UK PD 7"`,
    },
    {
      tracks: [
        {
          track: `nby`,
        },
        { track: "tymd-stand-along" },
        { track: "wwry-ruined" },
        {
          track: `gtp-eye-single`,
        },
      ],
      releases: `Original 1998 UK CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `nby`,
        },
        {
          index: "A2",
          track: "tymd-stand-along",
        },
        {
          index: "A3",
          track: "wwry-ruined",
        },
        {
          index: "A4",
          track: `gtp-eye-single`,
        },
        {
          index: "B1",
          track: `nby`,
        },
        {
          index: "B2",
          track: "tymd-stand-along",
        },
        {
          index: "B3",
          track: "wwry-ruined",
        },
        {
          index: "B4",
          track: `gtp-eye-single`,
        },
      ],
      releases: `Original 1998 UK cassette`,
    },
    {
      tracks: [
        {
          track: `nby`,
        },
        { track: "tymd-stand-along" },
      ],
      releases: `1998 UK promo CD`,
    },
    {
      tracks: [
        {
          track: `nby`,
        },
        { track: "wwry-ruined" },
        {
          track: `gtp-eye-single`,
        },
      ],
      releases: '2010 "Singles collection 4" CD',
    },
  ],
};

export default data;
