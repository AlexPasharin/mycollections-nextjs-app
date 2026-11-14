import type {
  artists as Artist,
  alternative_artist_names as AlternativeArtistName,
  musical_entries as MusicalEntry,
  types_of_musical_entries as TypesOfMusicalEntries,
  musical_releases as MusicalRelease,
  musical_entry_types as MusicalEntryType,
  formats_of_releases as FormatsOfReleases,
  releases_formats as ReleasesFormat,
  alternative_musical_entry_names as AlternativeMusicalEntryName,
  musical_entries_tags as MusicalEntriesTag,
  musical_releases_tags as MusicalReleasesTag,
  tags as Tag,
} from "generated/prisma/client";
import { prisma } from "./client";

export type ArtistWithAlternativeNames = Artist & {
  alternative_artist_names: AlternativeArtistName[];
};

export const getAllArtists = async (): Promise<ArtistWithAlternativeNames[]> =>
  prisma.artists.findMany({
    include: { alternative_artist_names: true },
  });

export const getArtistNames = async (): Promise<Array<Pick<Artist, "name">>> =>
  prisma.artists.findMany({
    select: { name: true },
  });


export const getArtistByName = async (
  artistName: string
): Promise<ArtistWithAlternativeNames | null> =>
  prisma.artists.findFirst({
    where: {
      name: artistName,
    },
    include: { alternative_artist_names: true },
  });

export const getArtistNameByAlternativeName = async (
  alternativeName: string
): Promise<string | null> => {
  const match = await prisma.alternative_artist_names.findFirst({
    where: { name: alternativeName },
    select: { artists: { select: { name: true } } },
  });

  return match?.artists.name ?? null;
};


export type ArtistEntryChildRelease = {
  release_version: string;
  displayName: string;
  releaseArtistName: string | null;
};

export type ArtistEntryRelease = MusicalRelease & {
  alternative_musical_entry_names: AlternativeMusicalEntryName | null;
  formats_of_releases: Array<FormatsOfReleases & { releases_formats: ReleasesFormat }>;
  musical_releases_tags: Array<MusicalReleasesTag & { tags: Tag }>;
  child_releases: ArtistEntryChildRelease[];
}

export type ArtistEntry = MusicalEntry & {
  alternative_musical_entry_names: AlternativeMusicalEntryName[];
  musical_entries_tags: Array<MusicalEntriesTag & { tags: Tag }>;
  musical_releases: Array<ArtistEntryRelease>;
}

const childReleasesInclude = {
  include: {
    musical_releases_parent_musical_releases_child_release_idTomusical_releases: {
      include: {
        alternative_musical_entry_names: true,
        musical_entries: {
          include: {
            musical_entries_artists: {
              include: { artists: true },
            },
          },
        },
      },
    },
  },
} as const;

export const getArtistEntries = async (artistId: string) => {
  const entries = await prisma.musical_entries.findMany({
    where: {
      musical_entries_artists: {
        some: {
          artist_id: artistId,
        },
      },
    },
    orderBy: {
      original_release_date: "asc",
    },
    include: {
      alternative_musical_entry_names: true,
      musical_entries_tags: { include: { tags: true } },
      types_of_musical_entries: {
        include: {
          musical_entry_types: true,
        },
      },
      musical_releases: {
        include: {
          musical_releases_tags: { include: { tags: true } },
          alternative_musical_entry_names: true,
          formats_of_releases: { include: { releases_formats: true } },
          parent_musical_releases_parent_musical_releases_parent_release_idTomusical_releases:
            childReleasesInclude,
        },
        orderBy: {
          release_date: "asc",
        },
      },
    },
  });

  return entries.map((entry) => ({
    ...entry,
    musical_releases: entry.musical_releases.map(
      ({
        parent_musical_releases_parent_musical_releases_parent_release_idTomusical_releases:
          childReleaseJoins,
        ...release
      }) => ({
        ...release,
        child_releases: childReleaseJoins.map(
          ({
            musical_releases_parent_musical_releases_child_release_idTomusical_releases:
              child,
          }) => {
            const artistRows = child.musical_entries.musical_entries_artists;
            const releaseArtist =
              artistRows.find((row) => row.is_entries_main_artist) ??
              artistRows[0];

            return {
              release_version: child.release_version,
              displayName:
                child.alternative_musical_entry_names?.name ??
                child.musical_entries.main_name,
              releaseArtistName: releaseArtist?.artists.name ?? null,
            };
          }
        ),
      })
    ),
  }));
};
