import Affix from "../../components/Affix";
import CheckBroad from "../../views/CheckBroad";
import classNames from "classnames";
import DocsList from "../../views/DocsList";
import FireworkCanvas from "../../components/FireworkCanvas";
import Head from "next/head";
import NavLink from "../../components/NavLink";
import PinnedListBroad from "../../views/PinnedList";
import {
  fetchFilterTagsData,
  fetchPinnedListData,
} from "../../api-ajax/SSR-ajax";
import { GetServerSideProps } from "next";
import { PinnedListModel } from "../../model/PinnedListModel";
import { selectDocsList } from "../../slices/DocsCheckerSlice";
import { Button, SSRProvider } from "react-bootstrap";
import { useSelector } from "react-redux";
import { DocsListModel } from "../../model/DocsListModel";
import Header from "../../views/HeaderLOGO";
import { fetchHomeDocsListLoadMore } from "../../api-ajax/CSR-ajax";

function Docs(props: {
  fetchedFilterTagsData: string[];
  fetchedPinnedListData: PinnedListModel;
}) {
  const list = useSelector<DocsListModel, DocsListModel>(selectDocsList);

  const handleLoadMore = () => {

  };

  return (
    <SSRProvider>
      <div className=" tw-select-none ">
        <FireworkCanvas />
        <Head>
          <title>张宇腾MyBlog-归档</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Affix direction={"top"} space={0}>
          <nav className=" tw-flex tw-justify-center tw-py-2 tw-border-b tw-bg-white">
            <NavLink content={"Home"} checked={false} href="/" />
            <NavLink content={"Docs"} checked={true} href="/docs" />
            <NavLink content={"About"} checked={false} href="about" />
          </nav>
        </Affix>
        <main
          className={classNames(
            "tw-min-h-screen",
            "tw-mx-auto",
            "tw-grid",
            "tw-grid-cols-1",
            "tw-grid-flow-row",
            "lg:tw-grid-cols-4",
            "tw-subpixel-antialiased"
          )}
        >
          <div
            className={classNames(
              "tw-col-span-1",
              "lg:tw-col-span-1",
              "tw-px-5"
            )}
          >
            <header className=" tw-mt-6">
              <Header />
            </header>
            <Affix direction={"top"} space={90}>
              <CheckBroad tags={props.fetchedFilterTagsData} />
            </Affix>
          </div>
          <div
            className={classNames(
              "tw-col-span-1",
              "lg:tw-col-span-2",
              "tw-border-l",
              "tw-border-r",
            )}
          >
            <DocsList list={list} />
            <div className=" tw-my-4 tw-flex tw-justify-center">
              <Button className="shadow-none" as="div">
                {"加载更多"}
              </Button>
            </div>
          </div>
          <div
            className={classNames(
              "tw-col-span-1",
              "md:tw-col-span-3",
              "lg:tw-col-span-1",
              "tw-px-5"
            )}
          >
            <Affix direction={"top"} space={90}>
              <PinnedListBroad list={props.fetchedPinnedListData} />
            </Affix>
          </div>
        </main>
      </div>
    </SSRProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      fetchedFilterTagsData: (await fetchFilterTagsData()).data,
      fetchedPinnedListData: (await fetchPinnedListData()).data,
    },
  };
};

export default Docs;
