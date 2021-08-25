import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTodo = createAsyncThunk("todos/createTodo", async (todo) => {
  const result = await axios.post("http://localhost:7777/tasks", todo);
  return result.data;
});

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const result = await axios.get("http://localhost:7777/tasks");
  return result.data;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loader: false,
    error: "",
  },
  //   reducers: {
  //     addTodo: (state, { payload }) => ({
  //       ...state,
  //       items: [...state.items, payload],
  //     }),
  //   },
  extraReducers: {
    [createTodo.pending]: (state, action) => {
      state.loader = true;
    },
    [createTodo.rejected]: (state, action) => {
      state.loader = false;
      state.error = "Error";
    },
    [createTodo.fulfilled]: (state, action) => {
      state.loader = false;
      state.error = "";
      state.items = [...state.items, action.payload];
    },

    [getTodos.pending]: (state) => {
      state.loader = true;
    },
    [getTodos.rejected]: (state) => {
      state.loader = false;
      state.error = "Error";
    },
    [getTodos.fulfilled]: (state, { payload }) => {
      state.loader = false;
      state.error = "";
      state.items = [...state.items, ...payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
