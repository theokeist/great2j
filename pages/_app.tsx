import "../styles/globals.css";
import * as React from "react";
import type { AppProps } from "next/app";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useMediaQuery } from "@mui/material";
import CustomThemeProvider, {
  CustomThemeContext,
} from "./api/theme/greatThemeProvider";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#fff",
      paper: "#ebedec",
    },
    primary: {
      main: "#1e1e1e",
      dark: "#000",
      light: "#fff",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#252525",
      paper: "#000",
    },
    primary: {
      main: "#fff",
      dark: "#000",
      light: "#fff",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { currentTheme } = React.useContext(CustomThemeContext);
  return (
    <CustomThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </CustomThemeProvider>
  );
}

export default MyApp;
