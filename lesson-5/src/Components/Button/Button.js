import React from "react";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

export const Button = ({ toggle, text, isVisible }) => {
  const Icon = isVisible ? HiChevronUp : HiChevronDown;
  const content = isVisible ? "скрыть" : "показать";

  return (
    <button onClick={toggle}>
      {text ?? content} <Icon />
    </button>
  );
};
