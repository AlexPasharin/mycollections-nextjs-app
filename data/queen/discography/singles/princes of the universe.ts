import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Princes Of The Universe`,
  discogs_url:
    "https://www.discogs.com/master/18260-Queen-Princes-Of-The-Universe",
  tracks: [
    {
      name: `Princes Of The Universe`,
      versions: [
        { id: `potu` },
        { id: `potu-video`, releases: `2000 Dutch CD` },
      ],
    },
    {
      name: `A Dozen Red Roses For My Darling`,
      versions: [
        {
          id: `adrrfmd`,
          releases: `Capitol releases, except for 7"/12" promos`,
        },
      ],
    },
    {
      name: `Gimme The Prize`,
      versions: [{ id: `gtp`, releases: `Australian 7"` }],
    },
    {
      name: `Who Wants To Live Forever`,
      versions: [{ id: `wwtlf-single-edit`, releases: `Japanese 7"` }],
    },
    {
      name: `Was It All Worth It`,
      versions: [{ id: `wiawi`, releases: `2000 Dutch CD` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `potu`,
        },
        {
          index: "B",
          track: `adrrfmd`,
        },
      ],
      releases: `Original 1986 Capitol 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `potu`,
        },
        {
          index: "B",
          track: `potu`,
        },
      ],
      releases: [`Capitol promo 7"`, `Capitol promo 12"`],
    },
    {
      tracks: [
        {
          index: "A",
          track: `potu`,
        },
        {
          index: "B",
          track: `gtp`,
        },
      ],
      releases: `Australian 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `potu`,
        },
        {
          index: "B",
          track: `wwtlf-single-edit`,
        },
      ],
      releases: `Japanese 7"`,
    },
    {
      tracks: [
        {
          track: "potu",
        },
        {
          track: "wiawi",
        },
        {
          track: "potu-video",
          enhanced: true,
        },
      ],
      releases: `2000 Dutch CD`,
    },
  ],
};

export default data;
