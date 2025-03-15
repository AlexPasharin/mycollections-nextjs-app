import { existsSync, writeFile } from "fs";
import { ensureDirSync, readJson, writeJson } from "fs-extra";
import { join, sep } from "path";
import rl from "readline";

export async function attemptToMakeAFile({
  path,
  fileExistsLogMessage,
  content,
  errorMessage,
  skipExisting = false,
}: {
  path: string;
  fileExistsLogMessage: string;
  content: string;
  errorMessage: string;
  skipExisting?: boolean;
}): Promise<boolean> {
  const fileExists = existsSync(path);

  let shouldContinue = true;

  if (fileExists) {
    console.log(fileExistsLogMessage + "\n\n");

    shouldContinue = skipExisting
      ? false
      : await promptForYes(
          "Press Y if you want to continue and override this file\nAny other input will skip attempting to produce the file\n"
        );
  }

  if (shouldContinue) {
    return new Promise((resolve) => {
      writeFile(path, content, (err: unknown) => {
        if (err) {
          console.error(`${errorMessage}: ${err}`);

          resolve(false);
        } else {
          console.log(`Succesfully created file ${path}\n\n`);

          resolve(true);
        }
      });
    });
  }

  return Promise.resolve(false);
}

export async function writeToJsonFile(
  obj: unknown,
  outputJsonPath: string,
  options = { includeDebugCopy: true, compress: true }
) {
  const outputFilePath = join("data", `${outputJsonPath}.json`);

  const outputFilePathParts = outputFilePath.split(sep);
  const fileName = outputFilePathParts.pop();

  if (!fileName) {
    throw `Incorrect path ${outputJsonPath}: empty file name`;
  }

  const { compress, includeDebugCopy } = options;

  ensureDirSync(join(...outputFilePathParts));

  const writeFilePromise = writeJson(
    outputFilePath,
    obj,
    compress ? undefined : { spaces: 2 }
  );

  let writeDebugCopyPromise;

  if (includeDebugCopy) {
    const debugOutputFileDirectory = join(...outputFilePathParts, "debug");
    const debugFilePath = join(debugOutputFileDirectory, fileName);

    ensureDirSync(debugOutputFileDirectory);

    writeDebugCopyPromise = writeJson(debugFilePath, obj, { spaces: 2 });
  }

  await Promise.all([writeFilePromise, writeDebugCopyPromise]);
}

export async function readJSONFromFile(fileName: string) {
  return readJson(fileName);
}

function promptForYes(question: string): Promise<boolean> {
  return prompt(question).then((input) => input[0]?.toLowerCase() === "y");
}

function prompt(question: string): Promise<string> {
  const promptInterface = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    promptInterface.question(question, (input) => {
      resolve(input);

      promptInterface.close();
    });
  });
}
