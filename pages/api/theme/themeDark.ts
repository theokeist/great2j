import { createTheme } from "@mui/material/styles";

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

export default themeDark;
