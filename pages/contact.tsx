import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import header from "../public/about.webp";
import Main from "./components/main";
import Banner from "./components/banner";

const theme = createTheme({
  palette: {
    background: {
      default: "#252525",
      paper: "#242424",
    },
    primary: {
      main: "#fff",
      dark: "#000",
      light: "#ff0000",
    },
  },
});

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Banner header={header} objectPosition="0 5%" />

      <NavigationMenu />
      <Main title="Kontakt" gutterBottom>
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Telefon:</strong> +420 777 888 333
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Email:</strong> info@great2j.cz
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Spolupráce:</strong> spoluprace@great2j.cz
        </Typography>
        <Typography variant="h6" color="primary" gutterBottom>
          <strong>Instagram:</strong> great_2j
        </Typography>
        <hr></hr>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          <strong>Organizátor akce:</strong> Jiří Ondruš
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          <strong>IČ:</strong> 05956731
        </Typography>
        <Typography variant="subtitle1" color="primary" gutterBottom>
          <strong>Název organizace:</strong> GREAT by 2j
        </Typography>

        <Typography variant="h4" color="primary" fontWeight="900" gutterBottom>
          Mapa
        </Typography>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
