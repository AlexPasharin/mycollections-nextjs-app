import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Mustapha`,
  discogs_url: "https://www.discogs.com/master/266317-Queen-Mustapha",
  tracks: [
    {
      name: `Mustapha`,
      versions: [{ id: `mustapha` }],
    },
    {
      name: `Dead On Time`,
      versions: [{ id: `dot`, releases: `not Yugoslavian releases` }],
    },
    {
      name: `In Only Seven Days`,
      versions: [
        { id: `iosd`, releases: `Yugoslavian 7" (except the mispress)` },
      ],
    },
    {
      name: `Dreamer's Ball`,
      versions: [{ id: `db`, releases: `Yugoslavian mispress 7"` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: "mustapha",
        },
        {
          index: "B",
          track: "dot",
        },
      ],
      releases: 'Original 1979 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "mustapha",
        },
        {
          index: "B",
          track: "iosd",
        },
      ],
      releases: 'Yugoslavian 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "mustapha",
        },
        {
          index: "B",
          track: "db",
        },
      ],
      releases: 'Yugoslavian misspress 7"',
    },
  ],
};

export default data;
