export type DBArtist = {
  id: number;
  name: string;
};

export type DBArtist2 = {
  id: string;
  name: string;
  name_for_sorting: string | null;
  parent_artists: unknown;
  other_names: unknown;
};
