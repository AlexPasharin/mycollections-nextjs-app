import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `The Show Must Go On`,
  discogs_url: "https://www.discogs.com/master/19821-Queen-The-Show-Must-Go-On",
  tracks: [
    {
      name: `The Show Must Go On`,
      versions: [{ id: `tsmgo`, releases: `` }],
    },
    {
      name: `Keep Yourself Alive`,
      versions: [
        {
          id: `kya`,
          releases: `not 1991 UK special edition CD box or 2010 "Singles collection 4" CD`,
        },
      ],
    },
    {
      name: `Queen Talks`,
      versions: [
        {
          id: `qt`,
          releases: `12" and CD releases except for 1991 UK special edition CD box`,
        },
      ],
    },
    {
      name: `Body Language`,
      versions: [
        { id: `bl`, releases: `1991 standard CD (not special edition CD box)` },
      ],
    },
    {
      name: `Now I'm Here`,
      versions: [{ id: `nih`, releases: `1991 UK special edition CD box` }],
    },
    {
      name: `Fat Bottomed Girls`,
      versions: [{ id: `fbg`, releases: `1991 UK special edition CD box` }],
    },
    {
      name: `Las Palabras De Amor`,
      versions: [{ id: `lpda`, releases: `1991 UK special edition CD box` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `tsmgo`,
        },
        {
          index: "B",
          track: `kya`,
        },
      ],
      releases: [`Original 1991 7"`, `Italian 1994 7"`],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `tsmgo`,
        },
        {
          index: "A2",
          track: `kya`,
        },
        {
          index: "A3",
          track: `qt`,
        },
      ],
      releases: `Original 1991 UK etched one-sided 12"`,
    },
    {
      tracks: [
        {
          track: `tsmgo`,
        },
        {
          track: `kya`,
        },
        {
          track: `qt`,
        },
        {
          track: `bl`,
        },
      ],
      releases: `Original standard 1991 CD`,
    },
    {
      tracks: [
        {
          track: `tsmgo`,
        },
        {
          track: `nih`,
        },
        {
          track: `fbg`,
        },
        {
          track: `lpda`,
        },
      ],
      releases: `Original 1991 UK special edition CD box`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `tsmgo`,
        },
        {
          index: "A2",
          track: `kya`,
        },
        {
          index: "B1",
          track: `tsmgo`,
        },
        {
          index: "B2",
          track: `kya`,
        },
      ],
      releases: `Original 1991 cassette`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `tsmgo`,
        },
        {
          index: "A2",
          track: `lpda`,
        },
        {
          index: "B1",
          track: `kya`,
        },
        {
          index: "B2",
          track: `qt`,
        },
      ],
      releases: `1991 European 12"`,
    },
    {
      tracks: [
        {
          track: `tsmgo`,
        },
        { track: `qt` },
      ],
      releases: `2010 "Singles collection 4" CD`,
    },
  ],
};

export default data;
