import type { artists as Artist, musical_entries as MusicalEntry } from "generated/prisma/client";
import { prisma } from "./client";

export const getArtists = async (): Promise<Artist[]> => prisma.artists.findMany();

export const getArtistByName = async (artistName: string): Promise<Artist | null> => prisma.artists.findFirst({
  where: {
    name: artistName,
  },
});

export const getArtistEntries = async (artistId: string) => prisma.musical_entries.findMany({
  include: {
    types_of_musical_entries: { include: { musical_entry_types: true } },
  },
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
})
