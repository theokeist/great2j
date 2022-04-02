import { createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#ebedec",
      paper: "#fff",
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

export default themeLight;
