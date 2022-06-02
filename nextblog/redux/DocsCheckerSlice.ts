import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocsListModel } from "../model/DocsListModel";
import { fetchCheckedDocsList, fetchFirstLoadDocsListData } from "../api/ajax";

export interface DocsCheckerFactor {
  search_terms?: string;
  search_tags?: string;
  outset?: string;
}

export interface DocsCheckerState {
  factor: DocsCheckerFactor;
  list: DocsListModel;
}

export const InitialDocsCheckerState: DocsCheckerState = {
  list: (await fetchFirstLoadDocsListData()).data ?? [],
  factor: {
    search_tags: "",
    search_terms: "",
    outset: "",
  },
};

export const fetchCheckedDocsListThunk = createAsyncThunk("DocsChecker/fetchDocsList", fetchCheckedDocsList);

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
    [fetchCheckedDocsListThunk.fulfilled as any]: (state: DocsCheckerState, action: any) => {
      return { factor: action.payload.filter, list: [...state.list, ...action.payload.list] };
    },
  },
});

export const selectCheckerState = (states: any) => {
  return states.DocsChecker;
};
export const { cleanCheckerListState } = DocsCheckerSlice.actions;
export default DocsCheckerSlice.reducer;
