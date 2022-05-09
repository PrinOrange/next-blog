import { configureStore } from "@reduxjs/toolkit";
import DocsCheckerReducers  from "./slices/DocCheckerSlice";

export default configureStore({
  reducer: {
    DocsChecker:DocsCheckerReducers,
  },
});
