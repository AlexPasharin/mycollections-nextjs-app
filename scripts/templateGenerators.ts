export function singleDataContentTemplate({
  singleName,
  compositionNames,
}: {
  singleName: string;
  compositionNames: string[];
}) {
  const { name, id } = processCompositionName(singleName);

  const tracks = compositionNames.map((cn) => {
    const { name, id } = processCompositionName(cn);

    return `    {
      name: \`${name}\`,
      versions: [{ id: \`${id}\`, releases: \`\`}],
    },`;
  });

  return `import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: \`${name}\`,
  discogs_url: "",
  releaseDate: "",
  tracks: [
${tracks.join("\n")}
  ],
  trackLists: [
    {
      tracks: [
        {
          track: \`${id}\`,
        },
      ],
      releases: \`\`,
    },
  ],
};

export default data;
`;
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
  artist: \`${artistName}\`,
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
    compositionNameWords.length > 1
      ? compositionNameWords.map((str) => str[0].toLowerCase()).join("")
      : compositionName.toLowerCase();

  return {
    name: compositionNameCapitalized,
    id: compositionID,
  };
}
