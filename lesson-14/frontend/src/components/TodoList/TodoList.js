import React, { useContext, useEffect } from "react";
import { PlanningCard } from "../../ui/PlanningCard/PlanningCard";
import { useSelector, useDispatch } from "react-redux";
import {
  todos,
  todoError,
  todoLoader,
  sortedTodos,
} from "../../redux/selector";
import { getTodos } from "../../redux/slices/todoSlice";

export const TodoList = () => {
  // const items = useSelector((state) => state.todos.items);
  // const loader = useSelector((state) => state.todos.loader);
  // const error = useSelector((state) => state.todos.error);

  const items = useSelector((state) => sortedTodos(state));
  const loader = useSelector((state) => todoLoader(state));
  const error = useSelector((state) => todoError(state));

  const dispatch = useDispatch();
  // const a = useSelector((state) => getTasks(state));
  // const sorted = useSelector((state) => sortedTask(state));
  // console.log(`sorted`, sorted);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loader) {
    return <h1>Загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {items.map(({ learn, description, id }) => (
        <PlanningCard
          learn={learn}
          description={description}
          id={id}
          key={id}
        />
      ))}
    </>
  );
};
