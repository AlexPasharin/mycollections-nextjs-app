import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Let Me In Your Heart Again`,
  discogs_url:
    "https://www.discogs.com/master/784366-Queen-Let-Me-In-Your-Heart-Again",
  releaseDate: "2014.12.03",
  tracks: [
    {
      name: `Let Me In Your Heart Again`,
      versions: [
        { id: `lmiyha`, releases: `UK and US promo CD's` },
        { id: `lmiyha-orbit`, releases: `not UK and US promo CD's` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: [1, "A"],
          track: `lmiyha-orbit`,
        },
      ],
      releases: [
        "Digital download",
        "French promo CD",
        `One sided etched 12" (part of "Forever" vinyl box)`,
      ],
    },
    {
      tracks: [
        {
          track: `lmiyha`,
        },
      ],
      releases: `UK promo CD`,
    },
    {
      tracks: [
        {
          track: `lmiyha`,
        },
        {
          track: `lmiyha`,
        },
        {
          track: `lmiyha`,
        },
      ],
      releases: `US promo CD`,
    },
  ],
};

export default data;
