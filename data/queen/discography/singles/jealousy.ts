import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Jealousy`,
  discogs_url: "https://www.discogs.com/master/324408-Queen-Jealousy",
  tracks: [
    {
      name: `Jealousy`,
      versions: [{ id: `jealousy` }],
    },
    {
      name: `Fun It`,
      versions: [{ id: `fi` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: "jealousy",
        },
        {
          index: "B",
          track: "fi",
        },
      ],
    },
  ],
};

export default data;
