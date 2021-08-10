import React from "react";
import { TodoWrapper } from "../../Layouts/TodoWrapper/TodoWrapper";
import { PlanningWrapper } from "../../Layouts/PlanningWrapper/PlanningWrapper";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import { TodoList } from "../../components/TodoList/TodoList";
import { TodoContextProvider } from "../../context/TodoContextProvider";

export const Home = () => {
  return (
    <TodoContextProvider>
      <TodoWrapper>
        <TodoForm />
      </TodoWrapper>
      <PlanningWrapper>
        <TodoList />
      </PlanningWrapper>
    </TodoContextProvider>
  );
};
