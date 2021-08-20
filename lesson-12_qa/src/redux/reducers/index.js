import { combineReducers } from "redux";
import { todoReducer } from "./todo";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
});
