import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Main from "./components/main";
import Banner from "./components/banner";

import boxing from "../public/partners/boxingostrava.jpg";
import jemasport from "../public/partners/jemasport.png";
import moodnite from "../public/partners/moodnite.jpg";
import skrcto from "../public/partners/skrcto.jpg";

import filip_zidek from "../public/partners/filip_zidek.jpg";
import fighting_arena from "../public/partners/fighting_arena.png";
import dva_mluvci from "../public/partners/dva_mluvci.jpg";

const fotky = [
  {
    path: boxing,
    name: "BOXING CLUB OSTRAVA",
    link: "https://boxingclubostrava.cz/",
  },
  {
    path: jemasport,
    name: "JEMASPORT",
    link: "https://www.jemasport.cz/",
  },
  {
    path: fighting_arena,
    name: "JEMASPORT",
    link: "https://www.fightingarena.cz/",
  },

  {
    path: dva_mluvci,
    name: "JEMASPORT",
    link: "https://www.dvamluvci.cz/",
  },
  {
    path: filip_zidek,
    name: "JEMASPORT",
    link: "https://www.facebook.com/filipzidekphotography/",
  },
  {
    path: moodnite,
    name: "Moodnite",
    link: "https://www.moodnite.cz/",
  },
  {
    path: skrcto,
    name: "Skrč to!",
    link: "http://www.skrctostudio.cz/",
  },
];

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
    secondary: {
      main: "rgba(0,0,0,0.65)",
      dark: "rgba(0,0,0,0.99)",
      light: "rgba(0,0,0,0.45)",
    },
  },
});

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function EventPartners() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />

      <NavigationMenu />
      <Banner
        align="center"
        title="Partneři"
        header={"./event_partner.webp"}
        objectPosition="0 25%"
      />
      <Main>
        <Grid
          container
          spacing={4}
          sx={
            matchesLg
              ? { px: 36, py: 7 }
              : matches
              ? { px: 3, py: 5 }
              : { px: 5, py: 5 }
          }
        >
          {fotky?.map((foto, index) => {
            return (
              <Grid key={index} item xs={6} sm={6} md={4} lg={2}>
                <Link href={foto.link}>
                  <Image
                    alt={foto.name}
                    src={foto.path}
                    height={256}
                    width={256}
                    layout="responsive"
                    priority
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
        {/* <Stack
          sx={{
            py: 30,
            px: 5,
            mt: 14,
            backgroundImage: `url(${sss?.src})`,
            backgroundSize: "cover",
          }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            sx={{ borderRadius: 0 }}
            color="secondary"
            size="large"
            fullWidth
          >
            zobrazit
          </Button>
          <Button
            variant="contained"
            sx={{ borderRadius: 0 }}
            color="secondary"
            size="large"
            fullWidth
          >
            více
          </Button>
        </Stack> */}
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
