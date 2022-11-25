import type { Composition } from "types/discography";

const data: Composition = {
  name: `Fat Bottomed Girls`,
  artist: `Queen`,
  versions: [
    {
      id: `fbg-single-edit`,
      versionName: "single edit",
    },
    {
      id: `fbg`,
    },
    {
      id: `fbg-br-promo-segue`,
      versionName: 'Electra 12" promo segue version',
      trackName: `Fat Bottomed Girls/Bicycle Race`,
      foreignCompositions: ["br"],
    },
    {
      id: `br-fbg-promo-segue`,
      versionName: 'Electra 12" promo segue version',
      trackName: `Bicycle Race/Fat Bottomed Girls`,
      foreignCompositions: ["br"],
    },
  ],
};

export default data;
