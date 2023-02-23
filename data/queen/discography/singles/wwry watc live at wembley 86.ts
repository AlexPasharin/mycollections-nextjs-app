import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `We Will Rock You / We Are The Champions Live at Wembley'86`,
  discogs_url:
    "https://www.discogs.com/master/282646-Queen-We-Will-Rock-You-We-Are-The-Champions-Live-At-Wembley-86",
  releaseDate: "1992.05",
  tracks: [
    {
      name: `We Will Rock You`,
      versions: [
        {
          id: `wwry-wembley-86-single-edit`,
          releases: `not Spanish promo 7" or French promo CD`,
        },
        {
          id: `wwry`,
          releases: `not Dutch cassette, French releases (except promo 12"), Spanish 7" or Spanish promo 7"`,
        },
      ],
    },
    {
      name: `We Are The Champions`,
      versions: [
        { id: `watc-wembley-86-single-edit` },
        {
          id: `watc`,
          releases: `not  Dutch cassette, French releases (except promo 12" and CD), Spanish 7" or Spanish promo 7"`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A1", 1],
          track: `wwry-wembley-86-single-edit`,
        },
        { indexes: ["A2", 2], track: `watc-wembley-86-single-edit` },
        {
          indexes: ["B1", 3],
          track: `wwry`,
        },
        {
          indexes: ["B2", 4],
          track: `watc`,
        },
      ],
      releases: [
        `Original 1992 Dutch 7"`,
        `Original 1992 Italian 7"`,
        `Original 1992 Italian 12"`,
        `Original 1992 Dutch CD`,
        `Original 1992 Australian CD`,
      ],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `wwry-wembley-86-single-edit`,
        },
        { index: "A2", track: `watc-wembley-86-single-edit` },
        {
          index: "B1",
          track: `wwry-wembley-86-single-edit`,
        },
        { index: "B2", track: `watc-wembley-86-single-edit` },
      ],
      releases: `Original 1992 Dutch cassette`,
    },
    {
      tracks: [
        { indexes: ["A", 1], track: `watc-wembley-86-single-edit` },
        {
          indexes: ["B", 2],
          track: `wwry-wembley-86-single-edit`,
        },
      ],
      releases: [`Original 1992 French 7"`, `Original 1992 French CD`],
    },
    {
      tracks: [
        {
          index: "A1",
          track: `watc-wembley-86-single-edit`,
        },
        { index: "A2", track: `wwry-wembley-86-single-edit` },
        {
          index: "B1",
          track: `watc-wembley-86-single-edit`,
        },
        { index: "B2", track: `wwry-wembley-86-single-edit` },
      ],
      releases: `Original 1992 French cassette`,
    },
    {
      tracks: [
        {
          track: `watc`,
        },
        {
          track: `watc-wembley-86-single-edit`,
        },
      ],
      releases: `1992 French promo CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `watc`,
        },
        { index: "A2", track: `watc-wembley-86-single-edit` },
        {
          index: "B1",
          track: `wwry`,
        },
        { index: "B2", track: `wwry-wembley-86-single-edit` },
      ],
      releases: `1992 French promo 12"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `wwry-wembley-86-single-edit`,
        },
        { index: "B", track: `watc-wembley-86-single-edit` },
      ],
      releases: `Original 1992 Spanish 7"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `watc-wembley-86-single-edit`,
        },
        { index: "B", track: `watc-wembley-86-single-edit` },
      ],
      releases: `1992 Spanish promo 7"`,
    },
  ],
};

export default data;
