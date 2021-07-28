import React from "react";
import { useTheme, useThemeUpdate } from "../ThemeContext";

const FunctionContextComponent = () => {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    background: theme ? "#333" : "#ccc",
    color: theme ? "#ccc" : "#333",
    padding: "40px",
  };

  return (
    <>
      <h2 style={themeStyles}>FunctionContextComponent</h2>
      <button onClick={toggleTheme}>choose theme</button>
    </>
  );
};

export default FunctionContextComponent;
