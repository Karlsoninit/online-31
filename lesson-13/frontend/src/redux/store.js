import { createStore, applyMiddleware } from "redux";
import {
  devToolsEnhancer,
  composeWithDevTools,
} from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {
  todos: [],
  username: "Maksim",
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "addTodo":
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};

export const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
