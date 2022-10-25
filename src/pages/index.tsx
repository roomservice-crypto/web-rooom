import HeroScene from "@/components/home/HeroScene";
import SectionComponents from "@/components/home/section-components";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Room Service</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <HeroScene />
        <SectionComponents />
      </main>
    </>
  );
};

export default Home;
