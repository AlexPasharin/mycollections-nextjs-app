import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `We Will Rock You (2021 "The Greatest Pop-up store" single)`,
  discogs_url: "",
  releaseDate: "2021-10-29",
  tracks: [
    {
      name: `We Will Rock You`,
      versions: [{ id: `wwry` }],
    },
    {
      name: `Sail Away Sweet Sister`,
      versions: [{ id: `sass` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `wwry`,
        },
        {
          track: `sass`,
        },
      ],
    },
  ],
};

export default data;
