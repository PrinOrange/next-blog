import axios, { AxiosPromise } from "axios";
import { AboutMeModel } from "../model/AboutMeModel";
import { DocMetaModel } from "../model/DocMetaModel";
import { DocsListModel } from "../model/DocsListModel";
import { FriendListModel } from "../model/FriendListModel";
import { NextContentModel } from "../model/NextContentModel";
import { OfficeInfoModel } from "../model/OfficeInfoModel";
import { PinnedListModel } from "../model/PinnedListModel";

/*这些模块都是实现Next.js构建时从服务器获取数据的方法。*/

export const fetchAboutmeData = (): AxiosPromise<AboutMeModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/about-me.json",
    responseType: "json",
  });
};

export const fetchPinnedListData = (): AxiosPromise<PinnedListModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/doc-server/get-recommend-list.php",
    responseType: "json",
  });
};

export const fetchFriendListData = (): AxiosPromise<FriendListModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/friend.json",
    responseType: "json",
  });
};

export const fetchFilterTagsData = (): AxiosPromise<string[]> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/doc-server/get-tags.php",
    responseType: "json",
  });
};

export const fetchOfficeInfoData = (): AxiosPromise<OfficeInfoModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/office-info.json",
    responseType: "json",
  });
};

export const fetchFirstLoadDocsListData = (): AxiosPromise<DocsListModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/doc-server/get-home-list.php",
    responseType: "json",
  });
};

export const fetchDocMetaData = (docId?: string[]|string): AxiosPromise<DocMetaModel> => {
  return axios({
    method: "GET",
    url: `http://127.0.0.3:8080/doc-server/get-doc-info.php`,
    params: {
      id: docId,
    },
    responseType: "json",
  });
};

export const fetchDocModelTextData = (docId?: string[]|string): AxiosPromise<string> => {
  return axios({
    method: "GET",
    url: `http://127.0.0.3:8080/doc-server/get-doc-model-text.php`,
    params: {
      id: docId,
    },
    responseType: "text",
  });
};

export const fetchNextContentData = (
  outset: string
): AxiosPromise<NextContentModel> => {
  return axios({
    method: "GET",
    url: `http://127.0.0.3:8080/doc-server/get-next-content.php`,
    params: {
      outset: outset,
    },
    responseType: "json",
  });
};
