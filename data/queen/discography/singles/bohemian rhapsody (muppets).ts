import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Bohemian Rhapsody (muppets)`,
  discogs_url:
    "https://www.discogs.com/master/353331-Queen-The-Muppets-Bohemian-Rhapsody",
  releaseDate: "2009.12.04",
  artist: "Queen + The Muppets",
  tracks: [
    {
      name: `Bohemian Rhapsody`,
      versions: [
        { id: `br-muppets` },
        { id: `br-muppets-video`, releases: `2-track download` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `br-muppets`,
        },
      ],
      releases: [`1-track download`, "1-track promo CD"],
    },
    {
      tracks: [
        {
          track: `br-muppets`,
        },
        {
          track: `br-muppets-video`,
        },
      ],
      releases: `2-track download`,
    },
  ],
};

export default data;
