import { writeFileSync } from "fs";
import {
  find,
  groupBy,
  map,
  mapObjIndexed,
  omit,
  pipe,
  prop,
  sortBy,
  values,
} from "ramda";

import { getNonQueenEntries } from "../utils/db";

import type {
  NonQueenDBRelease,
  NonQueenRelease,
  NonQueenReleasesByArtist,
} from "../../types/non_queen";

getNonQueenEntries().then((releasesFlatArray: NonQueenDBRelease[]) => {
  const releasesByArtist: NonQueenReleasesByArtist[] = pipe(
    groupBy<NonQueenDBRelease>(prop("artist_name")),
    mapObjIndexed((releases, artistName) => ({
      artist: artistName,
      index_by: find((r) => !!r.index_by, releases)?.index_by || artistName,
      releases: pipe(
        map<NonQueenDBRelease, NonQueenRelease>( // for some reason this annotation is needed for correct type inference here
          ({ id, name, discogs_url, format, comment }) => ({
            id,
            name,
            format,
            discogs_url: discogs_url || undefined,
            comment: comment || undefined,
          })
        ),
        sortBy(prop("name"))
      )(releases),
    })),
    values,
    sortBy(prop("index_by")),
    map((artistData) => omit(["index_by"], artistData))
  )(releasesFlatArray);

  writeFileSync(
    "./data/non_queen/collection.json",
    JSON.stringify(releasesByArtist)
  );

  writeFileSync(
    "./data/non_queen/debug/collection.json",
    JSON.stringify(releasesByArtist, null, 2)
  );
});
