import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Tie Your Mother Down`,
  discogs_url:
    "https://www.discogs.com/master/57608-Queen-Tie-Your-Mother-Down",
  tracks: [
    {
      name: `Tie Your Mother Down`,
      versions: [
        { id: "tymd-stand-along" },
        { id: "tymd-stand-along-mono", releases: 'Electra 1977 promo 7"' },
      ],
    },
    {
      name: `You And I`,
      versions: [{ id: "yai", releases: "not Electra releases" }],
    },
    {
      name: `Drowse`,
      versions: [{ id: "drowse", releases: 'Electra 1977 7"' }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "tymd-stand-along",
        },
        {
          indexes: ["B", 2],
          track: "yai",
        },
      ],
      releases: [
        'Original EMI 1977 7"',
        '2008 "Singles collection 1" CD single',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: "tymd-stand-along",
        },
        { index: "B", track: "drowse" },
      ],
      releases: 'Electra 1977 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "tymd-stand-along",
        },
        { index: "A", track: "tymd-stand-along-mono" },
      ],
      releases: 'Electra 1977 promo 7"',
    },
  ],
};

export default data;
