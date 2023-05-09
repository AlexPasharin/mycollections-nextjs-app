export type DBArtist = {
  id: number;
  name: string;
};

export type DBArtist2 = {
  id: string;
  name: string;
  parent_artists?: string[] | null;
  name_for_sorting?: string | null;
  other_names?: string[] | null;
};
