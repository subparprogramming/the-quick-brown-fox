import type { NextPage } from "next";
import Head from "next/head";
import { MailIcon } from "@heroicons/react/solid";

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
            <img
              src="/assets/fox-animated-1.gif"
              alt="fox standing"
              className="col-span-3 -ml-6 h-1/2 w-full max-w-xs object-cover object-left-bottom sm:col-span-1 sm:ml-0 sm:max-w-md"
              style={{ imageRendering: "pixelated" }}
            />
          </div>

          {/* grid content */}
          <div className="mx-auto mt-8 flex w-full flex-col lg:w-3/4">
            <div className="ml-auto mr-0 px-10 text-right">idk man... this doesn&apos;t really do sh*t 😑</div>
            <div className="pt-1font-sans grid grid-flow-col grid-cols-5 grid-rows-4 px-8 font-bold text-black">
              <div className="row-span-3 row-start-2 m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">01</div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">02</div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">03</div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-raw-sienna p-4">04</div>
              <div className="col-span-2 m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">05</div>
              <div className="row-span-2 m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                <div className="" style={{ writingMode: "vertical-lr" }}>
                  天ぷらうどん
                </div>
              </div>
              <div className="row-span-2 m-1 flex items-center justify-center rounded-lg border-4 p-4 text-isabelline">07</div>
              <div className="col-span-2 m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">
                <img src="/assets/fox-animated-6-half-height.gif" alt="fox sleeping" className="w-2/3 object-cover object-bottom" style={{ imageRendering: "pixelated" }} />
              </div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">09</div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">10</div>
              <div className="m-1 flex items-center justify-center rounded-lg bg-isabelline p-4">11</div>
              <div className="m-1 flex items-center justify-center rounded-lg p-4 text-center text-isabelline">おいしいね？</div>
            </div>
          </div>
        </div>

        {/* footer */}
        <div className="mt-16 flex w-3/4 items-center justify-center space-x-3 border-t-2 py-10">
          {/* twitter link */}
          <a href="https://twitter.com/subpar_program">
            <svg className="h-7 duration-200 hover:text-stone-200" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
              />
            </svg>
          </a>

          {/* github link */}
          <a href="https://github.com/subparprogramming/bible-dev">
            <svg className="h-7 duration-200 hover:text-stone-200" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.104 2.104 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 0 1 1.025-2.688a3.594 3.594 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 0 1 .1 2.65a3.869 3.869 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 0 1 .675 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247z"
              />
            </svg>
          </a>

          {/* email link */}
          <a href="mailto:subparprogramming@googlegroups.com">
            <MailIcon className="h-7 duration-200 hover:text-stone-200" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
