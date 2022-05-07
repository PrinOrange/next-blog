import Affix from "../../components/Affix";
import axios from "axios";
import DocMeta from "../../views/DocMeta";
import DocReader from "../../views/DocReader";
import dynamic from "next/dynamic";
import FireworkCanvas from "../../components/FireworkCanvas";
import Head from "next/head";
import NextContent from "../../views/NextContent";
import { DocMetaModel } from "../../model/DocMetaModel";
import { GetServerSideProps } from "next";
import { MetaSEOModel } from "../../model/SEOModel";
import { SSRProvider } from "react-bootstrap";
import "md-editor-rt/lib/style.css";
import { useDocFilter } from "../../hooks/useDocFilter";
import { NextContentModel } from "../../model/NextContentModel";

/*
 * 为了实现点击目录自动滚动的功能，目录组件需要客户端渲染。
 * 因为在服务端渲染时，目录组件无法在Node环境下映射到编辑器组件。
 */
const DocCatalog = dynamic(() => import("../../views/DocCatalogBlock"), {
  ssr: false,
});

const Docs = (props: {
  docMeta_data: DocMetaModel;
  SEO_config: MetaSEOModel;
  docModelText_data: string;
  nextContent_data:NextContentModel,
}) => {
  const reader_id = "MARKDOWN-READER";
  return (
    <SSRProvider>
      <div className=" tw-select-none ">
        <FireworkCanvas />
        <Head>
          <title>{props.SEO_config.title}</title>
          <meta name="description" content={props.SEO_config.description} />
          <meta name="keyword" content={props.SEO_config.keywords} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" tw-mx-auto tw-grid tw-grid-flow-col tw-grid-cols-4 tw-subpixel-antialiased">
          <div className=" tw-col-start-1 tw-col-end-2 tw-px-5 tw-min-h-screen">
            <DocMeta {...props.docMeta_data} />
            <Affix direction={"top"} space={50}>
              <DocCatalog mapId={reader_id} />
            </Affix>
          </div>
          <div className="tw-col-start-2 tw-col-end-4 tw-border-l tw-border-r tw-px-4">
            <DocReader
              docMeta={props.docMeta_data}
              docModelText={props.docModelText_data}
              readerId={reader_id}
            />
          </div>
          <div className=" tw-col-start-4 tw-col-end-5 tw-px-5 ">
            <Affix direction={"top"} space={50}>
              <NextContent list={props.nextContent_data} />
            </Affix>
          </div>
        </main>
      </div>
    </SSRProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const docMeta_data: DocMetaModel = (
    await axios({
      method: "GET",
      url: `http://127.0.0.3:8080/doc-server/get-doc-info.php`,
      params: {
        id: context.params?.docId,
      },
      responseType: "json",
    })
  ).data;

  const docModelText_data: string = (
    await axios({
      method: "GET",
      url: `http://127.0.0.3:8080/doc-server/get-doc-model-text.php`,
      params: {
        id: context.params?.docId,
      },
      responseType: "text",
    })
  ).data;

  const nextContent_data: NextContentModel = (
    await axios({
      method: "GET",
      url: `http://127.0.0.3:8080/doc-server/get-next-content.php`,
      params: {
        outset: docMeta_data.postDate,
      },
      responseType: "json",
    })
  ).data;

  const SEO_config: MetaSEOModel = {
    title: `${docMeta_data.title}-张宇腾博客`,
    keywords: docMeta_data.tags?.join(","),
    author: docMeta_data.author,
    description: docMeta_data.citation,
  };

  return {
    props: {
      docMeta_data,
      SEO_config,
      docModelText_data,
      nextContent_data,
    },
  };
};

export default Docs;
