import React from "react";
import FunctionContextComponent from "./components/FunctionContextComponent";
import ThemeContextWrapper from "./ThemeContext";

function App() {
  return (
    <ThemeContextWrapper>
      <FunctionContextComponent />
    </ThemeContextWrapper>
  );
}

export default App;
