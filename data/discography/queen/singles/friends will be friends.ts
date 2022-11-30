import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Friends Will Be Friends`,
  discogs_url:
    "https://www.discogs.com/master/120474-Queen-Friends-Will-Be-Friends",
  tracks: [
    {
      name: `Friends Will Be Friends`,
      versions: [
        { id: `fwbf` },
        { id: `fwbf-ext`, releases: `12" releases and New Zealand cassette` },
      ],
    },
    {
      name: `Seven Seas Of Rhye`,
      versions: [
        {
          id: `ssor`,
          releases: `not Brazil/Australia/South Africa/New Zealand/Equador/Argentina releases or 2010 "singles collection 3" CD`,
        },
      ],
    },
    {
      name: `Gimme The Prize`,
      versions: [
        {
          id: `gtp`,
          releases: `Brazil/Australia/New Zealand/South Africa releases`,
        },
      ],
    },
    {
      name: `A Kind Of Magic`,
      versions: [{ id: `akom`, releases: `Ecuador 7"` }],
    },
    {
      name: `One Year Of Love`,
      versions: [{ id: `oyol`, releases: `Argentina promo 7"` }],
    },
    {
      name: `Princes Of The Universe`,
      versions: [{ id: `potu`, releases: `2010 "singles collection 3" CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `fwbf`,
        },
        {
          index: "B",
          track: `ssor`,
        },
      ],
      releases: `Original 1986 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `fwbf-ext`,
        },
        {
          index: "B1",
          track: `fwbf`,
        },
        {
          index: "B2",
          track: `ssor`,
        },
      ],
      releases: `Original 1986 12"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `fwbf`,
        },
        {
          index: "B",
          track: `gtp`,
        },
      ],
      releases: [`Australian 7"`, `South African 7"`],
    },
    {
      tracks: [
        {
          index: "A",
          track: `fwbf-ext`,
        },
        {
          index: "B1",
          track: `fwbf`,
        },
        {
          index: "B2",
          track: `gtp`,
        },
      ],
      releases: [
        `Australian 12"`,
        `South African 12"`,
        `Brazilian 12"`,
        `New Zealand 12"`,
      ],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `fwbf-ext`,
        },
        {
          index: "A2",
          track: `fwbf`,
        },
        {
          index: "A3",
          track: `gtp`,
        },
        {
          index: "B1",
          track: `fwbf-ext`,
        },
        {
          index: "B2",
          track: `fwbf`,
        },
        {
          index: "B3",
          track: `gtp`,
        },
      ],
      releases: `New Zealand cassette`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `fwbf`,
        },
        {
          index: "B",
          track: `akom`,
        },
      ],
      releases: `Ecuador 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `fwbf`,
        },
        {
          index: "B",
          track: `oyol`,
        },
      ],
      releases: `Argentina promo 7"`,
    },
    {
      tracks: [
        {
          track: `fwbf`,
        },
        {
          track: `potu`,
        },
      ],
      releases: `2010 "Singles collection 3" CD`,
    },
  ],
};

export default data;
