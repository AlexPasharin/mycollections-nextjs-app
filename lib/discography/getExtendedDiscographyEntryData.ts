import fs from "fs";
import path from "path";
import showdown from "showdown";

import ts from "typescript";

import type {
  Composition,
  DiscographyEntryData,
  ExtendedDiscographyEntryData,
} from "types/discography";

const mdConverter = new showdown.Converter({
  simplifiedAutoLink: true,
  openLinksInNewWindow: true,
});

export default async function getExtendedDiscographyEntryData({
  artist,
  entryName,
  entryType,
}: {
  artist: string;
  entryName: string;
  entryType: string;
}): Promise<ExtendedDiscographyEntryData | null> {
  try {
    const textContentFilePath = path.join(
      process.cwd(),
      "textcontents",
      artist.toLowerCase(),
      "discography",
      entryType,
      `${entryName}.md`
    );

    const entryDataFilePath = path.join(
      artist.toLowerCase(),
      "discography",
      entryType,
      `${entryName}.ts`
    );

    const [textContent, dataFileContent] = await Promise.all([
      readFilePromise(textContentFilePath).then((md) =>
        mdConverter.makeHtml(md)
      ),
      getDefaultExport<DiscographyEntryData>(entryDataFilePath),
    ]);

    const tracksUsedInSingleReleases = await Promise.all(
      dataFileContent.tracks.map(async (track) => {
        const { name, versions } = track;

        const compositionData = await getDefaultExport<Composition>(
          path.join("compositions", `${name.toLowerCase()}.ts`)
        );

        const {
          versions: compositionVersions,
          name: compositionName,
          artist: compositionArtist,
        } = compositionData;

        return versions.map(({ id, releases }) => {
          const version = compositionVersions.find((v) => v.id === id);

          if (!version) {
            throw `Could not find version with ${id} for composition ${compositionName}`;
          }

          const { versionName, artist: versionArtist, trackName } = version;
          const name = trackName || compositionName;
          const trackArtist = versionArtist || compositionArtist;

          return {
            id,
            name: versionName ? `${name} (${versionName})` : name,
            releases,
            artist:
              trackArtist.toLowerCase() !== artist.toLowerCase()
                ? trackArtist
                : null,
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
          const trackIndex = (
            "indexes" in rest ? rest.indexes : [rest.index || idx + 1]
          )
            .map((i) => `${i}.`)
            .join(" \\ ");

          const isForeignAristTrack =
            "foreign_artist" in rest && rest.foreign_artist;

          let trackName;

          if (isForeignAristTrack) {
            trackName = `<i>${rest.artist}</i> - ${track}*`;
          } else {
            const tracks = Array.isArray(track) ? track : [track];

            trackName = tracks
              .map((tr) => {
                const trackData = tracksMap.get(tr!);

                if (!trackData) {
                  throw `Could not find trackData for ${track}`;
                }

                const { name, artist } = trackData;

                return `${artist ? `<i>${artist}</i> - ` : ""}${name}`;
              })
              .join(" / ");
          }

          if ("comment" in rest && rest.comment) {
            trackName += ` (${rest.comment})`;
          }

          if (rest.enhanced) {
            trackName = "Enhanced section: " + trackName;
          }

          return {
            index: trackIndex,
            name: entryName,
            track_html: trackName,
            isForeignAristTrack,
          };
        }),
        releases: Array.isArray(releases)
          ? releases
          : releases
          ? [releases]
          : null,
      })
    );

    const result = {
      ...dataFileContent,
      textContent,
      tracks: tracksUsedInSingleReleases.map(({ name, releases, artist }) => ({
        name,
        releases: releases || null,
        artist,
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
  const fileContents = await readFilePromise(`./data/${path}`);

  return eval(ts.transpile(fileContents));
}
