import React, { useReducer, createContext, useContext } from "react";
import { TodoWrapper } from "../../Layouts/TodoWrapper/TodoWrapper";
import { PlanningWrapper } from "../../Layouts/PlanningWrapper/PlanningWrapper";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import { TodoList } from "../../components/TodoList/TodoList";

export const Home = () => {
  return (
    <>
      <TodoWrapper>
        <TodoForm />
      </TodoWrapper>
      <PlanningWrapper>
        <TodoList />
      </PlanningWrapper>
    </>
  );
};
