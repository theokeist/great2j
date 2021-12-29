import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import header from "../public/onas3.jpg";
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

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Banner header={header} objectPosition="0% 0%" />

      <NavigationMenu />
      <Main title="GREAT by 2j" subtitle="Jiří Ondruš & Jakub Bernold">
        <Typography variant="body1" color="primary" align="justify" paragraph>
          (povinné pouze pro juniorské kategorie), bandáže (možnost mít klasické
          tejpy schválené rozhodčím po domluvě se soupeřem), rukavice a holeně.
          (Organizátor dodá rukavice a holeně pro galavečer značky VENUM či
          Adidas – možnost koupit si své za zvýhodněnou cenu u partnera akce
          nebo si již přivést stejné, které rozhodčí schválí. Model bude oznámen
          s dostatečným předstihem.)(povinné pouze pro juniorské kategorie),
          bandáže (možnost mít klasické tejpy schválené rozhodčím po domluvě se
          soupeřem), rukavice a holeně. (Organizátor dodá rukavice a holeně pro
          galavečer značky VENUM či Adidas – možnost koupit si své za
          zvýhodněnou cenu u partnera akce nebo si již přivést stejné, které
          rozhodčí schválí. Model bude oznámen s dostatečným předstihem.)
          (povinné pouze pro juniorské kategorie), bandáže (možnost mít klasické
          tejpy schválené rozhodčím po domluvě se soupeřem), rukavice a holeně.
          (Organizátor dodá rukavice a holeně pro galavečer značky VENUM či
          Adidas – možnost koupit si své za zvýhodněnou cenu u partnera akce
          nebo si již přivést stejné, které rozhodčí schválí. Model bude oznámen
          s dostatečným předstihem.) (povinné pouze pro juniorské kategorie),
          bandáže (možnost mít klasické tejpy schválené rozhodčím po domluvě se
          soupeřem), rukavice a holeně. (Organizátor dodá rukavice a holeně pro
          galavečer značky VENUM či Adidas – možnost koupit si své za
          zvýhodněnou cenu u partnera akce nebo si již přivést stejné, které
          rozhodčí schválí. Model bude oznámen s dostatečným předstihem.)
        </Typography>
        <hr></hr>
        <Typography variant="body2" color="primary" paragraph>
          <strong>Sportovní odvětví:</strong> zápasy v klasickém boxu, K1 a Muay
          Thai, vše v amatérských pravidlech, poučení o pravidlech proběhne po
          oficiálním vážení, stejně jako lékařské prohlídka.
        </Typography>
        <Typography variant="body2" color="primary" paragraph>
          <strong>Váhové kategorie:</strong> klasické, aktuálně platné váhové
          kategorie v daném sportu, v krajním případě možnost catchweight.
        </Typography>
        <Typography variant="body2" color="primary" paragraph>
          <strong>Výstroj zápasníků:</strong> povinnou výbavu zápasníků tvoří
          suspenzor, chránič prsou (povinné pro ženy), chránič zubů, helma
          (povinné pouze pro juniorské kategorie), bandáže (možnost mít klasické
          tejpy schválené rozhodčím po domluvě se soupeřem), rukavice a holeně.
          (Organizátor dodá rukavice a holeně pro galavečer značky VENUM či
          Adidas – možnost koupit si své za zvýhodněnou cenu u partnera akce
          nebo si již přivést stejné, které rozhodčí schválí. Model bude oznámen
          s dostatečným předstihem.)
        </Typography>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
