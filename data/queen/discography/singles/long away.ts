import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Long Away`,
  discogs_url: "https://www.discogs.com/master/458422-Queen-Long-Away",
  tracks: [
    {
      name: `Long Away`,
      versions: [{ id: `la` }, { id: `la-mono`, releases: 'promo 7"' }],
    },
    {
      name: `You And I`,
      versions: [{ id: `yai`, releases: 'not promo 7"' }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: "la",
        },
        {
          index: "B",
          track: "yai",
        },
      ],
      releases: 'Original 1977 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "la",
        },
        {
          index: "A",
          track: "la-mono",
        },
      ],
      releases: 'Promo 7"',
    },
  ],
};

export default data;
