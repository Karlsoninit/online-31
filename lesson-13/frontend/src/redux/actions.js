import axios from "axios";
export const addTodo = (todo) => ({
  type: "addTodo",
  payload: todo,
});
