import { existsSync, writeFile, writeFileSync } from "fs";
import { ensureDirSync, writeJson } from "fs-extra";
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

export async function writeToJsonFile(obj: unknown, outputJsonPath: string) {
  const compressFilePath = join("data", `${outputJsonPath}.json`);

  const outputFilePathParts = compressFilePath.split(sep);
  const fileName = outputFilePathParts.pop();

  if (!fileName) {
    throw `Incorrect path ${outputJsonPath}: empty file name`;
  }

  const debugOutputFileDirectory = join(...outputFilePathParts, "debug");
  const debugFilePath = join(debugOutputFileDirectory, fileName);

  ensureDirSync(debugOutputFileDirectory);

  await Promise.all([
    writeJson(compressFilePath, obj),
    writeJson(debugFilePath, obj, { spaces: 2 }),
  ]);
}

function promptForYes(question: string): Promise<boolean> {
  return prompt(question).then((input) => input[0].toLowerCase() === "y");
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
