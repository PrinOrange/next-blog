import axios, { AxiosPromise } from "axios";
import { AboutMeModel } from "../model/AboutMeModel";
import { DocMetaModel } from "../model/DocMetaModel";
import { DocsListModel } from "../model/DocsListModel";
import { FriendListModel } from "../model/FriendListModel";
import { NextContentModel } from "../model/NextContentModel";
import { OfficeInfoModel } from "../model/OfficeInfoModel";
import { PinnedListModel } from "../model/PinnedListModel";
import {SSR_AJAX_API} from '../api.config.js';
/*这些模块都是实现Next.js构建时从服务器获取数据的方法。*/

export const fetchAboutmeData = (): AxiosPromise<AboutMeModel> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.AboutmeData,
    responseType: "json",
  });
};

export const fetchPinnedListData = (): AxiosPromise<PinnedListModel> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.PinnedListData,
    responseType: "json",
  });
};

export const fetchFriendListData = (): AxiosPromise<FriendListModel> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.FriendListData,
    responseType: "json",
  });
};

export const fetchFilterTagsData = (): AxiosPromise<string[]> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.FilterTagsData,
    responseType: "json",
  });
};

export const fetchOfficeInfoData = (): AxiosPromise<OfficeInfoModel> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.OfficeInfoData,
    responseType: "json",
  });
};

export const fetchFirstLoadDocsListData = (): AxiosPromise<DocsListModel> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.FirstLoadDocsListData,
    responseType: "json",
  });
};

export const fetchHomeDocsListLoadMore = (
  load_outset:string
): AxiosPromise<DocsListModel> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.DocsListLoadMoreData,
    params: {
      load_outset:load_outset
    },
    responseType: "json",
  });
};

export const fetchDocMetaData = (docId?: string[]|string): AxiosPromise<DocMetaModel> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.DocMetaData,
    params: {
      id: docId,
    },
    responseType: "json",
  });
};

export const fetchDocModelTextData = (docId?: string[]|string): AxiosPromise<string> => {
  return axios({
    method: "GET",
    url: SSR_AJAX_API.v1.DocModelTextData,
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
    url: SSR_AJAX_API.v1.NextContentData,
    params: {
      outset: outset,
    },
    responseType: "json",
  });
};

//TODO: 寻找一个方法，可以在外部文件中定义注册API的地址。
