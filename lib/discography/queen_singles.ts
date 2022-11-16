import fs from "fs";
import path from "path";

import type {
  Composition,
  DiscographyEntryData,
  SingleEntryData,
} from "types/discography";

export async function getQueenSingleData(
  name: string
): Promise<SingleEntryData | null> {
  try {
    const queenSinglesTextContentsDirectory = path.join(
      "textcontents",
      "queendiscography",
      "singles"
    );

    const textContentFilePath = path.join(
      queenSinglesTextContentsDirectory,
      `${name}.txt`
    );

    const singleDataFilePath = path.join(
      "discography",
      "queen",
      "singles",
      `${name}.ts`
    );

    const [textContent, dataFileContent] = await Promise.all([
      readFilePromise(textContentFilePath),
      getDefaultExport<DiscographyEntryData>(singleDataFilePath),
    ]);

    const tracksUsedInSingleReleases = await Promise.all(
      dataFileContent.tracks.map(async (track) => {
        const { name, versions } = track;

        const compositionData = await getDefaultExport<Composition>(
          path.join("discography", "queen", "compositions", name.toLowerCase())
        );

        return versions.map(({ id, releases }) => {
          const { versionName } = compositionData.versions.find(
            (v) => v.id === id
          )!; // should be found

          return {
            id,
            name: versionName ? `${name} (${versionName})` : name,
            releases,
          };
        });
      })
    ).then((tracks) => tracks.flat());

    const trackLists = dataFileContent.trackLists.map(
      ({ tracks, releases }) => ({
        tracks: tracks.map(({ track, ...rest }, idx) => {
          const trackData = tracksUsedInSingleReleases.find(
            (t) => t.id === track
          )!; // should be found

          const trackIndex = (
            "indexes" in rest ? rest.indexes : [rest.index || idx + 1]
          )
            .map((i) => `${i}.`)
            .join(" \\ ");

          return `${trackIndex} ${trackData.name}`;
        }),
        releases: Array.isArray(releases) ? releases : [releases],
      })
    );

    const result = {
      ...dataFileContent,
      textContent,
      tracks: tracksUsedInSingleReleases.map(({ name, releases }) => ({
        name,
        releases,
      })),
      trackLists,
    };

    return result;
  } catch (error) {
    console.error(error);

    return null;
  }
}

function readFilePromise(name: string) {
  return new Promise<string>((resolve, reject) =>
    fs.readFile(name, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    })
  );
}

async function getDefaultExport<T>(path: string): Promise<T> {
  const dynamicImport = await dynamicallyImportDataFile<{ default: T }>(path);

  return dynamicImport.default;
}

async function dynamicallyImportDataFile<T>(path: string): Promise<T> {
  return import(`data/${path}`);
}
