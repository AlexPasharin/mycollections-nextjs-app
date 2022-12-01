import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Need Your Loving Tonight`,
  discogs_url:
    "https://www.discogs.com/master/250510-Queen-Need-Your-Loving-Tonight",
  tracks: [
    {
      name: `Need Your Loving Tonight`,
      versions: [
        { id: `nylt` },
        { id: `nylt-mono`, releases: `Electra promo 7"` },
      ],
    },
    {
      name: `Rock It`,
      versions: [{ id: `ri`, releases: `not Electra promo 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `nylt`,
        },
        {
          index: "B",
          track: `ri`,
        },
      ],
      releases: `Original 1980 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `nylt`,
        },
        {
          index: "A",
          track: `nylt-mono`,
        },
      ],
      releases: `Electra promo 7"`,
    },
  ],
};

export default data;
