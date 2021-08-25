// import thunk from "redux-thunk";
// import logger from 'logger'
import { configureStore } from "@reduxjs/toolkit";
import todoReducerWithSlice from "../redux/slices/todoSlice";
const rootReducer = {
  todos: todoReducerWithSlice,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

// export const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.NODE_ENV === "development",
//   middleware: [thunk, logger],
// });
