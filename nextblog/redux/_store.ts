import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import DocsCheckerReducers from "./DocsCheckerSlice";

export const store = configureStore({
  reducer: {
    DocsChecker: DocsCheckerReducers,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
