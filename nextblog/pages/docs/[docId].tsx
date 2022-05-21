import classNames from "classnames";
import "md-editor-rt/lib/style.css";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
import { Offcanvas, SSRProvider } from "react-bootstrap";
import { FaListAlt } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { RiArrowGoBackFill } from "react-icons/ri";
import {
  fetchDocMetaData,
  fetchDocModelTextData,
  fetchNextContentData
} from "../../api-ajax/SSR-ajax";
import Affix from "../../components/Affix";
import FireworkCanvas from "../../components/FireworkCanvas";
import { DocMetaModel } from "../../model/DocMetaModel";
import { NextContentModel } from "../../model/NextContentModel";
import { MetaSEOModel } from "../../model/SEOModel";
import Header from "../../views/HeaderLOGO";
import DocMeta from "../../views/MetaInfo";
import NextContent from "../../views/NextContent";
import Reader from "../../views/Reader";

/*
 * 为了实现点击目录自动滚动的功能，目录组件需要客户端渲染。
 * 因为在服务端渲染时，目录组件无法在Node环境下映射到编辑器组件。
 */
const CatalogBlock = dynamic(() => import("../../views/CatalogBlock"), {
  ssr: false,
});
const CatalogDrawer = dynamic(() => import("../../views/CatalogDrawer"), {
  ssr: false,
});

const Docs = (props: {
  fetchedDocMetaData: DocMetaModel;
  fetchedSEOConfigData: MetaSEOModel;
  fetchedDocModelTextData: string;
  fetchedNextContentData: NextContentModel;
}) => {
  const reader_id = "MARKDOWN-READER";

  const [catalog_drawer_show, set_catalog_drawer_show] = useState(false);

  const handleCatalogDrawerClose = () => {
    set_catalog_drawer_show(false);
    console.log("hi");
  };

  const handleCatalogDrawerOpen = () => {
    set_catalog_drawer_show(true);
  };

  const handleBackForward = () => {
    window.history.go(-1);
  };

  return (
    <SSRProvider>
      <div className=" tw-select-none ">
        <FireworkCanvas />
        <Head>
          <title>{props.fetchedSEOConfigData.title}</title>
          <meta name="description" content={props.fetchedSEOConfigData.description} />
          <meta name="keyword" content={props.fetchedSEOConfigData.keywords} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav
          className={classNames(
            "tw-flex",
            "tw-justify-between",
            "tw-py-1",
            "tw-border-b",
            "tw-bg-white",
            "tw-top-0",
            "tw-fixed",
            "tw-w-full",
            "tw-z-10"
          )}
        >
          <FaListAlt
            className="tw-mx-5 tw-my-2 tw-cursor-pointer"
            size={"2em"}
            onClick={handleCatalogDrawerOpen}
          />
          <Header />
          <RiArrowGoBackFill
            className="tw-mx-5 tw-my-2 tw-cursor-pointer"
            size={"2em"}
            onClick={handleBackForward}
          />
        </nav>

        <main
          className={classNames(
            "tw-mx-auto",
            "tw-grid",
            "tw-mt-14",
            "tw-grid-cols-1",
            "tw-grid-flow-row",
            "md:tw-grid-cols-3",
            "lg:tw-grid-cols-4",
            "tw-subpixel-antialiased"
          )}
        >
          <div
            className={classNames(
              "tw-col-span-1",
              "tw-order-2",
              "md:tw-col-span-1",
              "lg:tw-col-span-1",
              "tw-px-5"
            )}
          >
            <DocMeta {...props.fetchedDocMetaData} />
            <Affix direction={"top"} space={90}>
              <CatalogBlock mapId={reader_id} />
            </Affix>
          </div>
          <div
            className={classNames(
              "tw-col-span-1",
              "tw-order-1",
              "lg:tw-col-span-2",
              "md:tw-col-span-2",
              "md:tw-order-2",
              "tw-border-l",
              "tw-border-r",
              "tw-px-4",
              "tw-z-0"
            )}
          >
            <Reader
              docMeta={props.fetchedDocMetaData}
              docModelText={props.fetchedDocModelTextData}
              readerId={reader_id}
            />
          </div>
          <div
            className={classNames(
              "tw-col-span-1",
              "tw-order-3",
              "md:tw-col-span-3",
              "lg:tw-col-span-1",
              "tw-px-5"
            )}
          >
            <Affix direction={"top"} space={90}>
              <NextContent list={props.fetchedNextContentData} />
            </Affix>
          </div>
        </main>
      </div>
      <Offcanvas show={catalog_drawer_show} onHide={handleCatalogDrawerClose} autoFocus={false}>
        <Offcanvas.Body>
          <div className=" tw-flex tw-justify-end">
            <GrClose
              className="tw-px-2 tw-py-2 tw-cursor-pointer"
              size="3em"
              onClick={handleCatalogDrawerClose}
            />
          </div>
          <CatalogDrawer mapId={reader_id} onClick={handleCatalogDrawerClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </SSRProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const makeSEOConfig = (docMeta: DocMetaModel): MetaSEOModel => {
    return {
      title: `${docMeta.title}-张宇腾博客`,
      keywords: docMeta.tags?.join(","),
      author: docMeta.author,
      description: docMeta.citation,
    };
  };

  const _fetchedDocMetaData = (await fetchDocMetaData(context.params?.docId)).data;
  const _fetchedNextContentData = (await fetchNextContentData(_fetchedDocMetaData.postDate)).data;
  const _fetchedSEOConfigData = makeSEOConfig(_fetchedDocMetaData);

  return {
    props: {
      fetchedDocMetaData: _fetchedDocMetaData,
      fetchedDocModelTextData: (await fetchDocModelTextData(context.params?.docId)).data,
      fetchedNextContentData: _fetchedNextContentData,
      fetchedSEOConfigData: _fetchedSEOConfigData,
    },
  };
};

export default Docs;
