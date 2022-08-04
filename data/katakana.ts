import { Kana, GojuonGroup } from "./kana";

export const titleEnglish = "Katakana";
export const titleJapanese = "片仮名 (カタカナ)";

export const n: Kana = {
  kana: "ン",
  romaji: "n",
};

export const gojuon: GojuonGroup[] = [
  {
    leadConsonant: "•",
    kana: [
      {
        kana: { kana: "ア", romaji: "a" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "イ", romaji: "i" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ウ", romaji: "u" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "エ", romaji: "e" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "オ", romaji: "o" },
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
        kana: { kana: "カ", romaji: "ka" },
        youon: null,
        dakuten: { kana: { kana: "ガ", romaji: "ga" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "キ", romaji: "ki" },
        youon: [
          { kana: "キャ", romaji: "kya" },
          { kana: "キュ", romaji: "kyu" },
          { kana: "キョ", romaji: "kyo" },
        ],
        dakuten: {
          kana: { kana: "ギ", romaji: "gi" },
          youon: [
            { kana: "ギャ", romaji: "gya" },
            { kana: "ギュ", romaji: "gyu" },
            { kana: "ギョ", romaji: "gyo" },
          ],
        },
        handakuten: null,
      },
      {
        kana: { kana: "ク", romaji: "ku" },
        youon: null,
        dakuten: { kana: { kana: "グ", romaji: "gu" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "ケ", romaji: "ke" },
        youon: null,
        dakuten: { kana: { kana: "ゲ", romaji: "ge" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "コ", romaji: "ko" },
        youon: null,
        dakuten: { kana: { kana: "ゴ", romaji: "go" }, youon: null },
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "s",
    kana: [
      {
        kana: { kana: "サ", romaji: "sa" },
        youon: null,
        dakuten: { kana: { kana: "ザ", romaji: "za" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "シ", romaji: "shi" },
        youon: [
          { kana: "シャ", romaji: "sha" },
          { kana: "シュ", romaji: "shu" },
          { kana: "ショ", romaji: "sho" },
        ],
        dakuten: {
          kana: { kana: "ジ", romaji: "ji" },
          youon: [
            { kana: "ジャ", romaji: "ja" },
            { kana: "ジュ", romaji: "ju" },
            { kana: "ジョ", romaji: "jo" },
          ],
        },
        handakuten: null,
      },
      {
        kana: { kana: "ス", romaji: "su" },
        youon: null,
        dakuten: { kana: { kana: "ズ", romaji: "zu" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "セ", romaji: "se" },
        youon: null,
        dakuten: { kana: { kana: "ゼ", romaji: "ze" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "ソ", romaji: "so" },
        youon: null,
        dakuten: { kana: { kana: "ゾ", romaji: "zo" }, youon: null },
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "t",
    kana: [
      {
        kana: { kana: "タ", romaji: "ta" },
        youon: null,
        dakuten: { kana: { kana: "ダ", romaji: "da" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "チ", romaji: "chi" },
        youon: [
          { kana: "チャ", romaji: "cha" },
          { kana: "チュ", romaji: "chu" },
          { kana: "チョ", romaji: "cho" },
        ],
        dakuten: {
          kana: { kana: "ヂ", romaji: "ji" },
          youon: [
            { kana: "ヂャ", romaji: "ja" },
            { kana: "ヂュ", romaji: "ju" },
            { kana: "ヂョ", romaji: "jo" },
          ],
        },
        handakuten: null,
      },
      {
        kana: { kana: "ツ", romaji: "tsu" },
        youon: null,
        dakuten: { kana: { kana: "ヅ", romaji: "zu" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "テ", romaji: "te" },
        youon: null,
        dakuten: { kana: { kana: "デ", romaji: "de" }, youon: null },
        handakuten: null,
      },
      {
        kana: { kana: "ト", romaji: "to" },
        youon: null,
        dakuten: { kana: { kana: "ド", romaji: "do" }, youon: null },
        handakuten: null,
      },
    ],
  },
  {
    leadConsonant: "n",
    kana: [
      {
        kana: { kana: "ナ", romaji: "na" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ニ", romaji: "ni" },
        youon: [
          { kana: "ニャ", romaji: "nya" },
          { kana: "ニュ", romaji: "nyu" },
          { kana: "ニョ", romaji: "nyo" },
        ],
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ヌ", romaji: "nu" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ネ", romaji: "ne" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ノ", romaji: "no" },
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
        kana: { kana: "ハ", romaji: "ha" },
        youon: null,
        dakuten: { kana: { kana: "バ", romaji: "ba" }, youon: null },
        handakuten: { kana: { kana: "パ", romaji: "pa" }, youon: null },
      },
      {
        kana: { kana: "ヒ", romaji: "hi" },
        youon: [
          { kana: "ヒャ", romaji: "hya" },
          { kana: "ヒュ", romaji: "hyu" },
          { kana: "ヒョ", romaji: "hyo" },
        ],
        dakuten: {
          kana: { kana: "ビ", romaji: "bi" },
          youon: [
            { kana: "ビャ", romaji: "bya" },
            { kana: "ビュ", romaji: "byu" },
            { kana: "ビョ", romaji: "byo" },
          ],
        },
        handakuten: {
          kana: { kana: "ピ", romaji: "pi" },
          youon: [
            { kana: "ピャ", romaji: "pya" },
            { kana: "ピュ", romaji: "pyu" },
            { kana: "ピョ", romaji: "pyo" },
          ],
        },
      },
      {
        kana: { kana: "フ", romaji: "fu" },
        youon: null,
        dakuten: { kana: { kana: "ブ", romaji: "bu" }, youon: null },
        handakuten: { kana: { kana: "プ", romaji: "pu" }, youon: null },
      },
      {
        kana: { kana: "ヘ", romaji: "he" },
        youon: null,
        dakuten: { kana: { kana: "べ", romaji: "be" }, youon: null },
        handakuten: { kana: { kana: "ぺ", romaji: "pe" }, youon: null },
      },
      {
        kana: { kana: "ホ", romaji: "ho" },
        youon: null,
        dakuten: { kana: { kana: "ボ", romaji: "bo" }, youon: null },
        handakuten: { kana: { kana: "ポ ", romaji: "po" }, youon: null },
      },
    ],
  },
  {
    leadConsonant: "m",
    kana: [
      {
        kana: { kana: "マ", romaji: "ma" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ミ", romaji: "mi" },
        youon: [
          { kana: "ミャ", romaji: "mya" },
          { kana: "ミュ", romaji: "myu" },
          { kana: "ミョ", romaji: "myo" },
        ],
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ム", romaji: "mu" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "メ", romaji: "me" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "モ", romaji: "mo" },
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
        kana: { kana: "ヤ", romaji: "ya" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      null,
      {
        kana: { kana: "ユ", romaji: "yu" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      null,
      {
        kana: { kana: "ヨ", romaji: "yo" },
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
        kana: { kana: "ラ", romaji: "ra" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "リ", romaji: "ri" },
        youon: [
          { kana: "リャ", romaji: "rya" },
          { kana: "リュ", romaji: "ryu" },
          { kana: "リョ", romaji: "ryo" },
        ],
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ル", romaji: "ru" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "レ", romaji: "re" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      {
        kana: { kana: "ロ", romaji: "ro" },
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
        kana: { kana: "ワ", romaji: "wa" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
      null,
      null,
      null,
      {
        kana: { kana: "ヲ", romaji: "wo" },
        youon: null,
        dakuten: null,
        handakuten: null,
      },
    ],
  },
];
