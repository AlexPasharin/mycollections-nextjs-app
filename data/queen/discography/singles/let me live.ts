import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: `Let Me Live`,
  discogs_url: "https://www.discogs.com/master/20353-Queen-Let-Me-Live",
  releaseDate: "1996.06.17",
  tracks: [
    {
      name: `Let Me Live`,
      versions: [{ id: `lml` }],
    },
    {
      name: `Fat Bottomed Girls`,
      versions: [
        {
          id: `fbg-remaster-error`,
          releases: `All 7" releases, "The Hits" CD and Dutch 2 track CD`,
        },
      ],
    },
    {
      name: `Bicycle Race`,
      versions: [{ id: `br`, releases: `UK 7" PD and "The Hits" CD` }],
    },
    {
      name: `Don't Stop Me Now`,
      versions: [{ id: `dsmn`, releases: `"The Hits" CD` }],
    },
    {
      name: `My Fairy King`,
      versions: [{ id: `mfk-bbc-stereo-swap`, releases: `"Rarities" CD` }],
    },
    {
      name: `Doing Alright`,
      versions: [{ id: `dar-bbc-stereo-swap`, releases: `"Rarities" CD` }],
    },
    {
      name: `Liar`,
      versions: [{ id: `liar-bbc-1-stereo-swap`, releases: `"Rarities" CD` }],
    },
    {
      name: `We Will Rock You`,
      versions: [
        {
          id: `wwry-wembley-86-2010`,
          releases: `2010 "Singles collection 4" CD`,
        },
      ],
    },
    {
      name: `We Are The Champions`,
      versions: [
        {
          id: "watc-wembley-86-2010",
          releases: `2010 "Singles collection 4" CD`,
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          index: "A",
          track: `lml`,
        },
        {
          index: "B1",
          track: `fbg-remaster-error`,
        },
        {
          index: "B2",
          track: `br`,
        },
      ],
      releases: `Original 1996 UK PD 7"`,
    },
    {
      tracks: [
        {
          track: `lml`,
        },
        {
          track: `fbg-remaster-error`,
        },
        {
          track: `br`,
        },
        {
          track: `dsmn`,
        },
      ],
      releases: `Original 1996 "The Hits" CD`,
    },
    {
      tracks: [
        {
          track: `lml`,
        },
        {
          track: `mfk-bbc-stereo-swap`,
        },
        {
          track: `dar-bbc-stereo-swap`,
        },
        {
          track: `liar-bbc-1-stereo-swap`,
        },
      ],
      releases: `Original 1996 "Rarities" CD`,
    },
    {
      tracks: [
        {
          indexes: [1, "A"],
          track: `lml`,
        },
        {
          indexes: [2, "B"],
          track: `fbg-remaster-error`,
        },
      ],
      releases: [`Original 1996 Dutch 2 track CD`, `UK jukebox 7"`],
    },
    {
      tracks: [
        {
          indexes: [1, "A"],
          track: `lml`,
        },
      ],
      releases: [`UK promo CD`, `1996 Virgin one-sided promo 12"`],
    },
    {
      tracks: [
        {
          track: `lml`,
        },
        {
          track: `wwry-wembley-86-2010`,
        },
        {
          track: `watc-wembley-86-2010`,
        },
      ],
      releases: `2010 "Singles collection 4" CD`,
    },
  ],
};

export default data;
