import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocsListModel } from "../model/DocsListModel";
import { fetchFirstLoadDocsListData } from "../api-ajax/SSR-ajax";

export interface DocCheckerType {
  keyword?: string[];
  tags?: string[];
  outset?: string;
}

export const InitialDocsList: DocsListModel = (await fetchFirstLoadDocsListData()).data;

export const fetchCheckedDocsList = createAsyncThunk(
  "DocsChecker/fetchDocsList",
  async (para: DocCheckerType) => {
    console.log(para);
    return (
      await axios({
        method: "GET",
        url: `http://127.0.0.3:8080/doc-server/home-list.php`,
        responseType: "json",
        params: para,
      })
    ).data;
  }
);

export const DocsCheckerSlice = createSlice({
  name: "DocsChecker",
  initialState: InitialDocsList,
  reducers: {},
  extraReducers: {
    [fetchCheckedDocsList.fulfilled as any]: (
      state: DocsListModel,
      action: any
    ) => {
      return [...state, ...action.payload];
    },
  },
});

export const selectDocsList = (states: any) => {
  return states.DocsChecker;
};

export default DocsCheckerSlice.reducer;
