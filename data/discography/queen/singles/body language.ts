import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Body Language`,
  discogs_url: "https://www.discogs.com/master/13595-Queen-Body-Language",
  tracks: [
    {
      name: `Body Language`,
      versions: [
        { id: `bl` },
        { id: `bl-mono`, releases: `Electra 7"/12" promo` },
      ],
    },
    {
      name: `Life Is Real`,
      versions: [
        {
          id: `lir`,
          releases: `not Electra 7"/12" promo, Italian promo 7" or 1983 "Spun Gold" series 7"`,
        },
      ],
    },
    {
      name: `Calling All Girls`,
      versions: [{ id: `cag`, releases: `1983 "Spun Gold" series 7"` }],
    },
    {
      name: `Back Chat`,
      versions: [{ id: `bc`, releases: `Italian promo 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `bl`,
        },
        {
          indexes: ["B", 2],
          track: `lir`,
        },
      ],
      releases: [
        'Original 1982 7"',
        'Original 1982 12"',
        '2009 "Singles collection 2" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `bl`,
        },
        { index: "A", track: `bl-mono` },
      ],
      releases: [`Electra promo 7"`, `Electra promo 12"`],
    },
    {
      tracks: [
        {
          index: "A",
          track: `bl`,
        },
        { index: "B", track: `cag` },
      ],
      releases: `1983 "Spun Gold" series 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `bl`,
        },
        { index: "B", track: `bc` },
      ],
      releases: `Italian promo 7"`,
    },
  ],
};

export default data;
