import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigationMenu from "./components/navigation";
import CopyrightFooter from "./components";
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
import { Paper } from "@mui/material";

export default function About() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <>
      <NavigationMenu />
      <Banner
        align="center"
        title="GREAT by"
        subtitle="Jiří Ondruš & Jakub Bernold"
        header={"./header2.jpg"}
        objectPosition="0% 40%"
        marginLeft={-15}
      />

      <Main background="primary">
        <Grid
          container
          spacing={6}
          sx={
            matchesLg
              ? {
                  width: { xl: "calc(100% - 15vw)", sm: "100%" },
                  marginLeft: "auto",
                  px: 10,
                  py: 7,
                }
              : matches
              ? { px: 6, py: 5 }
              : { px: 2, pt: 6 }
          }
        >
          <Grid item md={6} lg={4}>
            <Typography
              sx={{ fontWeight: 300, mb: 5 }}
              variant="body1"
              color="primary"
              align="justify"
              paragraph
            >
              GREAT by 2j je značka založená Jakubem Bernoldem a Jiřím Ondrušem,
              fungující od roku 2020. Zabývá se myšlenkou pozvednutí a propagací
              ringových sportů, zápasníků a zároveň pomoci lidem, kteří to
              opravdu potřebují. Za touto myšlenkou vznikla organizace GREAT.
              <br />
              <br />
              GREAT je organizace spojená výhradně s ringovými sporty, konkrétně
              s olympijským boxem a K1. Hlavní myšlenkou organizace je
              pozvednutí a propagace těchto sportů, bojovníků a především pomoc
              potřebným. Proto jsou všechny galavečery věnovány dětem a rodinám
              s postižením. Organizace působí zatím na Moravě a ve Slezsku,
              ovšem její plán je působit po celém Česku, Slovensku a také
              expandovat do dalších zemí.
            </Typography>
          </Grid>
          <Grid item md={6} lg={4}>
            <Typography
              sx={{ fontWeight: 300, mb: 5 }}
              variant="body1"
              color="primary"
              align="justify"
            >
              GREAT Gym, je první sférou, která byla zrozena se spojením slova
              GREAT. GREAT Gym dává možnost trénovat jak začátečníkům, tak
              pokročilým boxerům, zapasníkům K-1, tak také všem dalším
              cvičencům. Mimo bojové sporty nabízí lekce Cross tréninku.
              <br />
              <br />
              GREAT mimojiné také buduje vlastní značku oblečení a tréninkového
              vybavení ve spolupráci s našimi partnery Skrč To a BackFist Brand.
              První kousky GREAT oblečení můžete pořídit na eshopu{" "}
              <a
                rel="noopener noreferrer"
                href="https://bit.ly/GreatShopCZ"
                target="_blank"
                style={{ color: "red" }}
              >
                JEMASPORT.CZ
              </a>
            </Typography>
          </Grid>
          <Grid item md={6} lg={4}>
            <Typography
              sx={{ fontWeight: 300 }}
              variant="body1"
              color="primary"
              align="justify"
            >
              Do budoucna má GREAT v plánu organizovat různé kempy a to nejen
              pro bojovníky ringových sportů, ale také rozšířit se i do kulturní
              oblasti v rámci podpory umělců, začínajících hudebních interpretů
              apod.
            </Typography>
          </Grid>
        </Grid>
      </Main>
      <CopyrightFooter />
    </>
  );
}
