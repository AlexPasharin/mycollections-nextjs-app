import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Don't Stop Me Now`,
  discogs_url: "https://www.discogs.com/master/138090-Queen-Dont-Stop-Me-Now",
  tracks: [
    {
      name: `Don't Stop Me Now`,
      versions: [
        { id: `dsmn` },
        { id: "dsmn-mono", releases: 'Electra promo 7"' },
      ],
    },
    {
      name: `In Only Seven Days`,
      versions: [
        {
          id: `iosd`,
          releases: `not Electra releases, 1994 French 1-track promo CD or Japanese 1996 3"CD`,
        },
      ],
    },
    {
      name: `More Of That Jazz`,
      versions: [{ id: `motj`, releases: `Electra 1979 7"` }],
    },
    {
      name: `Let Me Live`,
      versions: [{ id: `lml`, releases: `Japanese 1996 3"CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "dsmn",
        },
        {
          indexes: ["B", 2],
          track: "iosd",
        },
      ],
      releases: [
        'Original EMI 1979 7"',
        "French 1994 CD",
        '2008 "Singles collection 1" CD single',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: "dsmn",
        },
        { index: "B", track: "motj" },
      ],
      releases: `Electra 1979 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: "dsmn",
        },
        { index: "A", track: "dsmn-mono" },
      ],
      releases: 'Electra 1979 promo 7"',
    },
    {
      tracks: [
        {
          track: "dsmn",
        },
      ],
      releases: "French 1994 promo CD",
    },
    {
      tracks: [
        {
          track: "dsmn",
        },
        {
          track: "lml",
        },
      ],
      releases: `Japanese 1996 3"CD`,
    },
  ],
};

export default data;
