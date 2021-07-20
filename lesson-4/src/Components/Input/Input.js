import React from "react";
import PropTypes from "prop-types";
import { InputContainer } from "./Input.styles";

export const Input = ({ type, label, name, value, handleChange }) => {
  return (
    <InputContainer
      type={type}
      placeholder={label}
      name={name}
      value={value}
      onChange={handleChange}
    />
  );
};

Input.defaultProps = {
  type: "text",
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
