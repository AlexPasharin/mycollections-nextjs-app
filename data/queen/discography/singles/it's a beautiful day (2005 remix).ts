import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `It's A Beautiful Day (Robertson & DJ Koma Remix)`,
  discogs_url:
    "https://www.discogs.com/master/1200734-Queen-Its-A-Beautiful-Day-Remix-2005",
  releaseDate: "2005.10.31",
  tracks: [
    {
      name: `It's A Beautiful Day`,
      versions: [{ id: `iabd-2005-remix` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `iabd-2005-remix`,
        },
      ],
    },
  ],
};

export default data;
