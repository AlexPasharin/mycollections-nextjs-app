import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Killer Queen",
  discogs_url: "https://www.discogs.com/Queen-Killer-Queen/master/5206",
  tracks: [
    {
      name: "Killer Queen",
      versions: [
        { id: "kq" },
        { id: "kq-mono", releases: 'Electra stereo/mono 7" promo' },
      ],
    },
    {
      name: "Flick Of The Wrist",
      versions: [
        {
          id: "fotw-emi-single-edit",
          releases:
            'Original 1974 EMI 7" releases (except Dutch 7" and Guatemala 7"), later CD singles (except UK 1988 3" CD single)',
        },
        {
          id: "fotw-electra-single-edit",
          releases:
            'Original 1974 7" Electra releases (except Japanese 7" or stereo/mono 7" promos)',
        },
        {
          id: "fotw-dutch-single-edit",
          releases: 'Dutch 1974 7"',
        },
        {
          id: "fotw-jap-single-edit",
          releases: 'Japanese 1974 7"',
        },
        {
          id: "fotw-88-single-edit",
          releases: 'UK 1988 3"CD',
        },
      ],
    },
    {
      name: "Now I'm Here",
      versions: [{ id: "nih", releases: 'Guatemala 1974 7"' }],
    },
    {
      name: "Seven Seas Of Rhye",
      versions: [{ id: "ssor", releases: 'Japanese 1976 7" re-issue' }],
    },
    {
      name: "Keep Yourself Alive",
      versions: [{ id: "kya", releases: 'Venezuela 1981 12"' }],
    },
    {
      name: "Liar",
      versions: [{ id: "liar-edit", releases: 'US 1983 Spun Gold series 7"' }],
    },
    {
      name: "You're My Best Friend",
      versions: [{ id: "ymbf", releases: `UK 1984 Golden 45's series 7"` }],
    },
    {
      name: "Brighton Rock",
      versions: [{ id: "br", releases: `1988 and 1991 3"CD singles` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "kq",
        },
        {
          indexes: ["B", 2],
          track: "fotw-emi-single-edit",
        },
      ],
      releases: [
        'Original 1974 EMI 7" (except for Holland and Guatemala)',
        '2008 "Singles collection 1" CD single',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "B", track: "fotw-electra-single-edit" },
      ],
      releases: 'Original Electra 1974 7" releases, except for Japan',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "B", track: "fotw-dutch-single-edit" },
      ],
      releases: 'Dutch 1974 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "B", track: "fotw-jap-single-edit" },
      ],
      releases: 'Japanese 1974 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "A", track: "kq-mono" },
      ],
      releases: 'Electra 1974 promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "B", track: "nih" },
      ],
      releases: 'Guatemala 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "B", track: "ssor" },
      ],
      releases: 'Japanese 1976 7" re-issue',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "B", track: "kya" },
      ],
      releases: 'Venezuela 1981 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "B", track: "liar-edit" },
      ],
      releases: 'US 1983 Spun Gold series 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kq",
        },
        { index: "B", track: "ymbf" },
      ],
      releases: `UK 1984 Golden 45's series 7"`,
    },
    {
      tracks: [
        {
          track: "kq",
        },
        {
          track: "fotw-88-single-edit",
        },
        {
          track: "br",
        },
      ],
      releases: 'UK 1988 3"CD',
    },
    {
      tracks: [
        {
          track: "kq",
        },
        {
          track: "fotw-emi-single-edit",
        },
        {
          track: "br",
        },
      ],
      releases: 'Japanese 1991 3"CD',
    },
  ],
};

export default data;
