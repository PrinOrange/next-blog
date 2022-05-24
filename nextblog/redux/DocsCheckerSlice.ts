import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocsListModel } from "../model/DocsListModel";
import { fetchFirstLoadDocsListData } from "../api-ajax/SSR-ajax";

export interface DocsCheckerFilter {
  keyword?: string;
  tags?: string;
  outset?: string;
}

export interface DocsCheckerState {
  filter: DocsCheckerFilter;
  list: DocsListModel;
}

export const InitialDocsCheckerState: DocsCheckerState = {
  list: (await fetchFirstLoadDocsListData()).data ?? [],
  filter: {
    tags: "",
    keyword: "",
    outset: "",
  },
};

export const fetchCheckedDocsList = createAsyncThunk(
  "DocsChecker/fetchDocsList",
  async (filter: DocsCheckerFilter) => {
    return {
      list: (
        await axios({
          method: "GET",
          url: `http://127.0.0.3:8080/doc-server/check-doc.php`,
          responseType: "json",
          params: filter,
        })
      ).data,
      filter: filter,
    };
  }
);

export const DocsCheckerSlice = createSlice({
  name: "DocsChecker",
  initialState: InitialDocsCheckerState,
  reducers: {
    cleanCheckerListState: (state: DocsCheckerState): DocsCheckerState => {
      return {
        ...state,
        list: [],
      };
    },
  },
  extraReducers: {
    [fetchCheckedDocsList.fulfilled as any]: (state: DocsCheckerState, action: any) => {
      return { filter: action.payload.filter, list: [...state.list, ...action.payload.list] };
    },
  },
});

export const selectCheckerState = (states: any) => {
  return states.DocsChecker;
};
export const { cleanCheckerListState } = DocsCheckerSlice.actions;
export default DocsCheckerSlice.reducer;
