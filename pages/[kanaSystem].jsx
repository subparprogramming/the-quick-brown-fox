import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";
import GojuonRow from "../components/GojuonRow";
import * as hiragana from "../data/hiragana";
import * as katakana from "../data/katakana";

// Generates `/hiragana` and `/katakana`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { kanaSystem: 'hiragana' } },
      { params: { kanaSystem: 'katakana' } }
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

// Passes kanaSystem path param to the page as a prop
export async function getStaticProps(context) {
  const { kanaSystem } = context.params;
  return { props: { kanaSystem } };
};

const Page = ({ kanaSystem }) => {
  const kana = (kanaSystem === "katakana") ? katakana : hiragana;
  const foxSrc = (kanaSystem === "katakana") ? "/assets/fox-animated-4.gif" : "/assets/fox-animated-3.gif";
  return (
    <>
      <Head>
        <title>{kana.titleEnglish}</title>
      </Head>

      {/* page */}
      <div className="flex min-h-screen w-full flex-col items-center bg-space-cadet text-isabelline">
        <Link href="/" passHref>
          <div className="absolute top-4 left-4 flex items-center space-x-1 rounded-lg border-2 border-independence bg-independence py-2 px-3 duration-200 hover:border-raw-sienna">
            <ArrowNarrowLeftIcon className="h-4" />
            <p className="-translate-y-[0.1em] text-xs tracking-[0.2em]">
              BACK
            </p>
          </div>
        </Link>

        {/* page contents */}
        <div className="flex max-w-screen-xl flex-col">
          {/* header */}
          <div className="grid grid-flow-row grid-cols-3 items-center p-4 pt-12 sm:p-8 sm:pt-8">
            <div className="col-span-2 flex flex-col justify-start space-x-2 font-rampart-one text-5xl font-bold sm:text-6xl xl:text-7xl">
              <div className="flex flex-wrap">
                <h1 className="">{kana.titleEnglish}</h1>
              </div>
              <h1 className="pt-4 text-xl sm:text-3xl">{kana.titleJapanese}</h1>
            </div>
            <img
              src={foxSrc}
              alt="fox"
              className="col-span-1 -ml-6 h-1/2 w-full max-w-xs object-cover object-left-bottom sm:ml-0 sm:max-w-md"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* instructions */}

          {/* grid content */}
          <div className="mx-auto flex w-full flex-col">
            <div className="grid grid-flow-row grid-cols-7 pt-1 font-sans text-lg font-bold text-black">
              <div className="col-span-1 row-span-1"></div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">
                a
              </div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">
                i
              </div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">
                u
              </div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">
                e
              </div>
              <div className="col-span-1 row-span-1 m-1 flex items-center justify-center rounded-lg p-4 text-xl text-isabelline">
                o
              </div>
              <div className="col-span-1 row-span-1"></div>
              {kana.gojuon.map((group) => (
                <>
                  <GojuonRow index={0} group={group} />
                </>
              ))}
            </div>
          </div>

          {/* n */}
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Page;
