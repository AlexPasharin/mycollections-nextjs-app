import { prisma } from "./client";

export const getArtists = async () => prisma.artists.findMany();

