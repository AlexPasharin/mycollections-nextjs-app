import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `We Will Rock You (2005 Japanese CD single)`,
  discogs_url: "https://www.discogs.com/release/2859022-Queen-We-Will-Rock-You",
  releaseDate: "2005.06.01",
  tracks: [
    {
      name: `We Will Rock You`,
      versions: [{ id: `wwry` }, { id: `wwry-karaoke` }],
    },
    {
      name: `Teo Torriatte`,
      versions: [{ id: `tt-hd` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        { track: `wwry` },
        { track: `tt-hd` },
        { track: `wwry-karaoke` },
      ],
    },
  ],
};

export default data;
