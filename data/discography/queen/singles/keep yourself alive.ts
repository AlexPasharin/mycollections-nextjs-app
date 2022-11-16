import type { DiscographyEntryData } from "types/discography";

const data: DiscographyEntryData = {
  title: "Keep Yourself Alive",
  discogs_url: "https://www.discogs.com/Queen-Keep-Yourself-Alive/master/49718",
  tracks: [
    {
      name: "Keep Yourself Alive",
      versions: [
        { id: "kya", releases: "not Electra 75 re-releases" },
        {
          id: "kya-mono",
          releases: 'Electra 73 stereo/mono 7" promo',
        },
      ],
    },
    {
      name: "Son And Daughter",
      versions: [
        {
          id: "sad",
          releases:
            'not Electra 73 stereo/mono promos, Electra 75 re-releases, Australian/New Zealand 74 7" or 98 US promo CD',
        },
        {
          id: "sad-censored",
          releases: 'Australian/New Zealand 74 7"',
        },
      ],
    },

    //      - not Electra 75 re-releases
    // Son and daughter - not Electra 75 re-releases, Electra stereo/mono promos, Australian and New Zealand 74 7" or 1998 US promo CD
    // Keep yourself alive (mono) - Electra 73 stereo/mono promos
    // Son and daughter (censored) - Australian and New Zealand 74 7"s
    // Keep yourself alive (US 75 edit) - Electra 75 reissue.
    // Lily Of The Valley (US 75 edit) - Electra 75 reissue (except stereo/mono promos)
    // God Save The queen (US 75 edit) - Electra 75 reissue (except stereo/mono promos)
    // Keep yourself alive (US 75 edit mono) - Electra 75 stereo/mono promos
    // Keep yourself alive (long lost re-take) - 1998 US promo CD
    // Keep yourself alive (live at the BBC session 1) - 1998 US promo CD
    // Keep yourself alive (Live Killers version - 98 promo edit) - 1998 US promo CD
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
  ],
};

export default data;
