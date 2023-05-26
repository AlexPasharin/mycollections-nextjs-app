import { trim } from "ramda";
import {
  dbConnection,
  getArtists,
  getArtistsNew,
  getQueenEntries,
  getEntries,
  getQueenReleases,
} from "../utils/db";

Promise.all([
  getQueenEntries(),
  getEntries(),
  getQueenReleases(),
  getArtists(),
  getArtistsNew(),
]).then(
  async ([oldEntries, newEntries, oldReleases, oldArtists, newArtists]) => {
    const newArtistsMap = newArtists.reduce<Record<string, string>>(
      (acc, artist) => ({ ...acc, [artist.name]: artist.id }),
      {}
    );

    const artistsMap = oldArtists.reduce<Record<string, number>>(
      (acc, artist) => {
        const { name, id } = artist;

        const newArtistID = newArtistsMap[name];

        if (!newArtistID) {
          throw `Artist ${name}, ${id} was not found in new artist table`;
        }

        return { ...acc, [newArtistID]: id };
      },
      {}
    );

    const newEntriesMap = newEntries.reduce<Record<string, string>>(
      (acc, entry) => {
        const { id, name, type, artist_id } = entry;
        const oldArtistID = artistsMap[artist_id];

        const key = `${name}-${type}-${oldArtistID}`;

        if (acc[key]) {
          throw `Key ${key} is already in use`;
        }

        return { ...acc, [key]: id };
      },
      {}
    );

    const entriesIDsMap = oldEntries.reduce<Record<number, string>>(
      (acc, entry) => {
        const { id, name, type, artist_id } = entry;

        const entryKey = `${name}-${type}-${artist_id}`;

        const newEntryID = newEntriesMap[entryKey];

        if (!newEntryID) {
          throw `Key ${entryKey} not found in newEntriesMap`;
        }

        return { ...acc, [id]: newEntryID };
      },
      {}
    );

    const newReleases = oldReleases.map((release) => {
      const {
        entry_id,
        name,
        format,
        release_date,
        version,
        country,
        label,
        cat_number,
        comment,
        discogs_url,
        condition_problems,
      } = release;

      const commentBreakdownMatch = comment?.match(
        /(?:Matrix(?:.*)runout(?:[:\s]*))([^\.]*)(?:\.?)/i
      );

      const matrix_runout = commentBreakdownMatch?.[1];

      let commentLeft = commentBreakdownMatch
        ? comment?.replace(commentBreakdownMatch?.[0], "")
        : comment;

      const jukeboxHoleMatch = commentLeft?.match(
        /jukebox hole(?:[\.,]?)/i
      )?.[0];

      if (jukeboxHoleMatch) {
        commentLeft = commentLeft?.replace(jukeboxHoleMatch, "");
      }

      const speedMatch = commentLeft?.match(/(33|45)(?:\s+)(?:RPM)(?:[\.,]?)/i);

      if (speedMatch) {
        commentLeft = commentLeft?.replace(speedMatch?.[0], "");
      }

      const speed = speedMatch ? `${speedMatch?.[1]}RPM` : null;

      const noPictureSleeveMatch = commentLeft?.match(
        /no picture sleeve(?:[\.,]?)/i
      )?.[0];

      if (noPictureSleeveMatch) {
        commentLeft = commentLeft?.replace(noPictureSleeveMatch, "");
      }

      commentLeft = commentLeft ? trimAllSpaces(commentLeft) : null;

      return {
        entry_id: entriesIDsMap[entry_id],
        name,
        version,
        format,
        discogs_url,
        release_date,
        countries: JSON.stringify(country),
        cat_numbers: JSON.stringify({ label, cat_number }),
        matrix_runout: JSON.stringify(matrix_runout),
        comment: commentLeft,
        condition_problems,
        part_of_queen_collection: true,
        jukebox_hole: jukeboxHoleMatch ? true : null,
        picture_sleeve: noPictureSleeveMatch ? false : true,
        speed: JSON.stringify(speed),
      };
    });

    const connection = dbConnection();

    //    await connection("releases_2").insert(newReleases);

    // await Promise.all(
    //   entries.map((entry) => {
    //     const { name, type, release_date, artist_id, entry_artist_id } = entry;

    //     const artistID = artistsMap[artist_id.toString()];
    //     const newEntryArtistID = entry_artist_id
    //       ? artistsMap[entry_artist_id.toString()]
    //       : null;

    //     return connection("entries_2").insert({
    //       name,
    //       type,
    //       release_date,
    //       artist_id: artistID,
    //       entry_artist_id: newEntryArtistID,
    //       part_of_queen_collection: true,
    //     });
    //   })
    // );

    connection.destroy();
  }
);

// trims from the beginning and the end all the characters that print out as white space, but are not all white spaces (so trim function wont trim them)
// generated by chatgpt in 2023
function trimAllSpaces(str: string) {
  // Define an array of Unicode characters that may represent white space
  let whiteSpaceChars = [
    "\u0020", // Standard space
    "\u00A0", // Non-breaking space
    "\u1680", // Ogham space mark
    "\u180E", // Mongolian vowel separator
    "\u2000", // En quad
    "\u2001", // Em quad
    "\u2002", // En space
    "\u2003", // Em space
    "\u2004", // Three-per-em space
    "\u2005", // Four-per-em space
    "\u2006", // Six-per-em space
    "\u2007", // Figure space
    "\u2008", // Punctuation space
    "\u2009", // Thin space
    "\u200A", // Hair space
    "\u202F", // Narrow no-break space
    "\u205F", // Medium mathematical space
    "\u3000", // Ideographic space
    "\uFEFF", // Zero-width non-breaking space
    "\uFFEF", // Zero-width non-breaking space (BOM)
  ];

  // Build a regular expression that matches any of the white space characters
  let regexPattern =
    "^[" + whiteSpaceChars.join("") + "]+|[" + whiteSpaceChars.join("") + "]+$";
  let regex = new RegExp(regexPattern, "g");

  // Use the regular expression to trim the string
  return str.replace(regex, "");
}