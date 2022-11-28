import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `It's A Hard Life`,
  discogs_url: "https://www.discogs.com/master/15355-Queen-Its-A-Hard-Life",
  tracks: [
    {
      name: `It's A Hard Life`,
      versions: [
        { id: `iahl` },
        {
          id: `iahl-ext`,
          releases: `12" releases, except UK 12" PD, German 2 track 12" or Capitol 12" promo`,
        },
      ],
    },
    {
      name: `Is This The World We Created`,
      versions: [
        {
          id: `ittwwc`,
          releases: `not Argentinian 7" promo or Capitol promo 7"/12"s`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `iahl`,
        },
        {
          indexes: ["B", 2],
          track: `ittwwc`,
        },
      ],
      releases: [
        'Original 1984 EMI 7"',
        'Original 1984 UK 12" picture disk',
        'German 2 track 12"',
        '2010 "Singles collection 3" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `iahl-ext`,
        },
        { index: "B1", track: `iahl` },
        { index: "B2", track: `ittwwc` },
      ],
      releases:
        'Original 1984 EMI 12", except for UK picture disk or German 2 track release',
    },
    {
      tracks: [
        {
          index: "A",
          track: `iahl`,
        },
        {
          index: "B",
          track: `iahl`,
        },
      ],
      releases: [
        `Capitol promo 7"`,
        'Capitol promo 12"',
        'Argentinian promo 7"',
      ],
    },
  ],
};

export default data;
