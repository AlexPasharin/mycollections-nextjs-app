import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Bohemian Rhapsody / These Are The Days Of Our Lives`,
  releaseDate: "1991-12-9",
  discogs_url:
    "https://www.discogs.com/master/14498-Queen-Bohemian-Rhapsody-These-Are-The-Days-Of-Our-Lives",
  tracks: [
    {
      name: `Bohemian Rhapsody`,
      versions: [{ id: "br-stand-along" }],
    },
    {
      name: `These Are The Days Of Our Lives`,
      versions: [{ id: `tatdool` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", "A", 1],
          track: "br-stand-along",
        },
        {
          indexes: ["AA", "B", 2],
          track: `tatdool`,
        },
      ],
      releases: [
        'Original 1991 7"',
        "Original 1991 CD",
        '2010 "Singles collection 4" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A1",
          track: "br-stand-along",
        },
        {
          index: "A2",
          track: `tatdool`,
        },
        {
          index: "B1",
          track: "br-stand-along",
        },
        {
          index: "B2",
          track: `tatdool`,
        },
      ],
      releases: `Original 1991 cassette`,
    },
  ],
};

export default data;
