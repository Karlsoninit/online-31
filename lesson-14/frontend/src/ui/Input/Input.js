import React from "react";
import { InputField, InputContainer } from "./Input.styles";

export const Input = ({
  label = "введите что-то",
  id,
  variant = "outlined",
  indentBottom = false,
  onChange = () => {},
  value,
  name,
}) => {
  return (
    <InputContainer indentBottom={indentBottom}>
      <InputField
        name={name}
        label={label}
        id={id}
        variant={variant}
        onChange={onChange}
        value={value}
      />
    </InputContainer>
  );
};
