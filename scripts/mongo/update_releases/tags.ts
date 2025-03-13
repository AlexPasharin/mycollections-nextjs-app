import { values, uniq, flatten, identity, sortBy, pipe, map } from "ramda";

export default function getTags(queenReleases: unknown[]) {
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
}
