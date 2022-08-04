export type Kana = {
  kana: string;
  romaji: string;
};

export type HanDakuten = {
  kana: Kana;
  youon: [Kana, Kana, Kana] | null;
};

export type Gojuon = {
  kana: Kana;
  youon: [Kana, Kana, Kana] | null;
  dakuten: HanDakuten | null;
  handakuten: HanDakuten | null;
};

export type GojuonGroup = {
  leadConsonant: string | null;
  kana: [Gojuon | null, Gojuon | null, Gojuon | null, Gojuon | null, Gojuon | null];
};
