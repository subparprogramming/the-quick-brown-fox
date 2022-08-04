import { Kana, GojuonGroup } from "./kana";

export const titleEnglish = "Hiragana";
export const titleJapanese = "平仮名 (ひらがな)";

export const n: Kana = {
  kana: "ん",
  romaji: "n",
};

export const gojuon: GojuonGroup[] = [
  {
    leadConsonant: "•",
    kana: [
      {
        kana: { kana: "あ", romaji: "a" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "い", romaji: "i" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "う", romaji: "u" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "え", romaji: "e" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "お", romaji: "o" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "k",
    kana: [
      {
        kana: { kana: "か", romaji: "ka" },
        youon: null,
        dakuten: { kana: { kana: "が", romaji: "ga" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "き", romaji: "ki" },
        youon: [
          { kana: "きゃ", romaji: "kya" },
          { kana: "きゅ", romaji: "kyu" },
          { kana: "きょ", romaji: "kyo" },
        ],
        dakuten: {
          kana: { kana: "ぎ", romaji: "gi" },
          youon: [
            { kana: "ぎゃ", romaji: "gya" },
            { kana: "ぎゅ", romaji: "gyu" },
            { kana: "ぎょ", romaji: "gyo" },
          ],
        },
        handakuten: null,
      },
      {
        kana: { kana: "く", romaji: "ku" },
        youon: null,
        dakuten: { kana: { kana: "ぐ", romaji: "gu" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "け", romaji: "ke" },
        youon: null,
        dakuten: { kana: { kana: "げ", romaji: "ge" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "こ", romaji: "ko" },
        youon: null,
        dakuten: { kana: { kana: "ご", romaji: "go" }, youon: null },
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "s",
    kana: [
      {
        kana: { kana: "さ", romaji: "sa" },
        youon: null,
        dakuten: { kana: { kana: "ざ", romaji: "za" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "し", romaji: "shi" },
        youon: [
          { kana: "しゃ", romaji: "sha" },
          { kana: "しゅ", romaji: "shu" },
          { kana: "しょ", romaji: "sho" },
        ],
        dakuten: {
          kana: { kana: "じ", romaji: "ji" },
          youon: [
            { kana: "じゃ", romaji: "ja" },
            { kana: "じゅ", romaji: "ju" },
            { kana: "じょ", romaji: "jo" },
          ],
        },
        handakuten: null,
      },
      {
        kana: { kana: "す", romaji: "su" },
        youon: null,
        dakuten: { kana: { kana: "ず", romaji: "zu" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "せ", romaji: "se" },
        youon: null,
        dakuten: { kana: { kana: "ぜ", romaji: "ze" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "そ", romaji: "so" },
        youon: null,
        dakuten: { kana: { kana: "ぞ", romaji: "zo" }, youon: null },
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "t",
    kana: [
      {
        kana: { kana: "た", romaji: "ta" },
        youon: null,
        dakuten: { kana: { kana: "だ", romaji: "da" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "ち", romaji: "chi" },
        youon: [
          { kana: "ちゃ", romaji: "cha" },
          { kana: "ちゅ", romaji: "chu" },
          { kana: "ちょ", romaji: "cho" },
        ],
        dakuten: {
          kana: { kana: "ぢ", romaji: "ji" },
          youon: [
            { kana: "ぢゃ", romaji: "ja" },
            { kana: "ぢゅ", romaji: "ju" },
            { kana: "ぢょ", romaji: "jo" },
          ],
        },
        handakuten: null,
      },
      {
        kana: { kana: "つ", romaji: "tsu" },
        youon: null,
        dakuten: { kana: { kana: "づ", romaji: "zu" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "て", romaji: "te" },
        youon: null,
        dakuten: { kana: { kana: "で", romaji: "de" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "と", romaji: "to" },
        youon: null,
        dakuten: { kana: { kana: "ど", romaji: "do" }, youon: null },
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "n",
    kana: [
      {
        kana: { kana: "な", romaji: "na" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "に", romaji: "ni" },
        youon: [
          { kana: "にゃ", romaji: "nya" },
          { kana: "にゅ", romaji: "nyu" },
          { kana: "にょ", romaji: "nyo" },
        ],
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ぬ", romaji: "nu" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ね", romaji: "ne" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "の", romaji: "no" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "h",
    kana: [
      {
        kana: { kana: "は", romaji: "ha" },
        youon: null,
        dakuten: { kana: { kana: "ば", romaji: "ba" }, youon: null },
        handakuten: { kana: { kana: "ぱ", romaji: "pa" }, youon: null },
      },
      {
        kana: { kana: "ひ", romaji: "hi" },
        youon: [
          { kana: "ひゃ", romaji: "hya" },
          { kana: "ひゅ", romaji: "hyu" },
          { kana: "ひょ", romaji: "hyo" },
        ],
        dakuten: {
          kana: { kana: "び", romaji: "bi" },
          youon: [
            { kana: "びゃ", romaji: "bya" },
            { kana: "びゅ", romaji: "byu" },
            { kana: "びょ", romaji: "byo" },
          ],
        },
        handakuten: {
          kana: { kana: "ぴ", romaji: "pi" },
          youon: [
            { kana: "ぴゃ", romaji: "pya" },
            { kana: "ぴゅ", romaji: "pyu" },
            { kana: "ぴょ", romaji: "pyo" },
          ],
        },
      },
      {
        kana: { kana: "ふ", romaji: "fu" },
        youon: null,
        dakuten: { kana: { kana: "ぶ", romaji: "bu" }, youon: null },
        handakuten: { kana: { kana: "ぷ", romaji: "pu" }, youon: null },
      },
      {
        kana: { kana: "へ", romaji: "he" },
        youon: null,
        dakuten: { kana: { kana: "べ", romaji: "be" }, youon: null },
        handakuten: { kana: { kana: "ぺ", romaji: "pe" }, youon: null },
      },
      {
        kana: { kana: "ほ", romaji: "ho" },
        youon: null,
        dakuten: { kana: { kana: "ぼ", romaji: "bo" }, youon: null },
        handakuten: { kana: { kana: "ぽ", romaji: "po" }, youon: null },
      },
    ],
  },
  {
    leadConsonant: "m",
    kana: [
      {
        kana: { kana: "ま", romaji: "ma" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "み", romaji: "mi" },
        youon: [
          { kana: "みゃ", romaji: "mya" },
          { kana: "みゅ", romaji: "myu" },
          { kana: "みょ", romaji: "myo" },
        ],
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "む", romaji: "mu" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "め", romaji: "me" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "も", romaji: "mo" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "y",
    kana: [
      {
        kana: { kana: "や", romaji: "ya" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      null,
      {
        kana: { kana: "ゆ", romaji: "yu" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      null,
      {
        kana: { kana: "よ", romaji: "yo" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "r",
    kana: [
      {
        kana: { kana: "ら", romaji: "ra" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "り", romaji: "ri" },
        youon: [
          { kana: "りゃ", romaji: "rya" },
          { kana: "りゅ", romaji: "ryu" },
          { kana: "りょ", romaji: "ryo" },
        ],
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "る", romaji: "ru" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "れ", romaji: "re" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ろ", romaji: "ro" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "w",
    kana: [
      {
        kana: { kana: "わ", romaji: "wa" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      null,
      null,
      null,
      {
        kana: { kana: "を", romaji: "wo" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
    ],
  },
];
