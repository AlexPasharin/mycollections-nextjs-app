const fs = require("fs");

function addNeweSingleFileSkeletons() {
  const singleName = process.argv.slice(2).join(" ").toLowerCase();

  const textContentsFilePath = `${process.cwd()}/textcontents/queendiscography/singles/${singleName}.txt`;
  const singleDataFilePath = `${process.cwd()}/data/discography/queen/singles/${singleName}.ts`;

  fs.writeFile(textContentsFilePath, "", (err: unknown) => {
    if (err) {
      console.error(
        `Could not make text content file for ${singleName}: ${err}`
      );
    }
  });

  fs.writeFile(
    singleDataFilePath,
    singleDataContentTemplate({ singleName }),
    (err: unknown) => {
      if (err) {
        console.error(
          `Could not make single data file for ${singleName}: ${err}`
        );
      }
    }
  );
}

addNeweSingleFileSkeletons();

function singleDataContentTemplate({ singleName }: { singleName: string }) {
  const singleNameWords = singleName.split(" ");
  const singleNameCapitalized = singleNameWords
    .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
    .join(" ");

  const singleTitleTrackVersion =
    singleNameWords.length > 0
      ? singleNameWords.map((str) => str[0].toLowerCase()).join("")
      : singleName.toLowerCase();

  return `
import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "${singleNameCapitalized}",
  discogs_url: "",
  tracks: [
    {
      name: "${singleNameCapitalized}",
      versions: [{ id: "${singleTitleTrackVersion}" }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: "${singleTitleTrackVersion}",
        },
      ],
      releases: "",
    },
  ],
};

export default data;`;
}
