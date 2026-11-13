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
  musical_releases_tags as MusicalReleasesTag,
  tags as Tag,
} from "generated/prisma/client";
import { prisma } from "./client";

export type ArtistWithAlternativeNames = Artist & {
  alternative_artist_names: AlternativeArtistName[];
};

export async function getArtists(): Promise<Artist[]>;
export async function getArtists(options: {
  includeAlternativeNames: true;
}): Promise<ArtistWithAlternativeNames[]>;
export async function getArtists(options?: {
  includeAlternativeNames?: boolean;
}): Promise<Artist[] | ArtistWithAlternativeNames[]> {
  return prisma.artists.findMany({
    include: options?.includeAlternativeNames
      ? { alternative_artist_names: true }
      : undefined,
  });
}

export const getArtistByName = async (artistName: string): Promise<Artist | null> => prisma.artists.findFirst({
  where: {
    name: artistName,
  },
});


export type ArtistEntryRelease = MusicalRelease & {
  alternative_musical_entry_names: AlternativeMusicalEntryName | null;
  formats_of_releases: Array<FormatsOfReleases & { releases_formats: ReleasesFormat }>;
  musical_releases_tags: Array<MusicalReleasesTag & { tags: Tag }>;
}

export type ArtistEntry = MusicalEntry & {
  musical_releases: Array<ArtistEntryRelease>;
}

export const getArtistEntries = async (artistId: string) => prisma.musical_entries.findMany({
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
    types_of_musical_entries: {
      include: {
        musical_entry_types: true,
      }
    },
    musical_releases: {
      include: {
        musical_releases_tags: { include: { tags: true } },
        alternative_musical_entry_names: true,
        formats_of_releases: { include: { releases_formats: true }, }
      },
      orderBy: {
        release_date: "asc"
      }
    },
  },
})
