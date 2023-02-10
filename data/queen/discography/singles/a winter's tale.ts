import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `A Winter's Tale`,
  discogs_url: "https://www.discogs.com/master/22808-Queen-A-Winters-Tale",
  releaseDate: "1995.12.11",
  tracks: [
    {
      name: `A Winter's Tale`,
      versions: [{ id: `awt-stand-along` }],
    },
    {
      name: `Thank God It's Christmas`,
      versions: [
        {
          id: `tgic`,
          releases: `UK "Xmas wrapping" CD, cassette,  Dutch cardboard sleeve 2-track CD, UK promo CD and UK jukebox 7"`,
        },
      ],
    },
    {
      name: `Impromptu`,
      versions: [
        {
          id: `rio-blues-uk`,
          releases: `UK "Xmas wrapping" CD, cassette and 2010 "Singles collection 4" CD`,
        },
      ],
    },
    {
      name: `Now I'm Here`,
      versions: [{ id: `nih`, releases: `Original 1995 4-track CD` }],
    },
    {
      name: `You're My Best Friend`,
      versions: [{ id: `ymbf`, releases: `Original 1995 4-track CD` }],
    },
    {
      name: `Somebody To Love`,
      versions: [{ id: `stl`, releases: `Original 1995 4-track CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `awt-stand-along`,
        },
        {
          track: `tgic`,
        },
        {
          track: `rio-blues-uk`,
        },
      ],
      releases: `Original 1995 UK "Xmas wrapping" CD`,
    },
    {
      tracks: [
        {
          track: `awt-stand-along`,
        },
        {
          track: `nih`,
        },
        {
          track: `ymbf`,
        },
        {
          track: `stl`,
        },
      ],
      releases: `Original 1995 4-track CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `awt-stand-along`,
        },
        {
          index: "A2",
          track: `tgic`,
        },
        {
          index: "A3",
          track: `rio-blues-uk`,
        },
        {
          index: "B1",
          track: `awt-stand-along`,
        },
        {
          index: "B2",
          track: `tgic`,
        },
        {
          index: "B3",
          track: `rio-blues-uk`,
        },
      ],
      releases: `Original 1995 cassette`,
    },
    {
      tracks: [
        {
          indexes: ["1", "A"],
          track: `awt-stand-along`,
        },
        {
          indexes: ["2", "B"],
          track: `tgic`,
        },
      ],
      releases: [
        `1995 Dutch cardboard sleeve 2-track CD`,
        `UK promo CD`,
        `UK jukebox 7"`,
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `awt-stand-along`,
        },
      ],
      releases: `1996 Virgin one-sided promo 12"`,
    },
    {
      tracks: [
        {
          track: `awt-stand-along`,
        },
        {
          track: `rio-blues-uk`,
        },
      ],
      releases: `2010 "Singles collection 4" CD`,
    },
  ],
};

export default data;
