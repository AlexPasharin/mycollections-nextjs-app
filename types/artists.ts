export type DBArtist = {
  id: string;
  name: string;
  parentArtists?: string[] | null;
  nameForSorting?: string | null;
  otherNames?: string[] | null;
};
