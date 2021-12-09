import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Main from "./components/main";
import header from "../public/event_partner.webp";
import Banner from "./components/banner";

import boxing from "../public/partners/boxingostrava.jpg";
import jemasport from "../public/partners/jemasport.png";
import moodnite from "../public/partners/moodnite.jpg";
import skrcto from "../public/partners/skrcto.jpg";
import sss from "../public/partners/sss.jpg";

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
    secondary: {
      main: "rgba(0,0,0,0.65)",
      dark: "rgba(0,0,0,0.99)",
      light: "rgba(0,0,0,0.45)",
    },
  },
});
export default function EventPartners() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Banner header={header} objectPosition="0 25%" />

      <NavigationMenu />
      <Main title="Sponzoři a partneři" gutterBottom>
        <Typography variant="body1" color="primary" paragraph>
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely. Something short and leading
          about the collection below—its contents, the creator, etc. Make it
          short and sweet, but not too short so folks don&apos;t simply skip
          over it entirely. Something short and leading about the collection
          below—its contents, the creator, etc. Make it short and sweet, but not
          too short so folks don&apos;t simply skip over it entirely. Something
          short and leading about the collection below—its contents, the
          creator, etc. Make it short and sweet, but not too short so folks
          don&apos;t simply skip over it entirely. Something short and leading
          about the collection below—its contents, the creator, etc. Make it
          short and sweet, but not too short so folks don&apos;t simply skip
          over it entirely.
        </Typography>
        <Grid container spacing={4}>
          {fotky?.map((foto, index) => {
            return (
              <Grid key={index} item xs={6} md={3}>
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
        <Stack
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
          <Button variant="contained" color="secondary" size="large" fullWidth>
            zobrazit
          </Button>
          <Button variant="contained" color="secondary" size="large" fullWidth>
            více
          </Button>
        </Stack>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
