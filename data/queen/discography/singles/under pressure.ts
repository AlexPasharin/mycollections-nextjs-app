import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Under Pressure`,
  discogs_url:
    "https://www.discogs.com/master/13442-Queen-David-Bowie-Under-Pressure",
  tracks: [
    {
      name: `Under Pressure`,
      versions: [
        { id: `up` },
        {
          id: `up-mono`,
          releases: `Electra promo 7"`,
        },
      ],
    },
    {
      name: `Soul Brother`,
      versions: [
        {
          id: `sb`,
          releases: `not Canadian original 1981 7", Electra promo 7" or 1982 Canadian "Gold Standard" series 7"`,
        },
        {
          id: `sb-canada-edit`,
          releases: `Canadian original 1981 7"`,
        },
      ],
    },
    {
      name: `Body Language`,
      versions: [
        {
          id: `bl`,
          releases: ` 1982 Canadian "Gold Standard" series 7" and 1988/91 3"CDs`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `up`,
        },
        {
          indexes: ["B", 2],
          track: `sb`,
        },
      ],
      releases: [
        'Original 1981 7"',
        'Original 1981 12"',
        '2009 "Singles collection 2" CD',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: `up`,
        },
        { index: "A", track: `up-mono` },
      ],
      releases: `Electra promo 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `up`,
        },
        { index: "B", track: `sb-canada-edit` },
      ],
      releases: `Canadian original 1981 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `up`,
        },
        { index: "B", track: `bl` },
      ],
      releases: `1982 Canadian "Gold Standard" series 7"`,
    },
    {
      tracks: [
        {
          track: `up`,
        },
        {
          track: `sb`,
        },
        {
          track: `bl`,
        },
      ],
      releases: `1988/91 3"CDs`,
    },
  ],
};

export default data;
