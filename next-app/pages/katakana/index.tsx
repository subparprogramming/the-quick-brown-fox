import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Footer from "../../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Katakana</title>
      </Head>

      {/* page */}
      <div className="flex min-h-screen w-full flex-col items-center bg-space-cadet text-isabelline">
        <Link href="/">
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
                <h1 className="">Katakana</h1>
              </div>
              <h1 className="pt-4 text-xl sm:text-3xl">片仮名 (カタカナ)</h1>
            </div>
            <img
              src="/assets/fox-animated-4.gif"
              alt="fox standing"
              className="col-span-1 -ml-6 h-1/2 w-full max-w-xs object-cover object-left-bottom sm:ml-0 sm:max-w-md"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
