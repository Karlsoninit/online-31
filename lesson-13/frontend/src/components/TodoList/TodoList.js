import React, { useContext, useEffect } from "react";
import { PlanningCard } from "../../ui/PlanningCard/PlanningCard";
import { useSelector, useDispatch } from "react-redux";
import { getTodoOperation } from "../../redux/actions";

export const TodoList = () => {
  const { items, loader, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodoOperation());
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
