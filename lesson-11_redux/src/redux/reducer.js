import { types } from "./types";

const initialState = {
  todos: [],
  username: "Maksim",
};

const handlers = {
  [types.ADD_NOTE]: (state, actions) => ({
    ...state,
    todos: [...state.todos, actions.payload],
  }),
  [types.DELETE_NOTE]: (state, actions) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== actions.payload),
  }),
  DEFAULT: (state) => state,
};

export const notes = (state = initialState, actions) => {
  const handler = handlers[actions.type] || handlers.DEFAULT;
  return handler(state, actions);
};
