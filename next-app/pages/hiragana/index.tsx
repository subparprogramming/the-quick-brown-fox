import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { useSpring, animated } from "react-spring";
import Footer from "../../components/Footer";

type Kana = {
  kana: string;
  romaji: string;
};

type HanDakuten = {
  kana: Kana;
  youon: [Kana, Kana, Kana] | null;
};

type Gojuon = {
  kana: Kana;
  youon: [Kana, Kana, Kana] | null;
  dakuten: HanDakuten | null;
  handakuten: HanDakuten | null;
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

function GojuonRow(props: { index: number; group: GojuonGroup }): JSX.Element {
  const [showDakuten, setShowDakuten] = useState(false);
  const [showHandakuten, setShowHandakuten] = useState(false);
  const dakuSpring = useSpring({
    from: { height: 0, opacity: 0, paddingTop: "0rem", paddingBottom: "0rem", marginTop: "-0.25rem", marginBottom: "-0.25rem" },
    to: {
      height: showDakuten ? "auto" : 0,
      opacity: showDakuten ? 1 : 0,
      paddingTop: showDakuten ? "1rem" : "0rem",
      paddingBottom: showDakuten ? "1rem" : "0rem",
      marginTop: showDakuten ? "0.25rem" : "-0.25rem",
      marginBottom: showDakuten ? "0.25rem" : "-0.25rem",
    },
  });
  const handakuSpring = useSpring({
    from: { height: 0, opacity: 0, paddingTop: "0rem", paddingBottom: "0rem", marginTop: "-0.25rem", marginBottom: "-0.25rem" },
    to: {
      height: showHandakuten ? "auto" : 0,
      opacity: showHandakuten ? 1 : 0,
      paddingTop: showHandakuten ? "1rem" : "0rem",
      paddingBottom: showHandakuten ? "1rem" : "0rem",
      marginTop: showHandakuten ? "0.25rem" : "-0.25rem",
      marginBottom: showHandakuten ? "0.25rem" : "-0.25rem",
    },
  });

  return (
    <>
      {/* lead consonant */}
      <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">{props.group.leadConsonant}</div>

      {/* gojuon kana */}
      {props.group.kana.map((gojuon, index) =>
        gojuon != null ? (
          <div key={index} onClick={() => {}} className="group relative col-span-1 row-span-1 m-1 flex flex-col items-center justify-center rounded-lg bg-isabelline p-4">
            <p className="">{gojuon.kana.kana}</p>
            <p className="h-1 pt-1 opacity-0 duration-200 group-hover:h-full group-hover:opacity-100">{gojuon.kana.romaji}</p>
            {/* digraph (youon) and diacritic ((han)dakuten) indicators */}
            <div className="absolute bottom-1 right-1 flex space-x-1">
              {gojuon.youon != null ? <div className="h-3 w-3 rounded-full bg-emerald-400"></div> : <div className="w-3"></div>}
              {gojuon.dakuten != null || gojuon.handakuten != null ? <div className="h-3 w-3 rounded-full bg-violet-500"></div> : <div className="w-3"></div>}
            </div>
          </div>
        ) : (
          <div key={index} className="col-span-1 row-span-1"></div>
        )
      )}

      {/* toggle show dakuten and handakuten buttons */}
      <div className="flex flex-col">
        {props.group && props.group.kana[0] && props.group.kana[0].dakuten != null ? (
          <div onClick={() => setShowDakuten(!showDakuten)} className="col-span-1 row-span-1 m-1 h-2/5 w-3/4 rounded-lg bg-violet-500 text-center text-xl text-isabelline md:w-1/3">
            <p className="translate-y-1 translate-x-2">゛</p>
          </div>
        ) : (
          <div className="col-span-1 row-span-1 m-1 h-2/5 w-1/3"></div>
        )}
        {props.group && props.group.kana[0] && props.group.kana[0].handakuten != null ? (
          <div onClick={() => setShowHandakuten(!showHandakuten)} className="col-span-1 row-span-1 m-1 h-2/5 w-3/4 rounded-lg bg-violet-500 text-center text-xl text-isabelline md:w-1/3">
            <p className="translate-y-1 translate-x-2">゜</p>
          </div>
        ) : (
          <div className="col-span-1 row-span-1 m-1 h-2/5 w-1/3"></div>
        )}
      </div>

      {/* dakuten row */}
      <>
        <animated.div style={dakuSpring} className="col-span-1 flex flex-col items-center justify-center text-isabelline underline decoration-2 underline-offset-4">
          {/* {props.group.kana[0]?.dakuten?.romaji[0]} */}
        </animated.div>
        {props.group.kana.map((gojuon, index) =>
          gojuon != null ? (
            <animated.div key={index} style={dakuSpring} className="group relative col-span-1 row-span-1 mx-1 flex flex-col items-center justify-center rounded-lg border-2 p-4 text-isabelline">
              <p className="">{gojuon.dakuten?.kana.kana}</p>
              <p className="h-1 pt-1 opacity-0 duration-200 group-hover:h-full group-hover:opacity-100">{gojuon.dakuten?.kana.romaji}</p>
              {/* digraph (youon) indicator */}
              <div className="absolute bottom-1 right-1 flex space-x-1">
                {gojuon.youon != null ? <div className="h-3 w-3 rounded-full bg-emerald-400"></div> : <div className="h-3 w-3 rounded-full "></div>}
              </div>
            </animated.div>
          ) : (
            <div key={index} className="col-span-1 row-span-1"></div>
          )
        )}
        <animated.div style={dakuSpring} className="col-span-1"></animated.div>
      </>

      {/* handakuten row */}
      <>
        <animated.div style={handakuSpring} className="col-span-1 flex flex-col items-center justify-center text-isabelline underline decoration-2 underline-offset-4">
          {/* {props.group.kana[0]?.handakuten?.romaji[0]} */}
        </animated.div>
        {props.group.kana.map((gojuon, index) =>
          gojuon != null ? (
            <animated.div key={index} style={handakuSpring} className="group relative col-span-1 row-span-1 m-1 flex flex-col items-center justify-center rounded-lg border-2 p-4 text-isabelline">
              <p className="">{gojuon.handakuten?.kana.kana}</p>
              <p className="h-1 pt-1 opacity-0 duration-200 group-hover:h-full group-hover:opacity-100">{gojuon.handakuten?.kana.romaji}</p>
              {/* digraph (youon) indicator */}
              <div className="absolute bottom-1 right-1 flex space-x-1">
                {gojuon.handakuten?.youon != null ? <div className="h-3 w-3 rounded-full bg-emerald-400"></div> : <div className="h-3 w-3 rounded-full "></div>}
              </div>
            </animated.div>
          ) : (
            <div key={index} className="col-span-1 row-span-1"></div>
          )
        )}
        <animated.div style={handakuSpring} className="col-span-1"></animated.div>
      </>
    </>
  );
}

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
            <div className="col-span-2 flex flex-col justify-start space-x-2 font-rampart-one text-5xl font-bold sm:text-6xl xl:text-7xl">
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
            <div className="grid grid-flow-row grid-cols-7 pt-1 font-sans text-lg font-bold text-black">
              <div className="col-span-1 row-span-1"></div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">a</div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">i</div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">u</div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">e</div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">o</div>
              <div className="col-span-1 row-span-1"></div>
              {gojuon.map((group) => (
                <>
                  <GojuonRow index={0} group={group} />
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
