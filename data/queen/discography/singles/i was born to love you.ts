import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `I Was Born To Love You`,
  discogs_url:
    "https://www.discogs.com/master/407895-Queen-I-Was-Born-To-Love-You",
  releaseDate: "1996.02.28",
  tracks: [
    {
      name: `I Was Born To Love You`,
      versions: [
        { id: `queen-iwbtly`, releases: `not Canadian promo CD` },
        { id: `queen-iwbtly-canada-edit`, releases: `Canadian promo CD` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: [1, "A"],
          track: `queen-iwbtly`,
        },
      ],
      releases: [
        `Original 1996 Japanese 3"CD`,
        "French 1996 promo CD",
        "1996 Virgin one-sided promo 12",
        `Japanese 2004 3"CD reissues`,
      ],
    },
    {
      tracks: [
        {
          track: `queen-iwbtly-canada-edit`,
        },
      ],
      releases: `1996 Canadian promo CD`,
    },
  ],
};

export default data;
