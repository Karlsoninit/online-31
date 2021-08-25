import { createSelector } from "reselect";

export const getTasks = (state) => state.todo.items;

export const sortedTask = createSelector([getTasks], (tasks) =>
  [...tasks].sort((a, b) => (a.learn > b.learn ? 1 : -1))
);
