import fs from "fs";
import rl from "readline";

export async function attemptToMakeAFile({
  path,
  fileExistsLogMessage,
  content,
  errorMessage,
}: {
  path: string;
  fileExistsLogMessage: string;
  content: string;
  errorMessage: string;
}): Promise<boolean> {
  const fileExists = fs.existsSync(path);

  let shouldContinue = true;

  if (fileExists) {
    console.log(fileExistsLogMessage + "\n\n");

    shouldContinue = await promptForYes(
      "Press Y if you want to continue and override this file\nAny other input will skip attempting to produce the file\n"
    );
  }

  if (shouldContinue) {
    return new Promise((resolve) => {
      fs.writeFile(path, content, (err: unknown) => {
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
