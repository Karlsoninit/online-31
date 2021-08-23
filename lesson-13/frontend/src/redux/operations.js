import axios from "axios";

export const postTodoOperation = (todo) => async (dispatch) => {
  const result = await axios.post("http://localhost:7777/tasks", todo);
  console.log("result", result);
};
