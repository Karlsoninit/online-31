import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { notes } from "./reducer";
// const todoReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case "addTodo":
//       return { ...state, todos: [...state.todos, payload] };
//     default:
//       return state;
//   }
// };

export const store = createStore(notes, devToolsEnhancer());
