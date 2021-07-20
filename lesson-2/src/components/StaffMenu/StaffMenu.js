import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "../ui/Button/Button";
import { Item } from "../ui/Item/Item";

export const StaffMenu = ({ content, title, buttonName }) => {
  return (
    <div>
      <h2>{title}</h2>
      {content.map((city) => (
        <Item key={city.id} text={city.name} />
      ))}
      <Button name={buttonName} buttonColor="Default" />
    </div>
  );
};

StaffMenu.defaultProps = {
  content: [],
  title: "not found",
  buttonName: "click me :)",
};

StaffMenu.propTypes = {
  content: PropTypes.array,
  title: PropTypes.string,
  buttonName: PropTypes.string,
};
