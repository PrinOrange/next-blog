import Affix from '../components/Affix';
import classNames from 'classnames';
import FireworkCanvas from '../components/FireworkCanvas';
import Head from 'next/head';
import OfficeInfo from '../views/OfficeInfo';
import PinnedListBroad from '../views/PinnedList';
import SocialBlock from '../views/SocialBlock';
import { fetchOfficeInfoData, fetchPinnedListData } from '../api/SSR-ajax';
import { TbError404 } from 'react-icons/tb';
import { useEffect, useState } from 'react';

export default function Custom404() {
  const [fetchedPinnedListData, set_fetchedPinnedListData] = useState<any>([]);
  const [fetchedOfficeInfoData, set_fetchedOfficeInfoData] = useState<any>({});
  useEffect(() => {
    const fetchData = async () => {
      set_fetchedPinnedListData((await fetchPinnedListData()).data);
      set_fetchedOfficeInfoData((await fetchOfficeInfoData()).data);
    };
    fetchData();
  }, []);
  return (
    <div className=" tw-select-none ">
      <FireworkCanvas />
      <Head>
        <title>{"页面未找到-张宇腾 My Blog"}</title>
        <meta name="description" content="404 NOT FOUND" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classNames("tw-mx-auto", "tw-grid", "tw-grid-flow-row", "tw-grid-cols-1", "md:tw-grid-cols-3", "lg:tw-grid-cols-4", "tw-subpixel-antialiased")}>
        <div className={classNames("tw-px-5", "md:tw-col-span-1", "lg:tw-col-span-1")}>
          <Affix direction="top" space={50}>
            <PinnedListBroad list={fetchedPinnedListData} />
          </Affix>
        </div>
        <div className={classNames("tw-border-l", "tw-border-r", "md:tw-col-span-2", "lg:tw-col-span-2", "tw-flex", "tw-flex-col", "tw-justify-center", "tw-align-middle")}>
          <p className=" tw-text-emerald-500 tw-text-center tw-flex justify-content-center">
            <TbError404 size="10em" />
          </p>
          <p className="tw-font-bold tw-text-2xl tw-text-center tw-block">{"页面走丢了，去别处看看吧！"}</p>
          <p className="tw-font-bold tw-text-2xl tw-text-center tw-block">{"404 NOT FOUND"}</p>
        </div>
        <div className={classNames("tw-pt-4", "tw-px-5", "md:tw-col-span-3", "lg:tw-col-span-1")}>
          <OfficeInfo
            icp={fetchedOfficeInfoData.icp}
            siteTitle={fetchedOfficeInfoData.siteTitle}
            icpa={fetchedOfficeInfoData.icpa}
            ps={fetchedOfficeInfoData.ps}
            copyright={fetchedOfficeInfoData.copyright}
            poweredBy={fetchedOfficeInfoData.poweredBy}
            position={fetchedOfficeInfoData.position}
            phoneCall={fetchedOfficeInfoData.phoneCall}
            email={fetchedOfficeInfoData.email}
          />
          <Affix direction="top" space={50}>
            <SocialBlock />
          </Affix>
        </div>
      </main>
    </div>
  );
}
