import axios, { AxiosPromise } from "axios";
import { DocsListModel } from "../model/DocsListModel";
import { DocCheckerType } from "../slices/DocsCheckerSlice";

export const fetchCheckedDocsList = (
  filter: DocCheckerType
): AxiosPromise<DocsListModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/doc-server/check-doc.php",
    params: {
      keyword: filter.keyword?.join(","),
      tags: filter.tags?.join(","),
      outset: filter?.outset,
    },
    responseType: "json",
  });
};

export const fetchHomeDocsListLoadMore = (
  outset:string
): AxiosPromise<DocsListModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/doc-server/home-list.php",
    params: {
      outset:outset
    },
    responseType: "json",
  });
};