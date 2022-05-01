import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-space-cadet font-rampart-one text-4xl font-bold text-isabelline">
        <h1 className="font-rampart-one">The</h1>
        <h1 className="font-new-tegomin">Quick</h1>
        <h1 className="font-sans">Brown</h1>
        <h1 className="font-serif">Fox</h1>
        <h1 className="font-shippori-mincho">おはよう</h1>
      </div>
    </>
  );
};

export default Home;