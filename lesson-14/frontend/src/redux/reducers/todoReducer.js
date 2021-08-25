import {
  ADD_TODO,
  TODO_FETCH_ERROR,
  TODO_FETCH_FINISHED,
  TODO_FETCH_START,
  SET_TODO,
} from "../types";
const initialState = {
  items: [],
  loader: false,
  error: "",
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { ...state, items: [...state.items, payload] };
    case SET_TODO:
      return { ...state, items: payload };
    case TODO_FETCH_START:
      return { ...state, loader: true };
    case TODO_FETCH_FINISHED:
      return { ...state, loader: false };
    case TODO_FETCH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
