import React, { useReducer } from "react";
import { INITIAL_STATE } from "../state/globalState";
import { TodoContext as Context } from "./TodoContext";

const types = {
  addTodo: "addTodo",
};

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case types.addTodo:
      return { ...state, todos: [...state.todos, payload] };
    case "deleteTodo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload.uniqueCardId),
      };
    case "renameOwner":
      return { ...state, userName: payload.newUserName };
    default:
      throw new Error();
  }
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  console.log(`state`, state);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
