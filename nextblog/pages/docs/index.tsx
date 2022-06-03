import Affix from "../../components/Affix";
import CheckBroad from "../../views/CheckBroad";
import classNames from "classnames";
import DocsList from "../../views/DocsList";
import FireworkCanvas from "../../components/FireworkCanvas";
import Head from "next/head";
import Header from "../../views/HeaderLOGO";
import NavLink from "../../components/NavLink";
import PinnedListBroad from "../../views/PinnedList";
import { Button, Modal, SSRProvider } from "react-bootstrap";
import { fetchDocsSEOData, fetchFilterTagsData, fetchPinnedListData } from "../../api/ajax";
import { GetServerSideProps } from "next";
import { PinnedListModel } from "../../model/PinnedListModel";
import { useAppDispatch } from "../../redux/_store";
import { useSelector } from "react-redux";
import { DocsCheckerState, fetchCheckedDocsListThunk, selectCheckerState } from "../../redux/DocsCheckerSlice";
import { useEffect, useRef, useState } from "react";
import { MetaSEOModel } from "../../model/SEOModel";
import {ImSad} from 'react-icons/im'

function Docs(props: { fetchedFilterTagsData: string[]; fetchedPinnedListData: PinnedListModel; fetchedDocsSEOData: MetaSEOModel }) {
  const dispatch = useAppDispatch();
  const checker_state = useSelector<DocsCheckerState, DocsCheckerState>(selectCheckerState);
  const last_list_count = useRef<number>(0);
  const [modal_show, set_modal_show] = useState({ text: "", show: false });

  const handleModalClose = () => {
    set_modal_show({
      text: undefined!,
      show: false,
    });
  };
  const handleLoadMore = () => {
    last_list_count.current = checker_state.list.length;
    dispatch(
      fetchCheckedDocsListThunk({
        search_tags: checker_state.factor.search_tags,
        search_keywords: checker_state.factor.search_keywords,
        outset: checker_state.list[checker_state.list.length - 1].postDate,
      })
    );
  };
  useEffect(() => {
    if (checker_state.list.length !== 0 && checker_state.list.length - last_list_count.current === 0) {
      set_modal_show({ text: "加载已经到底了！", show: true });
    }
  }, [checker_state.list]);

  return (
    <SSRProvider>
      <div className=" tw-select-none ">
        <FireworkCanvas />
        <Head>
          <title>{props.fetchedDocsSEOData.title}</title>
          <meta name="description" content={props.fetchedDocsSEOData.description} />
          <meta name="Keywords" content={props.fetchedDocsSEOData.keywords} />
          <meta name="author" content={props.fetchedDocsSEOData.author} />
          <meta name="copyright" content={props.fetchedDocsSEOData.copyright} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Affix direction={"top"} space={0}>
          <nav className=" tw-flex tw-justify-center tw-py-2 tw-border-b tw-bg-white">
            <NavLink content={"Home"} checked={false} href="/" />
            <NavLink content={"Docs"} checked={true} href="/docs" />
          </nav>
        </Affix>
        <main className={classNames("tw-mx-auto", "tw-grid", "tw-grid-flow-row", "tw-grid-cols-1", "md:tw-grid-cols-3", "lg:tw-grid-cols-4", "tw-subpixel-antialiased")}>
          <div className={classNames("tw-px-5", "md:tw-col-span-1", "lg:tw-col-span-1")}>
            <header className=" tw-mt-6">
              <Header />
            </header>
            <Affix direction={"top"} space={90}>
              <CheckBroad tags={props.fetchedFilterTagsData} />
            </Affix>
          </div>
          <div className={classNames("tw-border-l", "tw-border-r", "md:tw-col-span-2", "lg:tw-col-span-2")}>
            <DocsList list={checker_state.list} />
            <div className=" tw-my-4 tw-text-center">
              <div className="tw-flex tw-justify-center tw-flex-col tw-align-middle tw-my-8" hidden={checker_state.list.length !== 0}>
                <ImSad className="tw-mx-auto tw-my-4" size="5em" />
                <p className="tw-text-lg tw-font-bold">{"抱歉，你要搜索的关键词没有找到，换个词试试吧！"}</p>
                <p className="tw-text-lg tw-font-bold">{"Sorry, no content related to the keyword you were searching for was found"}</p>
              </div>
              <Button className="shadow-none" as="div" onClick={handleLoadMore} hidden={checker_state.list.length === 0}>
                {"加载更多"}
              </Button>
            </div>
          </div>
          <div className={classNames("tw-pt-4", "tw-px-5", "md:tw-col-span-3", "lg:tw-col-span-1")}>
            <Affix direction={"top"} space={90}>
              <PinnedListBroad list={props.fetchedPinnedListData} />
            </Affix>
          </div>
        </main>
      </div>
      <Modal show={modal_show.show} onHide={handleModalClose} centered>
        <Modal.Body>
          {modal_show.text}
          <div className="d-flex justify-content-end">
            <Button as="div" variant="primary" onClick={handleModalClose}>
              {"关闭"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </SSRProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      fetchedFilterTagsData: (await fetchFilterTagsData()).data,
      fetchedPinnedListData: (await fetchPinnedListData()).data,
      fetchedDocsSEOData: (await fetchDocsSEOData()).data,
    },
  };
};

export default Docs;
