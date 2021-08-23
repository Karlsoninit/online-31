import { types } from "./types";

export const addTodo = (data) => ({
  type: types.ADD_NOTE,
  payload: data,
});

export const deleteTodo = (id) => ({
  type: types.DELETE_NOTE,
  payload: id,
});
