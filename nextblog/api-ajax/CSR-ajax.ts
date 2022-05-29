import axios, { AxiosPromise } from "axios";
import { DocsListModel } from "../model/DocsListModel";

export const fetchHomeDocsListLoadMore = (
  load_outset:string
): AxiosPromise<DocsListModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/doc-server/home-list.php",
    params: {
      load_outset:load_outset
    },
    responseType: "json",
  });
};