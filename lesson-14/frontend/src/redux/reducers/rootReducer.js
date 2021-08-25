import { combineReducers } from "redux";
import { errorReducer } from "./errorReducer";
import { loaderReducer } from "./loaderReducer";
import { todoReducer } from "./todoReducer";
import { userReducer } from "./userReducer";
export const rootReducer = combineReducers({
  todo: todoReducer,
  // error: errorReducer,
  // loader: loaderReducer,
  user: userReducer,
});
