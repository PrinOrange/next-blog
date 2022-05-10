import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocsListModel } from "../model/DocsListModel";

export interface DocFilterType {
  keyword?: string[];
  tags?: string[];
  outset?: string;
}

export const InitialDocsList: DocsListModel = [];

export interface CheckDocsAction {
  payload: DocFilterType;
  type: string;
}

export const fetchDocsList = createAsyncThunk(
  "DocsChecker/fetchDocsList",
  async () => {
    const docList_data = (
      await axios({
        method: "GET",
        url: `http://127.0.0.3:8080/doc-server/get-home-list.php`,
        responseType: "json",
      })
    ).data;
    return docList_data;
  }
);

export const DocsCheckerSlice = createSlice({
  name: "DocsChecker",
  initialState: InitialDocsList,
  reducers: {
    checkDocs: (state: DocsListModel, action: CheckDocsAction) => {},
  },
  extraReducers: {
    [fetchDocsList.fulfilled as any]: (state: DocsListModel, action: any) => {
      return [...state, action.payload];
    },
  },
});

export const selectDocsList = (states: any) => states.DocsChecker;
export const { checkDocs } = DocsCheckerSlice.actions;

export default DocsCheckerSlice.reducer;
