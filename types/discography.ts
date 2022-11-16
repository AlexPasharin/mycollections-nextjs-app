type VersionID = string;

type TrackVersion = {
  id: VersionID;
  versionName?: string;
  parentVersion?: VersionID;
};

export interface Composition {
  name: string;
  versions: TrackVersion[];
}

type TrackIndex = string | number;
type TrackIndexes = { index: TrackIndex } | { indexes: TrackIndex[] };

type Track = TrackIndexes & {
  track: string;
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
    releases?: string;
  }[];
} & {
  trackLists: {
    tracks: string[];
    releases: string[];
  }[];
};
