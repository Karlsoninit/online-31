import React from "react";
import { Button } from "../Button/Button";

export const DropDownMenu = ({ children, isVisible, toggle }) => {
  return (
    <div>
      {isVisible && children}
      <Button toggle={toggle} isVisible={isVisible} />
    </div>
  );
};
