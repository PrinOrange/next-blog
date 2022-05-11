import axios, { AxiosPromise } from "axios";
import { DocsListModel } from "../model/DocsListModel";
import { DocCheckerType } from "../slices/DocsCheckerSlice";

export const fetchCheckedDocsList = (
  filter: DocCheckerType
): AxiosPromise<DocsListModel> => {
  return axios({
    method: "GET",
    url: "http://127.0.0.3:8080/doc-server/get-archive-doc-list.php",
    params: {
      keyword: filter.keyword?.join(","),
      tags: filter.tags?.join(","),
      outset: filter?.outset,
    },
    responseType: "json",
  });
};
