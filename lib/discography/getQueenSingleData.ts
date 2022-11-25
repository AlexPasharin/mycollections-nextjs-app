import fs from "fs";
import path from "path";
import showdown from "showdown";

import type {
  Composition,
  DiscographyEntryData,
  SingleEntryData,
  TrackVersion,
} from "types/discography";

const mdConverter = new showdown.Converter({
  simplifiedAutoLink: true,
  openLinksInNewWindow: true,
});

export default async function getQueenSingleData(
  name: string
): Promise<SingleEntryData | null> {
  try {
    const queenSinglesTextContentsDirectory = path.join(
      process.cwd(),
      "textcontents",
      "queendiscography",
      "singles"
    );

    const textContentFilePath = path.join(
      queenSinglesTextContentsDirectory,
      `${name}.md`
    );

    const singleDataFilePath = path.join(
      "discography",
      "queen",
      "singles",
      `${name}.ts`
    );

    const [textContent, dataFileContent] = await Promise.all([
      readFilePromise(textContentFilePath).then((md) =>
        mdConverter.makeHtml(md)
      ),
      getDefaultExport<DiscographyEntryData>(singleDataFilePath),
    ]);

    const tracksUsedInSingleReleases = await Promise.all(
      dataFileContent.tracks.map(async (track) => {
        const { name, versions } = track;

        const compositionData = await getDefaultExport<Composition>(
          path.join("compositions", name.toLowerCase())
        );

        return versions.map(({ id, releases }) => {
          const version = compositionData.versions.find((v) => v.id === id);

          if (!version) {
            throw `Could not find version with ${id} for composition ${name}`;
          }

          const { versionName, artist, trackName } = version;
          const compositionName = trackName || compositionData.name;

          return {
            id,
            name: versionName
              ? `${compositionName} (${versionName})`
              : compositionName,
            releases,
            artist,
          };
        });
      })
    ).then((tracks) => tracks.flat());

    // since we will need all tracks to construct trackLists and we will search for them by their id, possibly many times, this "optimizes" this search a bit
    const tracksMap = new Map(
      tracksUsedInSingleReleases.map((tr) => [tr.id, tr])
    );

    const trackLists = dataFileContent.trackLists.map(
      ({ tracks, releases }) => ({
        tracks: tracks.map(({ track, ...rest }, idx) => {
          const tracks = Array.isArray(track) ? track : [track];

          const trackIndex = (
            "indexes" in rest ? rest.indexes : [rest.index || idx + 1]
          )
            .map((i) => `${i}.`)
            .join(" \\ ");

          let trackName = tracks
            .map((tr) => {
              const trackData = tracksMap.get(tr);

              if (!trackData) {
                throw `Could not find trackData for ${track}`;
              }

              const { name, artist } = trackData;

              return `${artist ? `<i>${artist}</i> - ` : ""}${name}`;
            })
            .join(" / ");

          if (rest.comment) {
            trackName += ` (${rest.comment})`;
          }

          return { index: trackIndex, name, track_html: trackName };
        }),
        releases: Array.isArray(releases) ? releases : [releases],
      })
    );

    const result = {
      ...dataFileContent,
      textContent,
      tracks: tracksUsedInSingleReleases.map(({ name, releases, artist }) => ({
        name,
        releases: releases || null,
        artist: artist || null,
      })),
      trackLists,
    };

    return result;
  } catch (error) {
    console.error({ error });

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
