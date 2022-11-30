import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Thank God It's Christmas`,
  discogs_url:
    "https://www.discogs.com/master/14876-Queen-Thank-God-Its-Christmas",
  tracks: [
    {
      name: `Thank God It's Christmas`,
      versions: [{ id: `tgic`, releases: `not Dutch mispress 12"` }],
    },
    {
      name: `Man On The Prowl`,
      versions: [
        { id: `motp`, releases: `not 12" releases` },
        { id: `motp-ext`, releases: `12" releases` },
      ],
    },
    {
      name: `Keep Passing The Open Windows`,
      versions: [
        {
          id: `kptow`,
          releases: `not 12" releases, Australian 7" or UK double A-side promo 7"`,
        },
        { id: `kptow-ext`, releases: `12" releases` },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `tgic`,
        },
        {
          indexes: ["B1", 2],
          track: "motp",
        },
        {
          indexes: ["B2", 3],
          track: "kptow",
        },
      ],
      releases: [
        'Original 1984 7"',
        'UK mispress 5"',
        '2010 "Singles collection 3" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `tgic`,
        },
        {
          index: "A2",
          track: `motp-ext`,
        },
        { index: "B", track: `kptow-ext` },
      ],
      releases: 'Original 1984 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `motp-ext`,
        },
        { index: "B", track: `kptow-ext` },
      ],
      releases: 'Dutch mispress 12"',
    },

    {
      tracks: [
        {
          index: "A",
          track: `motp`,
        },
        {
          index: "AA",
          track: `tgic`,
        },
      ],
      releases: 'UK promo 7"',
    },
  ],
};

export default data;
