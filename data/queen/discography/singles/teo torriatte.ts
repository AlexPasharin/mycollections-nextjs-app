import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Teo Torriatte (Let US Cling Together)",
  discogs_url:
    "https://www.discogs.com/master/883965-%E3%82%AF%E3%82%A4%E3%83%BC%E3%83%B3-Queen-Teo-Toriatte-Let-Us-Cling-Together-%E6%89%8B%E3%82%92%E3%81%A8%E3%82%8A%E3%81%82%E3%81%A3%E3%81%A6",
  tracks: [
    {
      name: `Teo Torriatte`,
      versions: [
        { id: `tt-single-edit`, releases: 'Original 1977 7"' },
        { id: `tt-hd-promo-edit`, releases: "Japanese 2005 promo CD" },
      ],
    },
    {
      name: `Good Old Fashioned Lover Boy`,
      versions: [{ id: `goflb`, releases: 'Original 1977 7"' }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `tt-single-edit`,
        },
        {
          index: "B",
          track: `goflb`,
        },
      ],
      releases: 'Original Japanese 1977 7"',
    },
    {
      tracks: [{ track: `tt-hd-promo-edit` }],
      releases: "Japanese 2005 promo CD",
    },
  ],
};

export default data;
