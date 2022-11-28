import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Another One Bites The Dust`,
  discogs_url:
    "https://www.discogs.com/master/12080-Queen-Another-One-Bites-The-Dust",
  tracks: [
    {
      name: `Another One Bites The Dust`,
      versions: [
        { id: `aobtd`, releases: `possibly not Columbian 12" (unconfirmed)` },
        { id: `aobtd-mono`, releases: 'Electra promo 7"' },
        {
          id: `aobtd-ext`,
          releases: `possibly Columbian 12" (unconfirmed)`,
        },
      ],
    },
    {
      name: `Dragon Attack`,
      versions: [
        {
          id: `da`,
          releases: `not Electra releases, Japanese radio promo 7" or French 2003 CD`,
        },
      ],
    },
    {
      name: `Don't Try Suicide`,
      versions: [
        {
          id: `dts`,
          releases: `Electra releases, except for 7" and 12" promos,  1983 "Spun Gold" series 7" re-issue, Canadian "Gold Standard" series 7" or Japanese radio promo 7"`,
        },
      ],
    },
    {
      name: `Bicycle Race`,
      versions: [{ id: `br`, releases: `Japanese radio promo 7"` }],
    },
    {
      name: `Keep Yourself Alive`,
      versions: [
        { id: `kya`, releases: `1983 "Spun Gold" series 7" re-issue` },
      ],
    },
    {
      name: `Need Your Loving Tonight`,
      versions: [
        { id: `nylt`, releases: `Canadian "Gold Standard" series 7"` },
      ],
    },
    {
      name: `Las Palabras De Amor`,
      versions: [{ id: `lpda`, releases: `1988/91 3"CDs` }],
    },
    {
      name: `We Will Rock You`,
      versions: [{ id: `wwry`, releases: `French 2003 CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `aobtd`,
        },
        {
          indexes: ["B", 2],
          track: `da`,
        },
      ],
      releases: [
        'Original EMI 1980 7"',
        'Original 1980 12"',
        '2009 "Singles collection 2" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `aobtd`,
        },
        { index: "B", track: `dts` },
      ],
      releases: 'Original Electra 1980 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `aobtd`,
        },
        { index: "A", track: `aobtd-mono` },
      ],
      releases: `Electra promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `aobtd`,
        },
        { index: "A", track: `aobtd` },
      ],
      releases: `Electra promo 12"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `aobtd-ext`,
        },
        { index: "B", track: `da` },
      ],
      releases: `Columbian 12" (unconfirmed)`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `aobtd`,
        },
        { index: "B", track: `br` },
      ],
      releases: `Japanese radio promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `aobtd`,
        },
        { index: "B", track: `kya` },
      ],
      releases: `1983 "Spun Gold" series 7" re-issue`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `aobtd`,
        },
        { index: "B", track: `nylt` },
      ],
      releases: `Canadian "Gold Standard" series 7"`,
    },
    {
      tracks: [
        {
          track: `aobtd`,
        },
        { track: `da` },
        { track: `lpda` },
      ],
      releases: `1988/91 3"CDs`,
    },
    {
      tracks: [
        {
          track: `aobtd`,
        },
        { track: `wwry` },
      ],
      releases: `French 2003 CD`,
    },
  ],
};

export default data;
