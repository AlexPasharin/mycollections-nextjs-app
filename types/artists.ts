export type DBArtist = {
  id: number;
  name: string;
};

export type DBArtist2 = {
  id: string;
  name: string;
  parentArtists?: string[] | null;
  nameForSorting?: string | null;
  otherNames?: string[] | null;
};
