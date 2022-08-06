import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Quick Brown Fox</title>
      </Head>

      {/* page */}
      <div className="flex min-h-screen w-full flex-col items-center bg-space-cadet text-isabelline">
        {/* contents */}
        <div className="flex max-w-screen-xl flex-col">
          {/* header */}
          <div className="grid grid-flow-row grid-cols-3 items-center p-4 sm:px-8">
            <div className="col-span-3 flex flex-col justify-start space-x-2 font-rampart-one text-7xl font-bold sm:col-span-2 sm:text-8xl xl:text-9xl">
              <div className="flex flex-wrap">
                <h1 className="">The</h1>
                <h1 className="">Quick</h1>
                <h1 className="">Brown</h1>
                <h1 className="">Fox</h1>
              </div>
              <h1 className="pl-1 pt-4 text-3xl">おはよう!!!</h1>
            </div>
            <img
              src="/assets/fox-animated-1.gif"
              alt="fox standing"
              className="col-span-3 -ml-6 h-1/2 w-full max-w-xs object-cover object-left-bottom sm:col-span-1 sm:ml-0 sm:max-w-md"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* learn hiragana/katakana buttons */}
          <div className="mx-auto grid w-full grid-flow-row grid-cols-1 justify-items-center gap-4 px-8 py-2 md:w-3/4 md:grid-cols-2 text-lg">
            <Link href="/hiragana" passHref>
              <div className="col-span-1 flex w-full justify-center rounded-lg border-2 border-independence bg-independence px-2 py-4 duration-200 hover:border-raw-sienna">
                Hiragana Chart
              </div>
            </Link>

            <Link href="/katakana" passHref>
              <div className="col-span-1 flex w-full justify-center rounded-lg border-2 border-independence bg-independence px-2 py-4 duration-200 hover:border-raw-sienna">
                Katakana Chart
              </div>
            </Link>
          </div>

          {/* grid content */}
          <div className="mx-auto w-fit flex-col mt-8 flex">
            <div className="ml-auto mr-0 px-10 text-right">
              This grid serves no functional purpose :D
            </div>
            <div className="grid grid-flow-col grid-cols-5 grid-rows-4 px-8 pt-1 font-sans font-bold text-black">
              <div className="row-span-3 row-start-2 m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                01
              </div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                02
              </div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                03
              </div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-raw-sienna p-4">
                04
              </div>
              <div className="col-span-2 m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                05
              </div>
              <Link
                href="https://www.deviantart.com/kitsune-09/art/Tempura-Udon-877669948"
                passHref
              >
                <div className="row-span-2 m-1 flex items-center justify-center rounded-lg bg-isabelline p-4 duration-200 hover:-translate-y-1 hover:shadow-2xl">
                  <div className="" style={{ writingMode: "vertical-lr" }}>
                    天ぷらうどん
                  </div>
                </div>
              </Link>
              <div className="row-span-2 m-1 flex items-center justify-center rounded-lg border-4 p-4 text-isabelline">
                07
              </div>
              <div className="col-span-2 m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                <img
                  src="/assets/fox-animated-6-half-height.gif"
                  alt="fox sleeping"
                  className="w-2/3 object-cover object-bottom"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                09
              </div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                10
              </div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                11
              </div>
              <div className="m-1 flex items-center justify-center rounded-lg p-4 text-center text-isabelline">
                おいしいね？
              </div>
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
