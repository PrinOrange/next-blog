import AboutMe from "../views/AboutMe";
import Affix from "../components/Affix";
import classNames from "classnames";
import DocsList from "../views/DocsList";
import FireworkCanvas from "../components/FireworkCanvas";
import Friends from "../views/Friends";
import Head from "next/head";
import Header from "../views/HeaderLOGO";
import NavLink from "../components/NavLink";
import OfficeInfo from "../views/OfficeInfo";
import PinnedListBroad from "../views/PinnedList";
import SocialBlock from "../views/SocialBlock";
import { AboutMeModel } from "../model/AboutMeModel";
import { Button, Modal, SSRProvider } from "react-bootstrap";
import { DocsListModel } from "../model/DocsListModel";
import {
  fetchAboutmeData,
  fetchFilterTagsData,
  fetchFirstLoadDocsListData,
  fetchFriendListData,
  fetchHomeDocsListLoadMore,
  fetchOfficeInfoData,
  fetchPinnedListData,
  fetchHomeSEOData,
} from "../api/ajax";
import { FriendListModel } from "../model/FriendListModel";
import { OfficeInfoModel } from "../model/OfficeInfoModel";
import { PinnedListModel } from "../model/PinnedListModel";
import { useState } from "react";
import type { GetServerSideProps } from "next";
import { MetaSEOModel } from "../model/SEOModel";

function Home(props: {
  fetchedAboutmeData: AboutMeModel;
  fetchedPinnedListData: PinnedListModel;
  fetchedFriendListData: FriendListModel;
  fetchedOfficeInfoData: OfficeInfoModel;
  fetchedFirstLoadDocsListData: DocsListModel;
  fetchedFilterTagsData: string[];
  fetchedHomeSEOData: MetaSEOModel;
}) {
  const [docs_list, set_docs_list] = useState(props.fetchedFirstLoadDocsListData);
  const [modal_show, set_modal_show] = useState({ text: "", show: false });

  const handleModalClose = () => {
    set_modal_show({
      text: undefined!,
      show: false,
    });
  };

  const handleLoadMore = async () => {
    
    const loaded_data = (await fetchHomeDocsListLoadMore(docs_list[docs_list.length - 1].postDate)).data;
    if (loaded_data.length !== 0) {
      set_docs_list([...docs_list, ...loaded_data]);
    } else {
      set_modal_show({ text: "????????????????????????", show: true });
    }
  };

  return (
    <SSRProvider>
      <div className=" tw-select-none ">
        <FireworkCanvas />
        <Head>
          <title>{props.fetchedHomeSEOData.title}</title>
          <meta name="description" content={props.fetchedHomeSEOData.description} />
          <meta name="Keywords" content={props.fetchedHomeSEOData.keywords} />
          <meta name="author" content={props.fetchedHomeSEOData.author} />
          <meta name="copyright" content={props.fetchedHomeSEOData.copyright} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={classNames("tw-mx-auto", "tw-grid", "tw-grid-flow-row", "tw-grid-cols-1", "md:tw-grid-cols-3", "lg:tw-grid-cols-4", "tw-subpixel-antialiased")}>
          <div className={classNames("tw-px-5", "md:tw-col-span-1", "lg:tw-col-span-1")}>
            <header className="tw-mt-6">
              <Header />
            </header>
            <AboutMe
              avatarURL={props.fetchedAboutmeData.avatarURL}
              impression={props.fetchedAboutmeData.impression}
              badges={props.fetchedAboutmeData.badges}
              quote={props.fetchedAboutmeData.quote}
            />
            <Affix direction="top" space={50}>
              <PinnedListBroad list={props.fetchedPinnedListData} />
            </Affix>
          </div>
          <div className={classNames("tw-border-l", "tw-border-r", "md:tw-col-span-2", "lg:tw-col-span-2")}>
            <Affix direction={"top"} space={0}>
              <nav className=" tw-flex tw-justify-center tw-py-2 tw-border-b tw-bg-white">
                <NavLink content={"Home"} checked={true} href="/" />
                <NavLink content={"Docs"} checked={false} href="/docs" />
              </nav>
            </Affix>
            <DocsList list={docs_list} />
            <div className=" tw-my-4 tw-flex tw-justify-center">
              <Button className="shadow-none" as="div" onClick={handleLoadMore}>
                {"????????????"}
              </Button>
            </div>
          </div>
          <div className={classNames("tw-pt-4", "tw-px-5", "md:tw-col-span-3", "lg:tw-col-span-1")}>
            <Friends list={props.fetchedFriendListData} />
            <OfficeInfo
              icp={props.fetchedOfficeInfoData.icp}
              siteTitle={props.fetchedOfficeInfoData.siteTitle}
              icpa={props.fetchedOfficeInfoData.icpa}
              ps={props.fetchedOfficeInfoData.ps}
              copyright={props.fetchedOfficeInfoData.copyright}
              poweredBy={props.fetchedOfficeInfoData.poweredBy}
              position={props.fetchedOfficeInfoData.position}
              phoneCall={props.fetchedOfficeInfoData.phoneCall}
              email={props.fetchedOfficeInfoData.email}
            />
            <Affix direction="top" space={50}>
              <SocialBlock />
            </Affix>
          </div>
        </main>
      </div>
      <Modal show={modal_show.show} onHide={handleModalClose} centered>
        <Modal.Body>
          {modal_show.text}
          <div className="d-flex justify-content-end">
            <Button as="div" variant="primary" onClick={handleModalClose}>
              {"??????"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </SSRProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      fetchedAboutmeData: (await fetchAboutmeData()).data,
      fetchedHomeSEOData: (await fetchHomeSEOData()).data,
      fetchedPinnedListData: (await fetchPinnedListData()).data,
      fetchedFriendListData: (await fetchFriendListData()).data,
      fetchedOfficeInfoData: (await fetchOfficeInfoData()).data,
      fetchedFirstLoadDocsListData: (await fetchFirstLoadDocsListData()).data,
      fetchedFilterTagsData: (await fetchFilterTagsData()).data,
    },
  };
};

export default Home;
