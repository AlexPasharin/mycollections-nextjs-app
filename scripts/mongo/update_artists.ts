import {
  getArtists as getArtistsFromDB,
  getEntryTypes,
  getQueenEntries,
} from "../utils/db";
import {
  upsertArtists,
  getArtists as getArtistsFromMongo,
  deleteArtists,
  EnhancedArtist,
} from "../../mongodb/artists";
import {
  equals,
  fromPairs,
  groupBy,
  indexBy,
  mapObjIndexed,
  omit,
  pipe,
  prop,
  propOr,
  sortBy,
  toPairs,
} from "ramda";
import { DBEntry } from "../../types/entries";

/*
  Script to update collection of artists in mongoDB i.e. to sync it to postgres DB "master" data
*/
Promise.all([
  getArtistsFromDB(),
  getQueenEntries(),
  getEntryTypes(),
  getArtistsFromMongo(),
]).then(async ([dbArtists, dbEntries, dbEntryTypes, mongoArtists]) => {
  console.log("Amount of artists in DB:", dbArtists.length);
  console.log("Amount of artists in Mongo:", mongoArtists.length);

  const entryTypesMap = indexBy(prop("id"), dbEntryTypes);

  // group entries by artist first
  const entriesGroupedByArtists = groupBy(
    (entry) => entry.artist_id.toString(),
    dbEntries
  );

  const dbArtistsMap = indexBy(prop("id"), dbArtists);

  const artists = dbArtists.reduce<EnhancedArtist[]>((acc, artist) => {
    const entries = entriesGroupedByArtists[artist.id.toString()];

    if (!entries) {
      return acc; // TODO: Do we really want to exclude artists which have no entries, but have some entries with entry_artist_id equal to their id??
    }

    const entriesGroupedByType = pipe(
      // group all entries by artist further by the type
      groupBy<DBEntry>((entry) => entryTypesMap[entry.type].name),
      // get rid of redundant "type" and "artist_id" fields and include entryArtist only if it is not null
      mapObjIndexed(
        pipe(
          (entries) =>
            entries.map(({ entry_artist_id, ...rest }) => {
              const strippedEntry = omit(["type", "artist_id"], rest);
              const entryArtist =
                entry_artist_id !== null
                  ? dbArtistsMap[entry_artist_id].name
                  : null;

              return entryArtist
                ? { ...strippedEntry, entryArtist }
                : strippedEntry;
            }),
          // sort by release_date using lexicographical sorting, use "2999" for entries with unknown release date, so that they will end up in the end of the list
          sortBy(propOr("2999", "release_date")) // TODO: better sorting!
        )
      ),
      // order "entries" object properties (i.e. entry types) in alpabethical order
      toPairs<EnhancedArtist["entries"], string>,
      sortBy(prop(0)),
      fromPairs
    )(entries);

    return [...acc, { ...artist, entries: entriesGroupedByType }];
  }, []);

  const artistsMap = indexBy(prop("id"), artists);

  /*
    check if there are artists which are in mongo only
    they need to be deleted from mongo!
  */
  const artistsOnlyInMongo = mongoArtists.filter(({ _id }) => !artistsMap[_id]);

  await deleteArtists(artistsOnlyInMongo);

  const mongoArtistsMap = indexBy(prop("_id"), mongoArtists);

  const artistsToUpdate = artists.filter((artist) => {
    const mongoArtist = mongoArtistsMap[artist.id];

    if (!mongoArtist) {
      console.log("Does not exists in mongo:", artist);
    }

    return (
      !mongoArtist || !equals(omit(["id"], artist), omit(["_id"], mongoArtist))
    );
  });

  await upsertArtists(artistsToUpdate);
});
