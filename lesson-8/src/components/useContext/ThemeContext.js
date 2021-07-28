import React, { createContext, useState, useContext } from "react";

export const ThemeContext = createContext();
export const ThemeToggleContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useThemeUpdate = () => {
  return useContext(ThemeToggleContext);
};

function ThemeContextWrapper({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => setDarkTheme((prevState) => !prevState);

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeToggleContext.Provider value={toggleTheme}>
        {children}
      </ThemeToggleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default ThemeContextWrapper;
