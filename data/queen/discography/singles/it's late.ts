import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `It's Late`,
  discogs_url: "",
  tracks: [
    {
      name: `It's Late`,
      versions: [
        { id: `il`, releases: `not Japanese 7"` },
        { id: `il-edit`, releases: `US promo 7" and Japanese 7"` },
      ],
    },
    {
      name: `Sheer Heart Attack`,
      versions: [{ id: `sha`, releases: `not US promo 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        { index: "A", track: "il" },
        { index: "B", track: "sha" },
      ],
      releases: 'Original 1978 7" (except Japan)',
    },
    {
      tracks: [
        { index: "A", track: "il" },
        { index: "A", track: "il-edit" },
      ],
      releases: '1978 promo 7"',
    },
    {
      tracks: [
        { index: "A", track: "il-edit" },
        { index: "B", track: "sha" },
      ],
      releases: '1978 Japanese 7"',
    },
  ],
};

export default data;
