import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Flash`,
  discogs_url: "https://discogs.com/master/7680-Queen-Flash",
  tracks: [
    {
      name: `Flash's Theme`,
      versions: [
        { id: `ft-single-edit` },
        { id: `ft-single-edit-mono`, releases: `Electra promo 7"/12"` },
      ],
    },
    {
      name: `Football Fight`,
      versions: [{ id: `ff`, releases: `not Electra promo 7"/12"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `ft-single-edit`,
        },
        {
          indexes: ["B", 2],
          track: `ff`,
        },
      ],
      releases: ['Original 1980 7"', '2009 "Singles collection 2" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `ft-single-edit`,
        },
        { index: "A", track: `ft-single-edit-mono` },
      ],
      releases: [`Electra promo 7"`, `Electra promo 12"`],
    },
  ],
};

export default data;
