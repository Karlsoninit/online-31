// basic redux
// import { createStore } from "redux";
// import { rootReducer } from "../reducers";
// import { devToolsEnhancer } from "redux-devtools-extension";

// export const store = createStore(rootReducer, devToolsEnhancer());

// toolkit
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../reducers";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
