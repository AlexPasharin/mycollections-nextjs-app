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

import { writeToJsonFile } from "../utils";
import { getNonQueenEntries } from "../utils/db";

import type {
  NonQueenDBRelease,
  NonQueenRelease,
  NonQueenReleasesByArtist,
} from "../../types/non_queen";

getNonQueenEntries().then(async (releasesFlatArray) => {
  const releasesByArtist: NonQueenReleasesByArtist[] = pipe(
    groupBy<NonQueenDBRelease>(prop("artist_name")),
    mapObjIndexed((releases, artistName) => ({
      artist: artistName,
      index_by: find((r) => !!r.index_by, releases)?.index_by || artistName,
      releases: pipe(
        map<NonQueenDBRelease, NonQueenRelease>( // for some reason this annotation is needed for correct type inference here
          ({ discogs_url, comment, ...rest }) => ({
            ...rest,
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

  await writeToJsonFile(releasesByArtist, "non_queen/collection");
});
