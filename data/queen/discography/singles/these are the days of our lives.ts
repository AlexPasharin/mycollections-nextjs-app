import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `These Are The Days Of Our Lives`,
  discogs_url:
    "https://www.discogs.com/master/316098-Queen-These-Are-The-Days-Of-Our-Lives",
  tracks: [
    {
      name: `These Are The Days Of Our Lives`,
      versions: [
        { id: `tatdool` },
        {
          id: `tatdool-hr-promo-edit`,
          releases: `US 2 track promo CD`,
        },
      ],
    },
    {
      name: `Bijou`,
      versions: [{ id: `bijou`, releases: `US cassette` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A1",
          track: `tatdool`,
        },
        {
          index: "A2",
          track: `bijou`,
        },
        {
          index: "B1",
          track: `tatdool`,
        },
        {
          index: "B2",
          track: `bijou`,
        },
      ],
      releases: `Original 1991 cassette`,
    },
    {
      tracks: [
        {
          track: `tatdool`,
        },
      ],
      releases: `1 track promo CD`,
    },
    {
      tracks: [
        {
          track: `tatdool`,
        },
        {
          track: `tatdool-hr-promo-edit`,
        },
      ],
      releases: `2 track promo CD`,
    },
  ],
};

export default data;
