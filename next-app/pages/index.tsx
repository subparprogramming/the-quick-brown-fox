import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* page */}
      <div className="flex min-h-screen w-full flex-col items-center bg-space-cadet text-isabelline">
        {/* contents */}
        <div className="max-w-screen-xl">
          {/* header */}
          <div className="grid grid-flow-row grid-cols-3 items-center p-4 sm:p-8">
            <div className="col-span-3 flex flex-col justify-start space-x-2 font-rampart-one text-7xl font-bold sm:col-span-2 sm:text-8xl xl:text-9xl">
              <div className="flex flex-wrap">
                <h1 className="">The</h1>
                <h1 className="">Quick</h1>
                <h1 className="">Brown</h1>
                <h1 className="">Fox</h1>
              </div>
              <h1 className="pl-1 pt-4 text-3xl">おはよう!!!</h1>
            </div>
            <img src="/fox-animated-1.gif" className="col-span-2 h-1/2 w-full object-cover object-left-bottom sm:col-span-1" style={{ imageRendering: "pixelated" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
