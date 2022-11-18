import type { Composition } from "types/discography";

const data: Composition = {
  name: "Liar",
  versions: [
    {
      id: "liar",
    },
    { id: "liar-edit", versionName: '7" edit' },
    {
      id: "liar-edit-mono",
      versionName: '7" edit mono',
      parentVersion: "liar-edit",
    },
  ],
};

export default data;
