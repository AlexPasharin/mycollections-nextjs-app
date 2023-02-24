import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Flash (the Official Club Mixes)`,
  discogs_url:
    "https://www.discogs.com/master/66393-Queen-Vanguard-Flash-The-Official-Club-Mixes",
  releaseDate: "2002",
  artist: "Queen + Vanguard",
  tracks: [
    {
      name: `Flash's Theme`,
      versions: [
        {
          id: `ft-vanguard-edit`,
          releases: `EU 2002 4-track j-pack CD, EU 2002 2-track CD, Australian CD releases, EU 3-track 12", EU 1-track promo CD, German 2002 5-track promo CD and UK 2003 CD releases, except for 1-track promo CD`,
        },
        {
          id: `ft-vanguard-ext`,
          releases: `EU 2002 4-track and 2-track CD releases, Australian CD releases, EU 2002 4-track 12" releases, German 2002 5-track promo CD, EU promo 2-track 12" releases, UK yellow sleeve 12", UK promo 3-track and 5-track CDs, UK 2003 yellow label promo 12"`,
        },
        {
          id: `ft-vanguard-video`,
          releases: `German 2002 CD (More Official Club Mixes - Limited Director's Edition) and UK 2003 CD`,
        },
        {
          id: `ft-electro`,
          releases: `EU 2002 4-track 12" releases, EU 4-track promo CD, German 2002 CD (More Official Club Mixes - Limited Director's Edition), German 2002 5-track promo CD, EU promoo 12", UK 2003 yellow sleeve 12" and UK 2003 red label promo 12"`,
        },
        {
          id: `ft-tomcraft`,
          releases: `EU 2002 4-track CD releases, Australian CD releases, EU 4-track and 3-track 12" releases, German 2002 5-track promo CD,  UK 2003 red sleeve 12", UK promo 3-track and 5-track CDs, UK 2003 red label promo 12"`,
        },
        {
          id: `ft-tomcraft-edit`,
          releases: `Australian promo CD and UK 2003 3-track promo CD`,
        },
        {
          id: `ft-smith-selway`,
          releases: `EU 4-track and 3-track 12" releases, EU 4-track promo CD, German 2002 CD (More Official Club Mixes - Limited Director's Edition), German 2002 5-track promo CD, UK 2003 red sleeve 12", UK 2003 5-track promo CD and UK 2003 yellow label promo 12"`,
        },
        {
          id: `ft-flashmix-2003`,
          releases: `German 2002 CD (More Official Club Mixes - Limited Director's Edition) and UK 2003 CD`,
        },
        {
          id: `ft-video`,
          releases: `German 2002 CD (More Official Club Mixes - Limited Director's Edition)`,
        },
        {
          id: `ft`,
          releases: `German 2002 CD (More Official Club Mixes - Limited Director's Edition)`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          track: `ft-vanguard-edit`,
        },
        {
          track: `ft-vanguard-ext`,
        },
        {
          track: `ft-tomcraft`,
        },
        {
          foreign_artist: true,
          artist: "Vanguard",
          track: "Jam",
        },
      ],
      releases: [
        `Original EU 2002 4-track j-pack CD`,
        `Original Australian CD`,
      ],
    },
    {
      tracks: [
        {
          indexes: ["A1", 1],
          track: `ft-vanguard-ext`,
        },
        {
          indexes: ["A2", 2],
          track: `ft-electro`,
        },
        {
          indexes: ["B1", 3],
          track: `ft-tomcraft`,
        },
        {
          indexes: ["B2", 4],
          track: `ft-smith-selway`,
        },
      ],
      releases: [
        `Original EU 2002 yellow label 4-track 12"`,
        `Original Italian "Dance Factory" 2002 12"`,
        `EU 2002 4 track promo cardboard sleeve CD`,
      ],
    },
    {
      tracks: [
        {
          track: `ft-flashmix-2003`,
        },
        {
          track: `ft-electro`,
        },
        {
          track: `ft-smith-selway`,
        },
        {
          track: `ft`,
        },
        {
          track: `ft-video`,
          enhanced: true,
        },
        {
          track: `ft-vanguard-video`,
          enhanced: true,
        },
      ],
      releases: `Original German 2002 CD (More Official Club Mixes - Limited Director's Edition)`,
    },
    {
      tracks: [
        { track: `ft-vanguard-edit` },
        {
          track: `ft-vanguard-ext`,
        },
      ],
      releases: `Original EU 2002 2-track CD`,
    },
    {
      tracks: [
        {
          index: "A1",
          track: `ft-vanguard-edit`,
        },
        {
          index: "A2",
          track: `ft-smith-selway`,
        },
        {
          index: "B",
          track: `ft-tomcraft`,
        },
      ],
      releases: `Original EU 2002 yellow label 3-track 12"`,
    },
    {
      tracks: [
        {
          track: `ft-vanguard-edit`,
        },
      ],
      releases: `EU 2002 1-track promo CD`,
    },
    {
      tracks: [
        {
          track: `ft-vanguard-edit`,
        },
        {
          track: `ft-vanguard-ext`,
        },
        {
          track: `ft-electro`,
        },
        {
          track: `ft-tomcraft`,
        },
        {
          track: `ft-smith-selway`,
        },
      ],
      releases: `German 2002 5-track promo CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `ft-vanguard-ext`,
        },
        {
          index: "B",
          foreign_artist: true,
          artist: "Vanguard",
          track: "Jam",
        },
      ],
      releases: `German 2002 promo 12"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `ft-vanguard-ext`,
        },
        {
          index: "B",
          track: `ft-electro`,
        },
      ],
      releases: [`EU 2002 promo 12"`, `Original UK 2003 yellow sleeve 12"`],
    },
    {
      tracks: [
        {
          track: `ft-vanguard-edit`,
        },
        {
          track: `ft-vanguard-ext`,
        },
        {
          track: `ft-tomcraft`,
        },
        {
          track: `ft-tomcraft-edit`,
        },
      ],
      releases: `Australian promo CD`,
    },
    {
      tracks: [
        {
          track: `ft-vanguard-edit`,
        },
        {
          track: `ft-flashmix-2003`,
        },
        {
          foreign_artist: true,
          artist: "Vanguard",
          track: "Jam",
        },
        {
          track: `ft-vanguard-video`,
          enhanced: true,
        },
      ],
      releases: `Original UK 2003 CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `ft-tomcraft`,
        },
        {
          index: "B",
          track: `ft-smith-selway`,
        },
      ],
      releases: `Original UK 2003 red sleeve 12"`,
    },
    {
      tracks: [
        {
          track: `ft-tomcraft-edit`,
        },
      ],
      releases: `UK 2003 1-track promo CD`,
    },
    {
      tracks: [
        {
          track: `ft-vanguard-edit`,
        },
        {
          track: `ft-vanguard-ext`,
        },
        {
          track: `ft-tomcraft`,
        },
      ],
      releases: `UK 2003 3-track promo CD`,
    },
    {
      tracks: [
        {
          track: `ft-vanguard-edit`,
        },
        {
          track: `ft-vanguard-ext`,
        },
        {
          track: `ft-tomcraft`,
        },
        {
          track: `ft-smith-selway`,
        },
        {
          track: `ft-electro`,
        },
      ],
      releases: `UK 2003 5-track promo CD`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `ft-vanguard-ext`,
        },
        {
          index: "B",
          track: `ft-smith-selway`,
        },
      ],
      releases: `UK 2003 yellow label promo 12"`,
    },
    {
      tracks: [
        {
          index: "A",
          track: `ft-tomcraft`,
        },
        {
          index: "B",
          track: `ft-electro`,
        },
      ],
      releases: `UK 2003 red label promo 12"`,
    },
  ],
};

export default data;
