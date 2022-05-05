import AboutMe from "../views/AboutMe";
import axios from "axios";
import FilterCard from "../views/FilterCard";
import FireworkCanvas from "../components/FireworkCanvas";
import Head from "next/head";
import Header from "../views/Header";
import PinnedList from "../views/PinnedList";
import SocialBlock from "../views/SocialBlock";
import { AboutMeModel } from "../model/AboutMeModel";
import { SSRProvider } from "react-bootstrap";
import type { GetStaticProps } from "next";
import { PinnedListModel } from "../model/PinnedListModel";

function Home({
  aboutme_data,
  pinnedList_data,
}: {
  aboutme_data: AboutMeModel;
  pinnedList_data: PinnedListModel;
}) {
  return (
    <SSRProvider>
      <div className=" tw-select-none ">
        <FireworkCanvas />
        <Head>
          <title>张宇腾 My Blog</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="min-h-screen tw-mx-auto tw-grid tw-grid-flow-col tw-grid-cols-4">
          <div className=" tw-col-start-1 tw-col-end-2 tw-bg-white tw-px-5 tw-min-h-screen">
            <Header />
            <AboutMe
              avatarURL={aboutme_data.avatarURL}
              impression={aboutme_data.impression}
              badges={aboutme_data.badges}
              quote={aboutme_data.quote}
            />
            <SocialBlock />
          </div>
          <div className=" tw-col-start-2 tw-col-end-4 tw-border-l tw-border-r"></div>
          <div className="tw-pt-4 tw-col-start-4 tw-col-end-5 tw-px-5 ">
            <FilterCard />
            <PinnedList list={pinnedList_data} />
          </div>
        </main>
      </div>
    </SSRProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const aboutme_data = (
    await axios({
      method: "GET",
      url: "http://127.0.0.3:8080/about-me.json",
      responseType: "json",
    })
  ).data;

  const pinnedList_data = (
    await axios({
      method: "GET",
      url: "http://127.0.0.3:8080/doc-server/get-recommend-list.php",
      responseType: "json",
    })
  ).data;

  return {
    props: {
      aboutme_data,
      pinnedList_data,
    },
  };
};

export default Home;
