import type { Composition } from "types/discography";

const data: Composition = {
  name: `Bicycle Race`,
  artist: `Queen`,
  versions: [
    {
      id: `br`,
    },
    { id: `br-mono`, versionName: "mono", parentVersion: "br" },
    {
      id: `fbg-br-promo-segue`,
      versionName: 'Electra 12" promo segue',
      trackName: `Fat Bottomed Girls\\Bicycle Race`,
      foreignCompositions: ["fbg"],
    },
    {
      id: `br-fbg-promo-segue`,
      versionName: 'Electra 12" promo segue',
      trackName: `Bicycle Race\\Fat Bottomed Girls`,
      foreignCompositions: ["fbg"],
    },
  ],
};

export default data;
