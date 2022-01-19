import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import header from "../public/onas3.jpg";
import Main from "./components/main";
import Banner from "./components/banner";

const themes = createTheme({
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

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <NavigationMenu />
      <Banner
        align="center"
        title="GREAT by"
        subtitle="Jiří Ondruš & Jakub Bernold"
        header={"./header2.jpg"}
        objectPosition="30% 0%"
        marginLeft={-15}
      />

      <Main>
        <Grid sx={matches ? { px: 36, py: 7 } : { px: 3, py: 2 }}>
          <Typography
            sx={{ fontWeight: 300, mb: 5 }}
            variant="h6"
            color="primary"
            align="justify"
            paragraph
          >
            GREAT by 2j je značka založená Jakubem Bernoldem a Jiřím Ondrušem,
            fungující od roku 2020. Zabývá se myšlenkou pozvednutí a propagací
            ringových sportů, zápasníků, pomocí lidem, kteří to opravdu
            potřebují, ale také dopomoci úplně každému, kdo chce se sebou něco
            dělat, tvořit a být tou nejlepší verzí sebe samotného. Za touto
            myšlenkou se skrývá hned několik oblastí, ve kterých GREAT působí.
          </Typography>
          <Typography
            sx={{ fontWeight: 300, mb: 5 }}
            variant="h6"
            color="primary"
            align="justify"
            paragraph
          >
            GREAT Gym, je první sférou, která byla zrozena se spojením slova
            GREAT. GREAT Gym dává možnost trénovat jak začátečníkům, tak
            pokročilým boxerům, zapasníkům K-1, tak také všem dalším cvičencům.
            Mimo bojové sporty nabízí lekce Cross tréninku.
          </Typography>
          <Typography
            sx={{ fontWeight: 300, mb: 5 }}
            variant="h6"
            color="primary"
            align="justify"
            paragraph
          >
            Organizováním galavečerů ringových sportů, konkrétně boxu, K-1 a
            Muay Thai je druhou částí skládanky GREAT. Hlavní myšlenkou
            organizace je pozvednutí a propagace těchto sportů, bojovníků a
            především pomoc potřebným. Proto jsou všechny galavečery věnovány
            dětem a rodinám s postižením. Organizace působí na severu Moravy a
            Slezska, ovšem její plán je působit po celém Česku a Slovensku.
          </Typography>
          <Typography
            sx={{ fontWeight: 300, mb: 5 }}
            variant="h6"
            color="primary"
            align="justify"
            paragraph
          >
            GREAT mimojiné také buduje vlastní značku oblečení a tréninkového
            vybavení ve spolupráci s našimi partnery Skrč To a BackFist Brand.
            První kousky GREAT oblečení můžete pořídit na eshopu{" "}
            <a href="https://bit.ly/GreatShopCZ" style={{ color: "white" }}>
              JEMASPORT.CZ
            </a>
          </Typography>
          <Typography
            sx={{ fontWeight: 300 }}
            variant="h6"
            color="primary"
            align="justify"
            paragraph
          >
            Do budoucna má GREAT v plánu organizovat různé kempy nejen pro
            bojovníky ringových sportů a také se rozšířit do kulturní oblasti v
            rámci podpory umělců, hudebních interpretů apod.
          </Typography>
        </Grid>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
