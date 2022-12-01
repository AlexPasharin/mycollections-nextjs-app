import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Bohemian Rhapsody",
  discogs_url: "https://www.discogs.com/Queen-Bohemian-Rhapsody/master/5967",
  tracks: [
    {
      name: "Bohemian Rhapsody",
      versions: [
        {
          id: "br-stand-along",
          releases: 'not French 1978 promo 7" or UK 1988 3" CD single',
        },
        { id: "br-78-edit", releases: 'French 1978 promo 7"' },
        { id: "br-88-stand-along", releases: 'UK 1988 3" CD single' },
        { id: "br-karaoke-edit", releases: 'Japanese 2000 3"CD' },
        {
          id: "br-video",
          releases: "2005 30th anniversary download",
        },
        {
          id: "br-qpr-hyde-park",
          releases: "2005 30th anniversary download",
        },
        {
          id: "br-qpr-hyde-park-video",
          releases: "2005 30th anniversary download",
        },
        {
          id: "br-wwry-london",
          releases: "2005 30th anniversary download",
        },
      ],
    },
    {
      name: "I'm In Love With My Car",
      versions: [
        {
          id: "iilwmc-single",
          releases:
            'not Electra 7" releases (except for Japan), UK 1988 3" CD single, Turkish 1976 7", Polish 1978 7", US 1992 1-track promo CD, Japanese 2000 CD single, 2005 download, UK 2015 1-track promo CD or 12" from 2015 “Night At The Odeon” Box 12',
        },
        {
          id: "iilwmc",
          releases:
            'Electra 7" releases (except for Japan or 1982 Spun Gold series 7"), UK 1988 3" CD single',
        },
      ],
    },
    {
      name: "Sweet Lady",
      versions: [{ id: "sl-stand-along", releases: 'Turkish 1976 7"' }],
    },
    {
      name: "Death On Two Legs",
      versions: [{ id: "dotl", releases: 'Polish 1978 7"' }],
    },
    {
      name: "You're My Best Friend",
      versions: [
        {
          id: "ymbf",
          releases:
            '1982 Spun Gold series 7, UK 1988 3" CD single and Japanese 1991 3"CD',
        },
      ],
    },
    {
      name: "Now I'm Here",
      versions: [
        { id: "nih", releases: 'Japanese 2000 3"CD' },
        {
          id: "nih-odeon-soundcheck",
          releases: '2015 12", part of 2015 "A Night At The Odeon" Box',
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "br-stand-along",
        },
        {
          indexes: ["B", 2],
          track: "iilwmc-single",
        },
      ],
      releases: [
        'Original 1975 EMI 7"',
        'Original 1975 Japanese 7"',
        `1978 Numbered Promo "Queen's Award For Industry" Blue Vinyl 7"`,
        `1995 Fan Club Convention purple 7"`,
        '2008 "Singles collection 1" CD single',
        '2015 12" reissue',
        '2019 Record Store Day colored 7" re-issue',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: "br-stand-along",
        },
        { index: "B", track: "iilwmc" },
      ],
      releases: 'Original 1975 Electra 7" (except for Japan)',
    },
    {
      tracks: [
        {
          index: "A",
          track: "br-stand-along",
        },
        { index: "B", track: "sl-stand-along" },
      ],
      releases: 'Turkish 1976 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "br-stand-along",
        },
        { index: "B", track: "dotl" },
      ],
      releases: 'Polish 1978 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "br-78-edit",
        },
        { index: "B", track: "iilwmc-single" },
      ],
      releases: 'French 1978 promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "br-stand-along",
        },
        { index: "B", track: "ymbf" },
      ],
      releases: 'Electra 1982 Spun Gold series 7"',
    },
    {
      tracks: [
        {
          track: "br-88-stand-along",
        },
        {
          track: "iilwmc",
        },
        {
          track: "ymbf",
        },
      ],
      releases: 'UK 1988 3"CD',
    },
    {
      tracks: [
        {
          track: "br-stand-along",
        },
        {
          track: "iilwmc-single",
        },
        {
          track: "ymbf",
        },
      ],
      releases: 'Japanese 1991 3"CD',
    },
    {
      tracks: [
        {
          track: "br-stand-along",
        },
      ],
      releases: ["US 1992 promo CD", "UK 2015 promo CD"],
    },
    {
      tracks: [
        {
          track: "br-stand-along",
        },
        {
          track: "nih",
        },
        {
          track: "br-karaoke-edit",
        },
      ],
      releases: 'Japanese 2000 3"CD',
    },
    {
      tracks: [
        {
          track: "br-stand-along",
        },
        {
          track: "br-video",
        },
        {
          track: "br-qpr-hyde-park",
        },
        {
          track: "br-qpr-hyde-park-video",
        },
        {
          track: "br-wwry-london",
        },
      ],
      releases: "2005 30th anniversary download",
    },
    {
      tracks: [
        {
          index: "A",
          track: "br-stand-along",
        },
        { index: "B", track: "nih-odeon-soundcheck" },
      ],
      releases: '2015 12", part of 2015 "A Night At The Odeon" Box',
    },
  ],
};

export default data;
