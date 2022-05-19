import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Footer from "../../components/Footer";

type Kana = {
  kana: string;
  romaji: string;
};

type Youon = {
  kana: Kana;
  dakuten: Kana | null;
  handakuten: Kana | null;
};

type Gojuon = {
  kana: Kana;
  youon: Youon[] | null;
  dakuten: Kana | null;
  handakuten: Kana | null;
};

type GojuonGroup = {
  leadConsonant: string | null;
  kana: [Gojuon | null, Gojuon | null, Gojuon | null, Gojuon | null, Gojuon | null];
};

const gojuon: GojuonGroup[] = [
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
        dakuten: { kana: "が", romaji: "ga" },
        handakuten: null,
      },
      {
        kana: { kana: "き", romaji: "ki" },
        youon: [
          { kana: { kana: "きゃ", romaji: "kya" }, dakuten: { kana: "ぎゃ", romaji: "gya" }, handakuten: null },
          { kana: { kana: "きゅ", romaji: "kyu" }, dakuten: { kana: "ぎゅ", romaji: "gyu" }, handakuten: null },
          { kana: { kana: "きょ", romaji: "kyo" }, dakuten: { kana: "ぎょ", romaji: "gyo" }, handakuten: null },
        ],
        dakuten: { kana: "ぎ", romaji: "gi" },
        handakuten: null,
      },
      {
        kana: { kana: "く", romaji: "ku" },
        youon: null,
        dakuten: { kana: "ぐ", romaji: "gu" },
        handakuten: null,
      },
      {
        kana: { kana: "け", romaji: "ke" },
        youon: null,
        dakuten: { kana: "げ", romaji: "ge" },
        handakuten: null,
      },
      {
        kana: { kana: "こ", romaji: "ko" },
        youon: null,
        dakuten: { kana: "ご", romaji: "go" },
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
        dakuten: { kana: "ざ", romaji: "za" },
        handakuten: null,
      },
      {
        kana: { kana: "し", romaji: "shi" },
        youon: [
          { kana: { kana: "しゃ", romaji: "sha" }, dakuten: { kana: "じゃ", romaji: "ja" }, handakuten: null },
          { kana: { kana: "しゅ", romaji: "shu" }, dakuten: { kana: "じゅ", romaji: "ju" }, handakuten: null },
          { kana: { kana: "しょ", romaji: "sho" }, dakuten: { kana: "じょ", romaji: "jo" }, handakuten: null },
        ],
        dakuten: { kana: "じ", romaji: "ji" },
        handakuten: null,
      },
      {
        kana: { kana: "す", romaji: "su" },
        youon: null,
        dakuten: { kana: "ず", romaji: "zu" },
        handakuten: null,
      },
      {
        kana: { kana: "せ", romaji: "se" },
        youon: null,
        dakuten: { kana: "ぜ", romaji: "ze" },
        handakuten: null,
      },
      {
        kana: { kana: "そ", romaji: "so" },
        youon: null,
        dakuten: { kana: "ぞ", romaji: "zo" },
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
        dakuten: { kana: "だ", romaji: "da" },
        handakuten: null,
      },
      {
        kana: { kana: "ち", romaji: "chi" },
        youon: [
          { kana: { kana: "ちゃ", romaji: "cha" }, dakuten: { kana: "ぢゃ", romaji: "ja" }, handakuten: null },
          { kana: { kana: "ちゅ", romaji: "chu" }, dakuten: { kana: "ぢゅ", romaji: "ju" }, handakuten: null },
          { kana: { kana: "ちょ", romaji: "cho" }, dakuten: { kana: "ぢょ", romaji: "jo" }, handakuten: null },
        ],
        dakuten: { kana: "ぢ", romaji: "ji" },
        handakuten: null,
      },
      {
        kana: { kana: "つ", romaji: "tsu" },
        youon: null,
        dakuten: { kana: "づ", romaji: "zu" },
        handakuten: null,
      },
      {
        kana: { kana: "て", romaji: "te" },
        youon: null,
        dakuten: { kana: "で", romaji: "de" },
        handakuten: null,
      },
      {
        kana: { kana: "と", romaji: "to" },
        youon: null,
        dakuten: { kana: "ど", romaji: "do" },
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
        dakuten: { kana: "ば", romaji: "ba" },
        handakuten: null,
      },
      {
        kana: { kana: "に", romaji: "ni" },
        youon: [
          { kana: { kana: "にゃ", romaji: "nya" }, dakuten: { kana: "びゃ", romaji: "bya" }, handakuten: null },
          { kana: { kana: "にゅ", romaji: "nyu" }, dakuten: { kana: "びゅ", romaji: "byu" }, handakuten: null },
          { kana: { kana: "にょ", romaji: "nyo" }, dakuten: { kana: "びょ", romaji: "byo" }, handakuten: null },
        ],
        dakuten: { kana: "び", romaji: "bi" },
        handakuten: null,
      },
      {
        kana: { kana: "ぬ", romaji: "nu" },
        youon: null,
        dakuten: { kana: "ぶ", romaji: "bu" },
        handakuten: null,
      },
      {
        kana: { kana: "ね", romaji: "ne" },
        youon: null,
        dakuten: { kana: "べ", romaji: "be" },
        handakuten: null,
      },
      {
        kana: { kana: "の", romaji: "no" },
        youon: null,
        dakuten: { kana: "ぼ", romaji: "bo" },
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
        dakuten: { kana: "ば", romaji: "ba" },
        handakuten: { kana: "ぱ", romaji: "pa" },
      },
      {
        kana: { kana: "ひ", romaji: "hi" },
        youon: [
          { kana: { kana: "ひゃ", romaji: "hya" }, dakuten: { kana: "びゃ", romaji: "bya" }, handakuten: { kana: "ぴゃ", romaji: "pya" } },
          { kana: { kana: "ひゅ", romaji: "hyu" }, dakuten: { kana: "びゅ", romaji: "byu" }, handakuten: { kana: "ぴゅ", romaji: "pyu" } },
          { kana: { kana: "ひょ", romaji: "hyo" }, dakuten: { kana: "びょ", romaji: "byo" }, handakuten: { kana: "ぴょ", romaji: "pyo" } },
        ],
        dakuten: { kana: "び", romaji: "bi" },
        handakuten: { kana: "ぴ", romaji: "pi" },
      },
      {
        kana: { kana: "ふ", romaji: "fu" },
        youon: null,
        dakuten: { kana: "ぶ", romaji: "bu" },
        handakuten: { kana: "ぷ", romaji: "pu" },
      },
      {
        kana: { kana: "へ", romaji: "he" },
        youon: null,
        dakuten: { kana: "べ", romaji: "be" },
        handakuten: { kana: "ぺ", romaji: "pe" },
      },
      {
        kana: { kana: "ほ", romaji: "ho" },
        youon: null,
        dakuten: { kana: "ぼ", romaji: "bo" },
        handakuten: { kana: "ぽ", romaji: "po" },
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
          { kana: { kana: "みゃ", romaji: "mya" }, dakuten: { kana: "びゃ", romaji: "bya" }, handakuten: null },
          { kana: { kana: "みゅ", romaji: "myu" }, dakuten: { kana: "びゅ", romaji: "byu" }, handakuten: null },
          { kana: { kana: "みょ", romaji: "myo" }, dakuten: { kana: "びょ", romaji: "byo" }, handakuten: null },
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
          { kana: { kana: "りゃ", romaji: "rya" }, dakuten: null, handakuten: null },
          { kana: { kana: "りゅ", romaji: "ryu" }, dakuten: null, handakuten: null },
          { kana: { kana: "りょ", romaji: "ryo" }, dakuten: null, handakuten: null },
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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hiragana</title>
      </Head>

      {/* page */}
      <div className="flex min-h-screen w-full flex-col items-center bg-space-cadet text-isabelline">
        <Link href="/" passHref>
          <div className="absolute top-4 left-4 flex items-center space-x-1 rounded-lg border-2 border-independence bg-independence py-2 px-3 duration-200 hover:border-raw-sienna">
            <ArrowNarrowLeftIcon className="h-4" />
            <p className="-translate-y-[0.1em] text-xs tracking-[0.2em]">BACK</p>
          </div>
        </Link>

        {/* contents */}
        <div className="flex max-w-screen-xl flex-col">
          {/* header */}
          <div className="grid grid-flow-row grid-cols-3 items-center p-4 pt-12 sm:p-8 sm:pt-8">
            <div className="col-span-2 flex flex-col justify-start space-x-2 font-rampart-one text-4xl font-bold sm:text-6xl xl:text-7xl">
              <div className="flex flex-wrap">
                <h1 className="">Hiragana</h1>
              </div>
              <h1 className="pt-4 text-xl sm:text-3xl">平仮名 (ひらがな)</h1>
            </div>
            <img
              src="/assets/fox-animated-3.gif"
              alt="fox standing"
              className="col-span-1 -ml-6 h-1/2 w-full max-w-xs object-cover object-left-bottom sm:ml-0 sm:max-w-md"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* grid content */}
          <div className="mx-auto flex w-full flex-col">
            <div className="grid grid-flow-row grid-cols-6 pr-6 pt-1 font-sans text-lg font-bold text-black">
              <div className="col-span-1 row-span-1"></div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">a</div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">i</div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">u</div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">e</div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">o</div>
              {gojuon.map((group) => (
                <>
                  <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">{group.leadConsonant}</div>
                  {group.kana.map((kana, index) =>
                    kana != null ? (
                      <div key={index} className="group relative col-span-1 row-span-1 m-1 flex flex-col items-center justify-center rounded-lg bg-isabelline p-4">
                        <p className="">{kana.kana.kana}</p>
                        <p className="h-1 pt-1 opacity-0 duration-200 group-hover:h-full group-hover:opacity-100">{kana.kana.romaji}</p>
                        {/* digraph (youon) and diacritic ((han)dakuten) indicators */}
                        <div className="absolute bottom-1 right-1 flex space-x-1">
                          {kana.youon != null ? <div className="h-3 w-3 rounded-full bg-emerald-400"></div> : <div className="h-3 w-3 rounded-full "></div>}
                          {kana.dakuten != null || kana.handakuten != null ? <div className="h-3 w-3 rounded-full bg-violet-500"></div> : <div className="h-3 w-3 rounded-full "></div>}
                        </div>
                      </div>
                    ) : (
                      <div key={index} className="col-span-1 row-span-1"></div>
                    )
                  )}
                </>
              ))}
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
