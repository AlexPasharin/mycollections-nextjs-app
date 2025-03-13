import fs from "fs";
import path from "path";

fixCompositions();

export function fixCompositions() {
  const outputDir = [
    process.cwd(),
    "data",
    "discography",
    "queen",
    "compositions",
  ];
  const compositionFiles = fs.readdirSync(path.join(...outputDir));

  const inputDir = [process.cwd(), "data", "compositions"];

  console.log(compositionFiles);

  compositionFiles.forEach((fileName) => {
    const content = fs.readFileSync(path.join(...[...outputDir, fileName]), {
      encoding: "utf-8",
    });
    let lines = content.split("\n");

    if (!lines[0]?.length) {
      lines = lines.slice(1);
    }

    const fixedLines = [
      ...lines.slice(0, 4),
      '  artist: "Queen",',
      ...lines.slice(4),
    ];
    fs.writeFileSync(
      path.join(...[...inputDir, fileName]),
      fixedLines.join("\n")
    );
  });
}
