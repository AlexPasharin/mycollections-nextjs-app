export function singleDataContentTemplate({
  singleName,
}: {
  singleName: string;
}) {
  const { name, id } = processCompositionName(singleName);

  return `
import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "${name}",
  discogs_url: "",
  tracks: [
    {
      name: "${name}",
      versions: [{ id: "${id}" }],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: "${id}",
        },
      ],
      releases: "",
    },
  ],
};

export default data;`;
}

export function compositionDataContentTemplate({
  compositionName,
  artistName,
}: {
  compositionName: string;
  artistName: string;
}) {
  const { name, id } = processCompositionName(compositionName);

  return `
import type { Composition } from "types/discography";

const data: Composition = {
  name: \`${name}\`,
  artist: \`${artistName}\`
  versions: [
    {
      id: \`${id}\`,
    },
  ],
};

export default data;
`;
}

function processCompositionName(compositionName: string): {
  name: string;
  id: string;
} {
  const compositionNameWords = compositionName.split(" ");

  const compositionNameCapitalized = compositionNameWords
    .map((str) => str[0].toUpperCase() + str.slice(1).toLowerCase())
    .join(" ");

  const compositionID =
    compositionNameWords.length > 0
      ? compositionNameWords.map((str) => str[0].toLowerCase()).join("")
      : compositionName.toLowerCase();

  return {
    name: compositionNameCapitalized,
    id: compositionID,
  };
}
