import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Under Pressure (rah mix)`,
  discogs_url:
    "https://www.discogs.com/master/66626-Queen-David-Bowie-Under-Pressure",
  releaseDate: "",
  artist: "Queen + David Bowie",
  tracks: [
    {
      name: `Under Pressure`,
      versions: [
        {
          id: `up-rah`,
          releases: `Original non-enhanced 3-track CD, cassette, UK promo CD and promo 12"`,
        },
        {
          id: `up-rah-edit`,
          releases: `Original enhanced CD releases, UK PD 7", EU 2-track CD and 2010 "Singles collection 4" CD`,
        },
        {
          id: `up-rah-video`,
          releases: `Original enhanced CD releases`,
        },
        {
          id: `up-rah-video-making`,
          releases: `Original enhanced CD releases`,
        },
        {
          id: `up-spencer`,
          releases: `Original UK enhanced CD, UK promo CD and 2010 "Singles collection 4" CD`,
        },
        {
          id: `up-knebworth-mix`,
          releases: `Original UK enhanced CD and 2010 "Singles collection 4" CD`,
        },
        {
          id: `up-club`,
          releases: `promo 12"`,
        },
      ],
    },
    {
      name: `Bohemian Rhapsody`,
      versions: [
        {
          id: `br-stand-along`,
          releases: `Original non-enhanced 3-track CD, UK PD 7", cassette and French enhanced CD`,
        },
      ],
    },
    {
      name: `Thank God It's Christmas`,
      versions: [
        {
          id: `tgic`,
          releases: `Original non-enhanced 3-track CD, cassette and EU 2-track CD`,
        },
      ],
    },
    {
      name: `The Show Must Go On`,
      versions: [{ id: `tsmgo-live-98`, releases: `UK promo CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `up-rah-edit`,
        },
        {
          track: `up-spencer`,
        },
        { track: `up-knebworth-mix` },
        { track: `up-rah-video`, enhanced: true },
        { track: `up-rah-video-making`, enhanced: true },
      ],
      releases: `Original 1999 UK enhanced CD`,
    },
    {
      tracks: [
        {
          track: `up-rah`,
        },
        {
          track: `br-stand-along`,
        },
        { track: `tgic` },
      ],
      releases: `Original 1999 UK non-enhanced CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `up-rah-edit`,
        },
        {
          index: "B",
          track: `br-stand-along`,
        },
      ],
      releases: `Original 1999 UK 7"`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `up-rah`,
        },
        {
          index: "A2",
          track: `br-stand-along`,
        },
        {
          index: "A3",
          track: `tgic`,
        },
        {
          index: "B1",
          track: `up-rah`,
        },
        {
          index: "B2",
          track: `br-stand-along`,
        },
        {
          index: "B3",
          track: `tgic`,
        },
      ],
      releases: `Original 1999 UK cassette`,
    },
    {
      tracks: [
        {
          track: `up-rah-edit`,
        },
        { track: `tgic` },
      ],
      releases: `1999 EU 2-track CD`,
    },
    {
      tracks: [
        {
          track: `up-rah-edit`,
        },
        {
          track: `br-stand-along`,
        },
        { track: `up-rah-video`, enhanced: true },
        { track: `up-rah-video-making`, enhanced: true },
      ],
      releases: `French enhanced CD`,
    },
    {
      tracks: [
        {
          track: `up-rah`,
        },
        {
          track: `up-spencer`,
        },
        { track: `tsmgo-live-98` },
      ],
      releases: `UK promo CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `up-club`,
        },
        {
          index: "B",
          track: `up-rah`,
        },
      ],
      releases: `UK promo 12"`,
    },
    {
      tracks: [
        {
          track: `up-rah-edit`,
        },
        {
          track: `up-spencer`,
        },
        { track: `up-knebworth-mix` },
      ],
      releases: `2010 "Singles collection 4" CD`,
    },
  ],
};

export default data;
