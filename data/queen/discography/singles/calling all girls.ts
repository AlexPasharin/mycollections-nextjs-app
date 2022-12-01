import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Calling All Girls`,
  discogs_url: "https://www.discogs.com/master/13838-Queen-Calling-All-Girls",
  tracks: [
    {
      name: `Calling All Girls`,
      versions: [
        { id: `cag` },
        {
          id: `cag-mono`,
          releases: 'Electra stereo/mono promo 7"',
        },
      ],
    },
    {
      name: `Put Out The Fire`,
      versions: [{ id: `potf`, releases: `not Electra promo 7"s or 12"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `cag`,
        },
        {
          indexes: ["B", 2],
          track: `potf`,
        },
      ],
      releases: [
        'Original 1982 7"',
        'Electra promo 12"',
        '2009 "Singles collection 2" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `cag`,
        },
        { index: "A", track: `cag-mono` },
      ],
      releases: `Electra stereo/mono promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `cag`,
        },
        { index: "A", track: `cag` },
      ],
      releases: `Electra stereo promo 7"`,
    },
  ],
};

export default data;
