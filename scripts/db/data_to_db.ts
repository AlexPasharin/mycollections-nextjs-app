import { values } from "ramda";
import { DBEntry2, DBRelease2 } from "../../types/entries";
import { NullableToOptional } from "../../types/utils";
import { getCountries, getEntries, insertReleases } from "../../db";
// import new_releases from "../../data/new";

const trimmedOrNull = (str: string | undefined | null): string | null =>
  str?.trim() || null;

const formatComment = (comment: string | null): string | null => {
  if (!comment) {
    return null;
  }

  let trimmedComment = comment.trim();

  trimmedComment =
    trimmedComment.charAt(0).toUpperCase() + trimmedComment.substring(1);

  if (trimmedComment[trimmedComment.length - 1] !== ".") {
    trimmedComment += ".";
  }

  return trimmedComment;
};

type Release = Omit<
  NullableToOptional<DBRelease2>,
  // | "countries"
  | "cat_numbers"
  | "matrix_runout"
  | "tags"
  | "parent_releases"
  | "speed"
  | "entry_id"
  | "comment"
  | "release_date"
  | "countries"
> & {
  comment?: string | null;
  release_date?: string | null;
  countries?: unknown;
  cat_numbers?: unknown;
  matrix_runout?: unknown;
  tags?: unknown;
  parent_releases?: unknown;
  speed?: unknown;
};

type Entry = Omit<
  NullableToOptional<DBEntry2>,
  "parent_entries" | "type" | "artist_id" | "tags"
> & { tags?: unknown; releases?: Release[] };

import("../../data/new_entries").then(async (entries) => {
  // const entriesToCreate = entries.default.map((e) => {
  //   const { releases, release, ...rest } = e;

  //   return { ...rest, part_of_queen_collection: false };
  // });

  // //   Object.values<Entry[] | undefined>(entries || [])
  // //     .flat()
  // //     .filter((a): a is Entry => Boolean(a))
  // //     .map((e) => ({
  // //       id: e.id,
  // //       name: e.name,
  // //       release_date: e.release_date?.trim() || null,
  // //       artist_id: _id,
  // //       entry_artist_id: e.entry_artist_id || null,
  // //       comment: formatComment(e.comment || null),
  // //       discogs_url: e.discogs_url?.trim() || null,
  // //       part_of_queen_collection: true,
  // //       relation_to_queen: e.relation_to_queen?.trim() || null,
  // //       tags: e.tags ? JSON.stringify(e.tags) : null,
  // //       entry_artist_name: e.entry_artist_name?.trim() || null,
  // //     }))
  // // );

  // await insertEntries(entriesToCreate);
  // await insertUpdates(entriesToUpdate);

  // return;
  const dbCountries = await getCountries();

  const processCountries = (countries: unknown): string | null => {
    if (countries == null) {
      return null;
    }

    if (typeof countries !== "string") {
      return JSON.stringify(countries);
    }

    const dbCountry = dbCountries.find(
      ({ id, name }) => id === countries || name == countries
    );

    if (!dbCountry) {
      throw `No corresponding country for ${countries} in DB`;
    }

    return JSON.stringify(dbCountry.id);
  };
  const allEntries = await getEntries();

  const releases_to_insert = entries.default.flatMap((entry) => {
    const dbEntry = allEntries.find(
      ({ artist_id, name, type }) =>
        entry.artist_id === artist_id &&
        entry.name === name &&
        entry.type === type
    )!;

    const { release, releases } = entry;

    return (releases || [release]).map((r: any) => ({
      entry_id: dbEntry.id,
      name: trimmedOrNull(r.name),
      version: r.version,
      format: r.format,
      discogs_url: trimmedOrNull(r.discogs_url),
      release_date: trimmedOrNull(r.release_date),
      countries: processCountries(r.countries),
      cat_numbers: r.cat_numbers ? JSON.stringify(r.cat_numbers) : null,
      matrix_runout: r.matrix_runout ? JSON.stringify(r.matrix_runout) : null,
      // comment: formatComment(r.comment || null),
      // condition_problems: trimmedOrNull(r.condition_problems),
      // release_artist_id: trimmedOrNull(r.release_artist_id),
      // relation_to_queen: r.relation_to_queen?.trim() || null,
      tags: r.tags ? JSON.stringify(r.tags) : null,
      // parent_releases: r.parent_releases
      //   ? JSON.stringify(r.parent_releases)
      //   : null,
      // jukebox_hole: r.jukebox_hole || false,
      // picture_sleeve: r.picture_sleeve || true,
      // speed: r.speed ? JSON.stringify(r.speed) : null,
      part_of_queen_collection: false,
      // part_of_queen_collection: r.part_of_queen_collection,
    }));
  });

  // const releases = releases.default.flatMap(({ _id, entries }) =>
  //   Object.values<Entry[] | undefined>(entries || [])
  //     .flat()
  //     .filter((a): a is Entry => Boolean(a))
  //     .flatMap((e) => {
  //       const { id, releases } = e;

  // const new_releases = entries.default.flatMap(({release, releases,}) =>
  // ({
  //   id: r.id,
  //   entry_id: r.entry_id,
  //   // name: trimmedOrNull(r.name),
  //   version: r.version,
  //   format: r.format,
  //   discogs_url: trimmedOrNull(r.discogs_url),
  //   release_date: trimmedOrNull(r.release_date),
  //   countries: processCountries(r.countries),
  //   cat_numbers: r.cat_numbers ? JSON.stringify(r.cat_numbers) : null,
  //   matrix_runout: r.matrix_runout ? JSON.stringify(r.matrix_runout) : null,
  // comment: formatComment(r.comment || null),
  // condition_problems: trimmedOrNull(r.condition_problems),
  // release_artist_id: trimmedOrNull(r.release_artist_id),
  // part_of_queen_collection: true,
  // relation_to_queen: r.relation_to_queen?.trim() || null,
  // tags: r.tags ? JSON.stringify(r.tags) : null,
  // parent_releases: r.parent_releases
  //   ? JSON.stringify(r.parent_releases)
  //   : null,
  // jukebox_hole: r.jukebox_hole || false,
  // picture_sleeve: r.picture_sleeve || true,
  // speed: r.speed ? JSON.stringify(r.speed) : null,
  //   part_of_queen_collection: r.part_of_queen_collection,
  // }));
  // })
  // );

  // await updateReleases(new_releases);
  await insertReleases(releases_to_insert);
});
