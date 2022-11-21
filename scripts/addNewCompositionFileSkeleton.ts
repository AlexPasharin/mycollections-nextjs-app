import { compositionDataContentTemplate } from "./templateGenerators";
import { attemptToMakeAFile } from "./utils";

if (require.main === module) {
  addNewCompositionFileSkeletons("Queen");
}

async function addNewCompositionFileSkeletons(artistName: string) {
  const compositionNames = process.argv
    .slice(2)
    .join(" ")
    .split(",")
    .map((str) => str.trim());

  await attemptToMakeCompositionFiles(compositionNames, artistName);
}

export async function attemptToMakeCompositionFiles(
  compositionNames: string[],
  artistName: string
) {
  for await (const compositionName of compositionNames) {
    const path = `${process.cwd()}/data/compositions/${compositionName}.ts`;

    await attemptToMakeAFile({
      path,
      fileExistsLogMessage: `Composition content data file ${path} already exists`,
      content: compositionDataContentTemplate({ compositionName, artistName }),
      errorMessage: `Could not make composition content data file for ${compositionName}`,
    });
  }
}
