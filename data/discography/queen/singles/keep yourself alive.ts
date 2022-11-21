import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Keep Yourself Alive",
  discogs_url: "https://www.discogs.com/Queen-Keep-Yourself-Alive/master/49718",
  tracks: [
    {
      name: "Keep Yourself Alive",
      versions: [
        { id: "kya", releases: "not Electra 1975 reissue" },
        {
          id: "kya-mono",
          releases: 'Electra 1973 stereo/mono 7" promo',
        },
        { id: "kya-edit", releases: "Electra 1975 reissue" },
        {
          id: "kya-edit-mono",
          releases: 'Electra 1975 7" promo',
        },
        { id: "kya-llrt", releases: "1998 HR promo CD" },
        {
          id: "kya-bbc-1-stereo-swap",
          releases: '1998 HR "25 Anniversary" Promo Sampler CD single',
        },
        {
          id: "kya-lk-hr-98",
          releases: '1998 HR "25 Anniversary" Promo Sampler CD single',
        },
      ],
    },
    {
      name: "Son And Daughter",
      versions: [
        {
          id: "sad",
          releases:
            'not Electra 1973 stereo/mono 7" promo, Electra 1975 re-issue, Australian/New Zealand 1974 7" or 1998 US promo CD',
        },
        {
          id: "sad-censored",
          releases: 'Australian/New Zealand 1974 7"',
        },
      ],
    },
    {
      name: "Lily Of The Valley",
      versions: [
        {
          id: "lov-stand-along-electra",
          releases: 'Electra 1975 re-issue, except for stereo/mono 7" promo',
        },
      ],
    },
    {
      name: "God Save The Queen",
      versions: [
        {
          id: "gstq-single-version",
          releases: 'Electra 1975 re-issue, except for stereo/mono 7" promo',
        },
      ],
    },
  ],
  trackLists: [
    {
      tracks: [
        {
          indexes: ["A", 1],
          track: "kya",
        },
        {
          indexes: ["B", 2],
          track: "sad",
        },
      ],
      releases: [
        'Original 1973/74 7" (except Australia or New Zealand)',
        '2008 "Singles collection 1" CD single',
        '2011 US 7" Record Store Day reissue',
      ],
    },
    {
      tracks: [
        {
          index: "A",
          track: "kya",
        },
        { index: "A", track: "kya-mono" },
      ],
      releases: 'Electra 1973 promo 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kya",
        },
        { index: "B", track: "sad-censored" },
      ],
      releases: 'Australian/New Zealand 1974 7"',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kya-edit",
        },
        { index: "B1", track: "lov-stand-along-electra" },
        { index: "B2", track: "gstq-single-version" },
      ],
      releases: 'Electra 1975 7" reissue',
    },
    {
      tracks: [
        {
          index: "A",
          track: "kya-edit",
        },
        { index: "A", track: "kya-edit-mono" },
      ],
      releases: 'Electra 1975 reissue promo 7"',
    },
    {
      tracks: [
        {
          track: "kya-llrt",
        },
        { track: "kya-bbc-1-stereo-swap" },
        { track: "kya-lk-hr-98" },
        { track: "kya", comment: "album version - 1991 remaster" },
        { track: "kya", comment: "album version - 1998 remaster" },
      ],
      releases: '1998 HR "25 Anniversary" Promo Sampler CD single',
    },
  ],
};

export default data;
