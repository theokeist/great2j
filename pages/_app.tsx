import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const themesA = createTheme({
  palette: {
    background: {
      default: "#ddeeff",
      paper: "#000",
    },
    primary: {
      main: "#000",
      dark: "#fff",
      light: "#ff0000",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themesA}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
