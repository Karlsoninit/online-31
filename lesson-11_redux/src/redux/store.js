import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

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

export const store = createStore(todoReducer, devToolsEnhancer());
