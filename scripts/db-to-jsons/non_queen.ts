import { prop, sortBy } from "ramda";
import { readJSONFromFile, writeToJsonFile } from "../utils";
import {
  getArtistsNew,
  getNonQueenEntries,
  getEntries,
  getFormats,
} from "../utils/db";

Promise.all([
  getNonQueenEntries(),
  getArtistsNew(),
  getEntries(),
  getFormats(),
]).then(async ([nonQueenReleases, artists, entries, allFormats]) => {
  type Artist = typeof artists[number];

  const artistsMap = artists.reduce<Record<string, Artist>>(
    (acc, artist) => ({ ...acc, [artist.name]: artist }),
    {}
  );

  const newReleases = nonQueenReleases
    .map(({ name, artist_name, format, comment, discogs_url }) => {
      const artist = artistsMap[artist_name];

      const releaseEntry = entries.find(
        (e) => e.artist_id === artist.id && e.name === name
      )!;

      return {
        artist: artist.name_for_sorting || artist.name,
        entry_name: name,
        entry_id: releaseEntry.id,
        name: "",
        format,
        discogs_url,
        release_date: releaseEntry.release_date,
        version: "",
        countries: [],
        cat_numbers: { label: "", cat_number: "" },
        comment,
        condition_problems: null,
        release_artist_id: null,
        part_of_queen_collection: false,
        parent_releases: null,
      };
    })
    .sort((release1, release2) => {
      const artist1 = release1.artist;
      const artist2 = release2.artist;

      if (artist1 < artist2) {
        return -1;
      }

      if (artist1 > artist2) {
        return 1;
      }

      const rDate1 = release1.release_date;
      const rDate2 = release2.release_date;

      if (rDate1 < rDate2) {
        return -1;
      }

      if (rDate1 < rDate2) {
        return 1;
      }

      return 0;
    });

  const releasesJSON: { format: string }[] = await readJSONFromFile(
    "data/non_queen/releases.json"
  );
  const formats = releasesJSON.reduce(
    (acc, { format }) => acc.add(format),
    new Set()
  );

  formats.forEach((f) => {
    if (!allFormats.some((format) => format.id === f)) {
      console.error(f);
    }
  });

  // await writeToJsonFile(newReleases, "non_queen/releases", {
  //   includeDebugCopy: false,
  //   compress: false,
  // });
});
