import { values, uniq, flatten, identity, sortBy, pipe, map } from "ramda";
import queenReleases from "../../../data/enhanced_artists_fixes";

const entries = pipe(
  map((artistData: any) => values(artistData.entries || {})),
  flatten,
  map(({ tags = [], releases = [] }) =>
    releases.map((r: any) => r.tags || []).concat(tags)
  ),
  flatten,
  uniq,
  sortBy(identity)
)(queenReleases);

console.log(JSON.stringify(entries, null, 4));
