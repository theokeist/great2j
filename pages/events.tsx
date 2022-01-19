import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import header from "../public/event3.webp";
import frantisek from "../public/events/frantisek.jpg";
import Main from "./components/main";
import Banner from "./components/banner";
import EvnetTimeline from "./components/timeline";
import Image from "next/image";

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

export default function Events() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <NavigationMenu />
      <Banner
        align="center"
        title="GREAT FIGHT NIGHT"
        subtitle="pro Františka"
        header={"./event3.webp"}
        objectPosition="0 30%"
      />

      <Main>
        <Grid container sx={matches ? { px: 36, py: 7 } : { px: 3, py: 2 }}>
          <Grid container spacing={7}>
            <Grid item xs={12} md={9}>
              <Typography
                sx={{ fontWeight: 300 }}
                variant="h6"
                color="primary"
                align="justify"
                paragraph
              >
                Historicky první GREAT FIGHT NIGHT se uskuteční v sobotu
                23.4.2022 v Atletické hale v Ostravě-Vítkovicích. Cílem této
                akce je vybrat 250 tisíc Kč pro malého Františka a jeho maminku.
                (zde bych vložil odkaz na článek o nich) Hala s kapacitou více
                než 1 800 lidí zažije opravdu neopakovatelnou podívanou. V ringu
                totiž uvidíme skvělé souboje, několik mistrů ČR a mimojiné také
                vyhecované nelítostné bitvy, jaké jistě nabídnou např. zápasy
                Strakoš vs. Obracaj, Pekárek vs. Kubíček nebo Gámez vs.
                Hartmann. Velký svátek z této akce dělá také účast ostravské
                bojovnice a velkého supertalentu Elizabeth Bezděkové. Přehlídku
                krásných technik a souboj plný přestřelek jako vždy slibuje
                zápas Jiřího Juřičky. Svůj možná poslední zápas v boxu zažije
                Martin Prázdný, který se do královského sportu vrátil kvůli
                zranění kolene, avšak po tomto galavečeru nejspíše opět zamíří
                do MMA. V hlavním zápase večera pak bude nejen Ostrava, ale celé
                Česko a Slovensko na nohou - do ringu se totiž po třech letech
                vrací Marek Vaneček, pro kterého to možná bude, a možná také
                nebude, úplné loučení s kariérou, během které potkal jména jako
                Strnisko, Clemente Russo, Tlkanec apod., tedy nejen českou, ale
                i světovou elitu. Tváří v tvář se mu postaví David Klíč - kat
                jeho rivala z dob největší slávy, Jiřího Havel, kterého Klíč na
                posledním Mistrovství České Republiky nelítostně knokautoval!
                Přijďte si užít nezapomenutelný večer plný skvělého boxu a K-1 a
                pomoci tím malému Františkovi!
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Image
                alt="great by 2j"
                src={frantisek}
                layout="fixed"
                height="400"
                width="330"
                placeholder="blur"
                priority
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" align="center" color="primary" paragraph>
                Průběh události
              </Typography>
              <EvnetTimeline />
            </Grid>
            <Grid item xs={12} md={6}>
              <iframe
                src="https://frame.mapy.cz/s/medebatofa"
                width="100%"
                height="700"
                frameBorder="0"
              ></iframe>
            </Grid>
          </Grid>

          <hr style={{ margin: "5rem 0px" }}></hr>
        </Grid>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
