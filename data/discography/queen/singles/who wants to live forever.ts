import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Who Wants To Live Forever`,
  discogs_url:
    "https://www.discogs.com/master/14452-Queen-Who-Wants-To-Live-Forever",
  tracks: [
    {
      name: `Who Wants To Live Forever`,
      versions: [
        { id: `wwtlf-single-edit`, releases: `not Dutch 1992 re-issues` },
        { id: `wwtlf`, releases: `12" releases and New Zealand cassette` },
        {
          id: `wwtlf-piano`,
          releases: `12" releases, New Zealand cassette and 2010 "Singles collection 3" CD`,
        },
        { id: `wwtlf-gh2-edit`, releases: `Dutch 1992 re-issues` },
      ],
    },
    {
      name: `Killer Queen`,
      versions: [
        {
          id: `kq`,
          releases: `not New Zealand releases, Dutch 1992 re-issues or 2010 "Singles collection 3" CD`,
        },
      ],
    },
    {
      name: `Don't Lose Your Head`,
      versions: [{ id: `dlyh`, releases: `New Zealand releases` }],
    },
    {
      name: `Friends Will Be Friends`,
      versions: [{ id: `fwbf`, releases: `Dutch 1992 re-issues` }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `wwtlf-single-edit`,
        },
        {
          index: "B",
          track: `kq`,
        },
      ],
      releases: `Original 1986 7"`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `wwtlf-single-edit`,
        },
        {
          index: "A2",
          track: `wwtlf`,
        },
        {
          index: "B1",
          track: `kq`,
        },
        {
          index: "B2",
          track: `wwtlf-piano`,
        },
      ],
      releases: `Original 1986 12"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `wwtlf-single-edit`,
        },
        {
          index: "B",
          track: `dlyh`,
        },
      ],
      releases: `New Zealand 7"`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `wwtlf-single-edit`,
        },
        {
          index: "A2",
          track: `wwtlf`,
        },
        {
          index: "B1",
          track: `dlyh`,
        },
        {
          index: "B2",
          track: `wwtlf-piano`,
        },
      ],
      releases: `New Zealand 12"`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `wwtlf-single-edit`,
        },
        {
          index: "A2",
          track: `wwtlf`,
        },
        {
          index: "A3",
          track: `dlyh`,
        },
        {
          index: "A4",
          track: `wwtlf-piano`,
        },
        {
          index: "B1",
          track: `wwtlf-single-edit`,
        },
        {
          index: "B2",
          track: `wwtlf`,
        },
        {
          index: "B3",
          track: `dlyh`,
        },
        {
          index: "B4",
          track: `wwtlf-piano`,
        },
      ],
      releases: `New Zealand cassette`,
    },
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: `wwtlf-gh2-edit`,
        },
        {
          indexes: ["B", 2],
          track: `fwbf`,
        },
      ],
      releases: ['Dutch 1992 7"', "Dutch 1992 CD"],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `wwtlf-gh2-edit`,
        },
        {
          index: "A2",
          track: `fwbf`,
        },
        {
          index: "B1",
          track: `wwtlf-gh2-edit`,
        },
        {
          index: "B2",
          track: `fwbf`,
        },
      ],
      releases: "Dutch 1992 cassette",
    },
    {
      tracks: [
        {
          track: `wwtlf-single-edit`,
        },
        {
          track: `wwtlf-piano`,
        },
      ],
      releases: `2010 "Singles collection 3" CD`,
    },
  ],
};

export default data;
