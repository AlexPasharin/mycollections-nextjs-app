import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `First Queen EP`,
  discogs_url: "https://www.discogs.com/master/6341-Queen-Queens-First-EP",
  tracks: [
    {
      name: `Good Old Fashioned Lover Boy`,
      versions: [{ id: `goflb` }],
    },
    {
      name: `Death On Two Legs`,
      versions: [{ id: `dotl` }],
    },
    {
      name: `Tenement Funster`,
      versions: [
        { id: `tf-stand-along`, releases: 'not Japanese 1991 3"CD' },
        { id: `tf-91-stand-along`, releases: 'Japanese 1991 3"CD' },
      ],
    },
    {
      name: `White Queen`,
      versions: [{ id: `wq-stand-along` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A1", 1],
          track: "goflb",
        },
        {
          indexes: ["A2", 2],
          track: "dotl",
        },
        {
          indexes: ["B1", 3],
          track: "tf-stand-along",
        },
        {
          indexes: ["B2", 4],
          track: "wq-stand-along",
        },
      ],
      releases: [
        "Original 1977 EP",
        'UK 1988 3"CD',
        '2008 "Singles collection 1" CD single',
        "2009 Record Store Day US CD",
      ],
    },
    {
      tracks: [
        {
          track: "goflb",
        },
        {
          track: "dotl",
        },
        {
          track: "tf-91-stand-along",
        },
        {
          track: "wq-stand-along",
        },
      ],
      releases: 'Japanese 1991 3"CD',
    },
  ],
};

export default data;
