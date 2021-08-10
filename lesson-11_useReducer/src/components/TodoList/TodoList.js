import React, { useContext } from "react";
import { PlanningCard } from "../../ui/PlanningCard/PlanningCard";
import { TodoContext } from "../../context/TodoContext";

export const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);
  const deleteTodo = (uniqueCardId) => {
    dispatch({ type: "deleteTodo", payload: { uniqueCardId } });
  };
  return (
    <>
      {state.todos?.map(({ learn, description, id }) => (
        <PlanningCard
          id={id}
          key={id}
          title={learn}
          description={description}
          onHandleDeleteTask={deleteTodo}
        />
      ))}
      <button
        onClick={() =>
          dispatch({ type: "renameOwner", payload: { newUserName: "MAKSA" } })
        }
      >
        rename
      </button>
    </>
  );
};
