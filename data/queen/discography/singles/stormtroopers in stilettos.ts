import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Stormtroopers In Stilettos`,
  discogs_url:
    "https://www.discogs.com/release/2829648-Queen-Stormtroopers-In-Stilettos",
  releaseDate: "2011.02.27",
  tracks: [
    {
      name: `Keep Yourself Alive`,
      versions: [{ id: "kya-llrt" }],
    },
    {
      name: `Stone Cold Crazy`,
      versions: [{ id: `scc` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: [1, "A"],
          track: "kya-llrt",
        },
        {
          indexes: [2, "B"],
          track: "scc",
        },
      ],
    },
  ],
};

export default data;
