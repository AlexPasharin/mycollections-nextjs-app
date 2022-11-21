type VersionID = string;

export interface TrackVersion {
  id: VersionID;
  versionName: string;
  parentVersion?: VersionID;
  artist?: string;
}

export interface Composition {
  name: string;
  artist: string;
  versions: TrackVersion[] | [{ id: VersionID }, ...TrackVersion[]];
}

type TrackIndex = string | number;
type TrackIndexes = { indexes: TrackIndex[] } | { index?: TrackIndex };

type Track = TrackIndexes & {
  track: string;
  comment?: string;
};

export interface TrackList {
  tracks: Track[];
  releases: string | string[];
}

export interface DiscographyEntryData {
  title: string;
  discogs_url: string;
  tracks: {
    name: string;
    versions: {
      id: VersionID;
      releases?: string;
    }[];
  }[];
  trackLists: TrackList[];
}

export type SingleEntryData = Omit<
  DiscographyEntryData,
  "tracks" | "trackLists"
> & {
  textContent: string;
} & {
  tracks: {
    name: string;
    releases: string | null;
    artist: string | null;
  }[];
} & {
  trackLists: {
    tracks: { index: string; name: string; artist: string | null }[];
    releases: string[];
  }[];
};
