import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Seven Seas Of Rhye",
  discogs_url: "https://www.discogs.com/Queen-Seven-Seas-Of-Rhye/master/5789",
  tracks: [
    {
      name: "Seven Seas Of Rhye",
      versions: [
        { id: "ssor" },
        { id: "ssor-mono", releases: 'Electra 1974 7" promo' },
      ],
    },
    {
      name: "See What A Fool I've Been",
      versions: [
        {
          id: "swafivb",
          releases: 'not Japanese 1974 7" or Electra 1974 7" promo',
        },
      ],
    },
    {
      name: "The Loser In The End",
      versions: [
        {
          id: "tlite",
          releases: 'Japanese 1974 7"',
        },
      ],
    },
    {
      name: "Funny How Love Is",
      versions: [
        {
          id: "fhli-88-stand-along",
          releases: 'UK 1988 3" CD single',
        },
        {
          id: "fhli-stand-along",
          releases: 'Japanese 1991 3" CD single',
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "ssor",
        },
        {
          indexes: ["B", 2],
          track: "swafivb",
        },
      ],
      releases: [
        'Original 1974 7" (except Japan)',
        '2008 "Singles collection 1" CD single',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: "ssor",
        },
        { index: "B", track: "tlite" },
      ],
      releases: 'Japanese 1974 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "ssor",
        },
        { index: "A", track: "ssor-mono" },
      ],
      releases: 'Electra 1974 promo 7"',
    },
    {
      tracks: [
        {
          track: "ssor",
        },
        { track: "swafivb" },
        { track: "fhli-88-stand-along" },
      ],
      releases: 'UK 1988 3"CD',
    },
    {
      tracks: [
        {
          track: "ssor",
        },
        { track: "swafivb" },
        { track: "fhli-stand-along" },
      ],
      releases: 'Japanese 1988 3"CD',
    },
  ],
};

export default data;
