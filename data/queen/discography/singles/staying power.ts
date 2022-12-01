import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Staying Power`,
  discogs_url: "https://www.discogs.com/master/459273-Queen-Staying-Power",
  tracks: [
    {
      name: `Staying Power`,
      versions: [
        { id: `sp`, releases: `not Electra promo 12"` },
        { id: `sp-ext`, releases: `Electra promo 12"` },
      ],
    },
    {
      name: `Calling All Girls`,
      versions: [{ id: `cag`, releases: `Japanese releases, possibly US 7"` }],
    },
    {
      name: `Back Chat`,
      versions: [
        { id: `bc`, releases: `possibly US 7"` },
        { id: `bc-ext`, releases: `Electra promo 12"` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `sp`,
        },
        {
          index: "B",
          track: `cag`,
        },
      ],
      releases: [`Original 1982 Japanese 7"`, `Original 1982 US 7" (possibly)`],
    },
    {
      tracks: [
        {
          index: "A",
          track: `sp`,
        },
        {
          index: "B",
          track: `bc`,
          comment: "single remix or album version?",
        },
      ],
      releases: `Original 1982 US 7" (possibly)`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `sp-ext`,
        },
        {
          index: "B",
          track: `bc-ext`,
        },
      ],
      releases: `US promo 12"`,
    },
  ],
};

export default data;
