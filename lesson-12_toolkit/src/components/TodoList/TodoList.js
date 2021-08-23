import React, { useContext } from "react";
import { PlanningCard } from "../../ui/PlanningCard/PlanningCard";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const state = useSelector((state) => state);
  console.log(`state`, state);
  return <></>;
};
