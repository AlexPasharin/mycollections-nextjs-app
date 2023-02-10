import { attemptToMakeCompositionFiles } from "./addNewCompositionFileSkeleton";
import { singleDataContentTemplate } from "./templateGenerators";
import { attemptToMakeAFile } from "./utils";

addNewSingleFileSkeletons("Queen");

async function addNewSingleFileSkeletons(artistName: string) {
  let args = process.argv.slice();

  const makeCompositionFileForSingleName =
    args[args.length - 1] !== "--no-track";

  args = makeCompositionFileForSingleName
    ? args
    : args.slice(0, args.length - 1);

  const names = args
    .slice(2)
    .join(" ")
    .split(",")
    .map((str) => str.trim())
    .filter(Boolean);

  if (!names.length) {
    console.error("NO ARGUMENTS GIVEN, ABORTING");
    process.exit(1);
  }

  const singleName = names[0].toLowerCase();

  const textContentsFilePath = `${process.cwd()}/textcontents/queen/discography/singles/${singleName}.md`;
  const singleDataFilePath = `${process.cwd()}/data/queen/discography/singles/${singleName}.ts`;

  await attemptToMakeAFile({
    path: textContentsFilePath,
    fileExistsLogMessage: `Text content file ${textContentsFilePath} already exists`,
    content: "",
    errorMessage: `Could not make text content file for ${singleName}`,
  });

  const compositionNames = makeCompositionFileForSingleName
    ? names
    : names.slice(1);

  await attemptToMakeAFile({
    path: singleDataFilePath,
    fileExistsLogMessage: `Single data content file ${singleDataFilePath} already exists`,
    content: singleDataContentTemplate({ singleName, compositionNames: names }),
    errorMessage: `Could not make single data content file for ${singleName}`,
  });

  await attemptToMakeCompositionFiles(compositionNames, artistName);
}
