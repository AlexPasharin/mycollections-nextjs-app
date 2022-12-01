import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Hammer To Fall`,
  discogs_url: "https://www.discogs.com/master/14241-Queen-Hammer-To-Fall",
  tracks: [
    {
      name: `Hammer To Fall`,
      versions: [
        { id: `htf-edit`, releases: '7" releases and Capitol promo 12"' },
        { id: `htf-ext`, releases: '12" releases' },
        { id: `htf-malouf`, releases: "1992 Hollywood Records promo CD" },
        { id: `htf-malouf-edit`, releases: "1992 Hollywood Records promo CD" },
      ],
    },
    {
      name: `Tear It Up`,
      versions: [
        {
          id: `tiu`,
          releases: `not Capitol promo 7"/12"s, Peru promo 7" or 1992 Hollywood Records promo CD`,
        },
      ],
    },
    {
      name: `It's A Hard Life`,
      versions: [{ id: `iahl`, releases: `Peru promo 7"` }],
    },
    {
      name: `Bohemian Rhapsody`,
      versions: [
        { id: `br-stand-along`, releases: "1992 Hollywood Records promo CD" },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `htf-edit`,
        },
        {
          indexes: ["B", 2],
          track: "tiu",
        },
      ],
      releases: ['Original 1984 7"', '2010 "Singles collection 3" CD'],
    },
    {
      tracks: [
        {
          index: "A",
          track: `htf-ext`,
        },
        { index: "B", track: `tiu` },
      ],
      releases: 'Original 1984 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `htf-edit`,
        },
        { index: "A", track: `htf-edit` },
      ],
      releases: 'Capitol promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `htf-ext`,
        },
        { index: "B", track: `htf-edit` },
      ],
      releases: 'Capitol promo 12"',
    },
    {
      tracks: [
        {
          index: "A",
          track: `htf-edit`,
        },
        { index: "B", track: `iahl` },
      ],
      releases: 'Peru promo 7"',
    },
    {
      tracks: [
        {
          track: `htf-malouf`,
        },
        {
          track: `htf-malouf-edit`,
        },
        {
          track: `br-stand-along`,
        },
      ],
      releases: `"1992 Hollywood Records promo CD"`,
    },
  ],
};

export default data;
