import { removeNulls } from "../../../mongodb/artists";
// import { DBEntry2 } from "../../../types/entries";
import { sortBy } from "ramda";
import {
  getArtistsNew,
  getEntries,
  getReleases,
  getCountries,
  getEntryTypes,
  getLabels,
} from "../../utils/db";
import { validateArtist } from "./validation/artists";
import { validateCountriesField } from "./validation/countries";
import { validateEntries } from "./validation/entries";
import { validateRelease } from "./validation/releases";

// import {
//   fromPairs,
//   groupBy,
//   indexBy,
//   mapObjIndexed,
//   omit,
//   prop,
//   propOr,
//   sortBy,
//   toPairs,
// } from "ramda";

// import { insertReleases } from "../../../mongodb/releases";

// Promise.all([
//   getArtistsNew(),
//   getEntries(),
//   getReleases(),
//   getEntryTypes(),
// ]).then(async ([artists, entries, releases, types]) => {
//   // group entries by artist
//   const entriesGroupedByArtists = groupBy(
//     (entry) => entry.artist_id.toString(),
//     entries
//   );

//   const releasesGroupedByEntries = groupBy(
//     (release) => release.entry_id.toString(),
//     releases
//   );

//   const entryTypesMap = indexBy(prop("id"), types);

//   const data = artists.reduce<MongoArtist[]>((acc, artist) => {
//     const entries = entriesGroupedByArtists[artist.id] || [];

//     const enhancedEntries = entries.reduce<DBEntry2[]>((acc, entry) => {
//       const releases = releasesGroupedByEntries[entry.id];

//       if (!releases) {
//         return acc;
//       }

//       return [
//         ...acc,
//         {
//           ...removeNulls(entry),
//           releases: sortBy(
//             propOr("2999", "release_date"),
//             releases.map((release) => ({
//               ...removeNulls(omit(["entry_id"], release)),
//               name: release.name || undefined,
//               part_of_queen_collection:
//                 release.part_of_queen_collection || undefined,
//               jukebox_hole: release.jukebox_hole || undefined,
//               picture_sleeve:
//                 release.picture_sleeve === false ? false : undefined,
//             }))
//           ),
//         },
//       ];
//     }, []);

//     if (!enhancedEntries.length) {
//       return acc;
//     }

//     const { id, ...rest } = artist;

//     const enhancedArtist = removeNulls({
//       ...rest,
//       _id: id,
//       entries: mapObjIndexed(
//         (entries) =>
//           sortBy(
//             propOr("2999", "release_date"),
//             entries.map((e) => ({
//               ...omit(["type", "artist_id"], e),
//               part_of_queen_collection: e.part_of_queen_collection || undefined,
//             }))
//           ),
//         groupBy<DBEntry2>(
//           (entry) => entryTypesMap[entry.type].name,
//           enhancedEntries
//         )
//       ),
//     });

//     enhancedArtist.entries = fromPairs(
//       sortBy(prop(0), toPairs(enhancedArtist.entries))
//     );

//     return [...acc, enhancedArtist];
//   }, []);

//   const sortedData = sortBy(
//     (artist) => artist.name_for_sorting || artist.name,
//     data
//   );

//   await insertReleases(sortedData);
// });

Promise.all([
  getArtistsNew(),
  getEntries(),
  getReleases(),
  getCountries(),
  getLabels(),
])
  .then(([artists, entries, releases, countries, labels]) => {
    const artistIDsSet = new Set(artists.map((a) => a.id));

    let validatedArtists = artists.map((a) => {
      const validatedArtist = validateArtist(a, artistIDsSet);

      if ("errors" in validatedArtist) {
        console.error(`Encountered validation errors on following artist:`);
        console.error(JSON.stringify(a, null, 4));
        console.error();
        console.error("Errors encountered:");
        validatedArtist.errors.forEach((e) => console.log(e));

        throw "Terminating";
      }

      return validatedArtist;
    });

    validatedArtists = sortBy(
      (artist) => artist.name_for_sorting || artist.name,
      validatedArtists
    );

    console.log(`Artists validated successfully`);

    // validate entries

    const entryIDSet = new Set(entries.map((a) => a.id));

    let validatedEntries = entries.map((e) => {
      const validatedEntry = validateEntries(e, entryIDSet);

      if ("errors" in validatedEntry) {
        console.error(`Encountered validation errors on following entry:`);
        console.error(JSON.stringify(e, null, 4));
        console.error();
        console.error("Errors encountered:");
        validatedEntry.errors.forEach((e) => console.log(e));

        throw "Terminating";
      }

      return validatedEntry;
    });

    console.log(`Entries validated successfully`);

    const releaseIDSet = new Set(releases.map((a) => a.id));

    const countriesMap = countries.reduce<Record<string, string | undefined>>(
      (acc, { id, name }) => ({ ...acc, [id]: name }),
      {}
    );

    const labelSet = new Set(labels.map((l) => l.name));

    const validatedReleases = releases.map((release) => {
      const validatedRelease = validateRelease(
        release,
        releaseIDSet,
        countriesMap,
        labelSet
      );

      if ("errors" in validatedRelease) {
        console.error(`Encountered validation errors on following release:`);
        console.error(JSON.stringify(release, null, 4));
        console.error();
        console.error("Errors encountered:");
        validatedRelease.errors.forEach((e) => console.log(e));

        throw "Terminating";
      }

      return validatedRelease;
    });

    // const catNumbersShapes = new Set(
    //   releases.map((r) => {
    //     const { cat_numbers, id } = r;
    //     if (Array.isArray(cat_numbers)) {
    //       console.log(id);
    //       return "array";
    //     }

    //     if (cat_numbers === null) {
    //       return "null";
    //     }

    //     if (typeof cat_numbers === "object") {
    //       return Object.keys(cat_numbers).sort().join(", ");
    //     }

    //     return typeof cat_numbers;
    //   })
    // );

    // console.log(catNumbersShapes);

    // const catNumbersArrShapes = new Set(
    //   releases
    //     .map(({ cat_numbers }) => cat_numbers)
    //     .filter((cat_numbers) => Array.isArray(cat_numbers))
    //     .map((cat_numbers) => {
    //       return (cat_numbers as any[])
    //         .map((c) => {
    //           if (c === null) {
    //             return "null";
    //           }

    //           if (typeof c === "object") {
    //             return Object.keys(c).sort().join(", ");
    //           }

    //           return typeof c;
    //         })
    //         .join("::");
    //     })
    // );

    // console.log(catNumbersArrShapes);

    console.log(`Releases validated successfully`);
  })
  .catch((e) => {
    console.error(e);
  });
