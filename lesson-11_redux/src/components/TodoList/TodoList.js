import React, { useContext } from "react";
import { PlanningCard } from "../../ui/PlanningCard/PlanningCard";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions";

export const TodoList = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(`state`, todos);

  const deleteNote = (id) => {
    dispatch(deleteTodo(id));
  };

  return todos.map(({ learn, description, id }) => (
    <PlanningCard
      key={id}
      description={description}
      title={learn}
      id={id}
      onHandleDeleteTask={deleteNote}
    />
  ));
};
