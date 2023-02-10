import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `You Don't Fool Me`,
  discogs_url: "https://www.discogs.com/master/20560-Queen-You-Dont-Fool-Me",
  releaseDate: "1996.02.26",
  tracks: [
    {
      name: `You Don't Fool Me`,
      versions: [
        {
          id: `ydfm`,
          releases: `not French 2 track CD or promo CDs, Italian 12", Spanish 12", US 3 track 12" or UK promo 12"s`,
        },
        {
          id: `ydfm-edit`,
          releases: `European CD releases (except for France), French 3 track promo CD, Australia cassette, New Zealand and 2010 "Singles collection 4" CD`,
        },
        {
          id: `ydfm-sexy`,
          releases: `European 4 track CD and 12" releases and UK 12" releases, including promos`,
        },
        {
          id: `ydfm-sexy-error`,
          releases: `UK CD`,
        },
        {
          id: `ydfm-divaz`,
          releases: `European 4 track CD releases (except for France), Italian 12", Spanish 12", all cassette releases, UK CD and UK 12" releases, including promos`,
        },
        {
          id: `ydfm-divaz-instr`,
          releases: `Italian 12", Spanish 12" and UK 4 track promo 12"`,
        },
        {
          id: `ydfm-divaz-rhythm`,
          releases: `Spanish 12" and UK promo 12" releases`,
        },
        {
          id: `ydfm-bs`,
          releases: `French 4 track CD and French 12"`,
        },
        {
          id: `ydfm-bs-edit`,
          releases: `French 2 track CD and French 3 track promo CD`,
        },
        {
          id: `ydfm-dub`,
          releases: `French 4 track CD, French 12" and French 3 track promo CD`,
        },
        {
          id: `ydfm-french-edit`,
          releases: `French 2 track CD and French 1 track promo CD`,
        },
        {
          id: `ydfm-club`,
          releases: `US 12" releases and UK orange vinyl promo 12"`,
        },
        {
          id: `ydfm-refenge-dub`,
          releases: `US 12" releases`,
        },
        {
          id: `ydfm-for-a-day`,
          releases: `US 12" releases`,
        },
        {
          id: `ydfm-late`,
          releases: `UK 12" and UK CD`,
        },
        {
          id: `ydfm-forever-megamix`,
          releases: `UK orange vinyl promo 12"`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `ydfm`,
        },
        {
          track: `ydfm-edit`,
        },
        {
          track: `ydfm-sexy`,
        },
        {
          track: `ydfm-divaz`,
        },
      ],
      releases: [
        `Original 1996 Dutch 4 track CD`,
        "Original 1996 Italian CD",
        "Original 1996 Australian CD",
      ],
    },
    {
      tracks: [
        {
          track: `ydfm-edit`,
        },
        {
          track: `ydfm`,
        },
      ],
      releases: [
        `Original 1996 Dutch 2 track CD`,
        `2010 "Singles collection 4" CD`,
      ],
    },
    {
      tracks: [
        {
          indexes: [1, "A1"],
          track: `ydfm-bs`,
        },
        {
          indexes: [2, "A2"],
          track: `ydfm-dub`,
        },
        {
          indexes: [3, "B1"],
          track: `ydfm-sexy`,
        },
        {
          indexes: [4, "B2"],
          track: `ydfm`,
        },
      ],
      releases: [`Original 1996 French 4 track CD`, `Original 1996 French 12"`],
    },
    {
      tracks: [
        {
          track: `ydfm-bs-edit`,
        },
        {
          track: `ydfm-french-edit`,
        },
      ],
      releases: `Original 1996 French 2 track CD`,
    },
    {
      tracks: [
        { index: "A1", track: `ydfm-sexy` },
        {
          index: "A2",
          track: `ydfm-divaz`,
        },
        {
          index: "B1",
          track: `ydfm-bs`,
        },
        {
          index: "B2",
          track: `ydfm-divaz-instr`,
        },
      ],
      releases: `Original 1996 Italian 12"`,
    },
    {
      tracks: [
        { index: "A1", track: `ydfm-sexy` },
        {
          index: "A2",
          track: `ydfm-divaz`,
        },
        {
          index: "B1",
          track: `ydfm-divaz-instr`,
        },
        {
          index: "B2",
          track: `ydfm-divaz-rhythm`,
        },
      ],
      releases: `Original 1996 Spanish 12"`,
    },
    {
      tracks: [
        { index: "A1", track: `ydfm` },
        {
          index: "A2",
          track: `ydfm-edit`,
        },
        {
          index: "B",
          track: `ydfm-divaz`,
        },
      ],
      releases: ["Australian cassette", "New Zealand cassette"],
    },
    {
      tracks: [
        {
          track: `ydfm-edit`,
        },
        {
          track: `ydfm-bs-edit`,
        },
        {
          track: `ydfm-dub`,
        },
      ],
      releases: `French 3 track promo CD`,
    },
    {
      tracks: [
        {
          track: `ydfm-french-edit`,
        },
      ],
      releases: `French 1 track promo CD`,
    },
    {
      tracks: [
        { index: "A1", track: `ydfm-club` },
        {
          index: "A2",
          track: `ydfm`,
        },
        {
          index: "B1",
          track: `ydfm-refenge-dub`,
        },
        {
          index: "B2",
          track: `ydfm-for-a-day`,
        },
      ],
      releases: `Original 1996 US 4 track 12"`,
    },
    {
      tracks: [
        { index: "A1", track: `ydfm-club` },
        {
          index: "B1",
          track: `ydfm-refenge-dub`,
        },
        {
          index: "B2",
          track: `ydfm-for-a-day`,
        },
      ],
      releases: `Original 1996 US 3 track 12"`,
    },
    {
      tracks: [
        { index: "A1", track: `ydfm-divaz` },
        {
          index: "A2",
          track: `ydfm-late`,
        },
        {
          index: "B1",
          track: `ydfm-sexy`,
        },
        {
          index: "B2",
          track: `ydfm`,
        },
      ],
      releases: `Original 1996 UK grey vinyl 12"`,
    },
    {
      tracks: [
        {
          track: `ydfm`,
        },
        {
          track: `ydfm-divaz`,
        },
        {
          track: `ydfm-sexy-error`,
        },
        {
          track: `ydfm-late`,
        },
      ],
      releases: `Original 1996 UK CD`,
    },
    {
      tracks: [
        { index: "A1", track: `ydfm` },
        {
          index: "A2",
          track: `ydfm-divaz`,
        },
        { index: "B1", track: `ydfm` },
        {
          index: "B2",
          track: `ydfm-divaz`,
        },
      ],
      releases: `Original 1996 UK cassette`,
    },
    {
      tracks: [
        {
          indexes: [1, "A"],
          track: `ydfm`,
        },
      ],
      releases: [`UK promo CD`, `1996 Virgin one-sided promo 12"`],
    },
    {
      tracks: [
        { index: "A1", track: `ydfm-sexy` },
        {
          index: "A2",
          track: `ydfm-divaz`,
        },
        {
          index: "B1",
          track: `ydfm-divaz-rhythm`,
        },
        {
          index: "B2",
          track: `ydfm-divaz-instr`,
        },
      ],
      releases: `UK black vinyl promo 12"`,
    },
    {
      tracks: [
        { index: "A1", track: `ydfm-club` },
        {
          index: "A2",
          track: `ydfm-divaz-rhythm`,
        },
        {
          index: "A3",
          track: `ydfm-forever-megamix`,
        },
        {
          index: "B1",
          track: `ydfm-sexy`,
        },
        {
          index: "B2",
          track: `ydfm-divaz`,
        },
      ],
      releases: `UK orange vinyl promo 12"`,
    },
  ],
};

export default data;
