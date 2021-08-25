import axios from "axios";
import {
  ADD_TODO,
  SET_TODO,
  TODO_FETCH_ERROR,
  TODO_FETCH_FINISHED,
  TODO_FETCH_START,
} from "../types";

export const setTodo = (array) => ({
  type: SET_TODO,
  payload: array,
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const todoFetchStart = () => ({
  type: TODO_FETCH_START,
});

export const todoFetchFinished = () => ({
  type: TODO_FETCH_FINISHED,
});

export const todoFetchError = (error) => ({
  type: TODO_FETCH_ERROR,
  payload: error,
});

// export function addTodo(todo) {
//   return {
//     type: ADD_TODO,
//     payload: todo,
//   };
// }

export const postTodoOperation = (todo) => async (dispatch) => {
  dispatch(todoFetchStart());
  try {
    const result = await axios.post("http://localhost:7777/tasks", todo);
    dispatch(addTodo(result.data));
  } catch (error) {
    dispatch(todoFetchError(error));
  } finally {
    dispatch(todoFetchFinished());
  }
};

export const getTodoOperation = () => async (dispatch) => {
  dispatch(todoFetchStart());
  try {
    const result = await axios.get("http://localhost:7777/tasks");
    dispatch(setTodo(result.data));
  } catch (error) {
    dispatch(todoFetchError(error));
  } finally {
    dispatch(todoFetchFinished());
  }
};

// export function postTodoOperation(todo) {
//   return async function () {
//     const result = await axios.post("http://localhost:7777/tasks", todo);
//     console.log("result", result);
//   };
// }

// const thunk = (store) => (next) => (addTodo) => {
//   next(addTodo());
//   next(postTodoOperation());
// };
