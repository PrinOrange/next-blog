import { DocsListModel } from "./DocsListModel";

export interface CheckedDocsListModel {
  status: "success" | "failed" | "loading";
  data: DocsListModel;
}
