import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Liar",
  discogs_url: "https://www.discogs.com/Queen-Liar/master/458421",
  tracks: [
    {
      name: "Liar",
      versions: [
        { id: "liar-edit" },
        {
          id: "liar-edit-mono",
          releases: 'Electra  7" promo',
        },
      ],
    },
    {
      name: "Doing Alright",
      versions: [
        {
          id: "dar",
          releases: 'not Electra promo 7"',
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: "liar-edit",
        },
        { index: "B", track: "dar" },
      ],
      releases: 'Electra 1974 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "liar-edit",
        },
        { index: "A", track: "liar-edit-mono" },
      ],
      releases: 'Electra 1974 promo 7"',
    },
  ],
};

export default data;
