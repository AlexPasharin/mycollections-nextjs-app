import type { Composition } from "types/discography";

const data: Composition = {
  name: `We Are The Champions`,
  artist: `Queen`,
  versions: [
    {
      id: `watc`,
    },
    {
      id: `watc-mono`,
      versionName: "mono",
      parentVersion: "watc",
    },
    {
      id: "watc-video",
      versionName: "promo video",
    },
    { id: "watc-bush", versionName: "1991 promo version feat. George Bush" },
    {
      id: "watc-wembley",
      versionName: "Live At Wembley'86",
    },
    {
      id: "watc-qpr-return-champs",
      versionName: "Return Of The Champions live version",
      artist: "Queen + Paul Rodgers",
    },
    {
      id: "br-wwry-germany",
      versionName: "We Will Rock You German Cast musical - album version",
      artist: "We Will Rock You German Cast",
    },
  ],
};

export default data;
