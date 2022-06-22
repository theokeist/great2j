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
      main: "rgba(255,71,0,0.88)",
    },
  },
});

export default themeLight;
