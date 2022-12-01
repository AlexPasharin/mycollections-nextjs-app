type VersionID = string;

export interface TrackVersion {
  id: VersionID;
  versionName?: string;
  parentVersion?: VersionID;
  artist?: string;
  trackName?: string; // in case name is different from composition name
  foreignCompositions?: string[]; // in case version is also part of another compositions' versions
}

export interface Composition {
  name: string;
  artist: string;
  versions: TrackVersion[];
}

type TrackIndex = string | number;
type TrackIndexes = { indexes: TrackIndex[] } | { index?: TrackIndex };

type Track = TrackIndexes & {
  track: string | string[];
  comment?: string;
};

export interface TrackList {
  tracks: Track[];
  releases?: string | string[];
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

export type ExtendedDiscographyEntryData = Omit<
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
    tracks: { index: string; track_html: string }[];
    releases: string[] | null;
  }[];
};
