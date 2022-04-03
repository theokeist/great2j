import React, { createContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from ".";

export const CustomThemeContext = createContext({
  currentTheme: "darkTheme",
  setTheme: null,
});

const CustomThemeProvider = (props: any) => {
  const { children } = props;

  // Get current theme from localStorage
  React.useEffect(() => {
    _setThemeName(localStorage.getItem("appTheme") || "themeDark");
  }, []);
  // State to hold selected theme
  const [themeName, _setThemeName] = useState("themeDark");

  // Retrieve theme object by theme name
  const theme = getTheme(themeName);

  // Wrap _setThemeName to store new theme names in localStorage
  const setThemeName = (name: any) => {
    localStorage.setItem("appTheme", name);
    _setThemeName(name);
  };

  const contextValue: any = {
    currentTheme: themeName,
    setTheme: setThemeName,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
