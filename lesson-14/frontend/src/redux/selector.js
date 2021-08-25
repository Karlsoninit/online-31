import { createSelector } from "reselect";

export const todos = (state) => state.todos.items;
export const todoLoader = (state) => state.todos.loader;
export const todoError = (state) => state.todos.error;

export const sortedTodos = createSelector([todos], (items) =>
  [...items].sort((a, b) => (a.learn > b.learn ? 1 : -1))
);

// export const getTasks = (state) => state.todo.items;

// export const sortedTask = createSelector([getTasks], (tasks) =>
//   [...tasks].sort((a, b) => (a.learn > b.learn ? 1 : -1))
// );
