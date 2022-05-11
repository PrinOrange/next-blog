import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DocsListModel } from "../model/DocsListModel";

export interface DocCheckerType {
  keyword?: string[];
  tags?: string[];
  outset?: string;
}

export const InitialDocsList: DocsListModel = [];

export const fetchCheckedDocsList = createAsyncThunk(
  "DocsChecker/fetchDocsList",
  async () => {
    return (
      await axios({
        method: "GET",
        url: `http://127.0.0.3:8080/doc-server/get-home-list.php`,
        responseType: "json",
      })
    ).data;
  }
);

export const DocsCheckerSlice = createSlice({
  name: "DocsChecker",
  initialState: InitialDocsList,
  reducers: {},
  extraReducers: {
    [fetchCheckedDocsList.fulfilled as any]: (state: DocsListModel, action: any) => {
      return [...state, ...action.payload];
    },
  },
});

export const selectDocsList = (states: any) => {
  return states.DocsChecker;
};

// export const {} = DocsCheckerSlice.actions;
export default DocsCheckerSlice.reducer;