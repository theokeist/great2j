import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Main from "./components/main";
import Fighter from "./components/fighter";
import Banner from "./components/banner";

import header from "../public/fighters.webp";

const fotky = [
  {
    path: "/fighters/marekVanecek",
    name: "Marek Vaněček",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "86kg",
      kategorie: "Box",
      rest: "70-30",
    },
  },
  {
    path: "/fighters/martinPrazdny",
    name: "Martin Prázdný",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "82kg",
      kategorie: "Box",
      rest: "50-30",
    },
  },
  {
    path: "/fighters/wernerHartmann",
    name: "Werner Hartmann",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "Box",
      rest: "12-7-1",
    },
  },
  {
    path: "/fighters/",
    name: "Denis Gámez",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "Box",
      rest: "65-25",
    },
  },
  {
    path: "/fighters/lizBezdekova",
    name: "Elizabeth Bezděková",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "54kg",
      kategorie: "Muay Thai",
      rest: "12-7-1",
    },
  },
  {
    path: "/fighters/jiriJuricka",
    name: "Jiří Juřička",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "K1",
      rest: "K1 2-1, MMA 3-2, Box 1-1",
    },
  },
  {
    path: "/fighters/",
    name: "Dominik Gloser",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "75kg",
      kategorie: "Box",
      rest: "122-20",
    },
  },
  {
    path: "/fighters/honzaStrakos",
    name: "Jan Strakoš",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "76kg",
      kategorie: "K1",
      rest: "3-1",
    },
  },
  {
    path: "/fighters/",
    name: "Daniel Obracaj",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "76kg",
      kategorie: "",
      rest: "MMA 4-4, Box 5-5, K1 0-1",
    },
  },
  {
    path: "/fighters/kristianPeczka",
    name: "Kristián Péczka",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "Box",
      rest: "16-19",
    },
  },
  {
    path: "/fighters/patrikStefan",
    name: "Patrik Štefan",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "63,5kg",
      kategorie: "Box",
      rest: "19-6",
    },
  },
  {
    path: "/fighters/marekBiela",
    name: "Marek Biela",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "86kg",
      kategorie: "Box",
      rest: "6-2",
    },
  },
  {
    path: "/fighters/",
    name: "Tomáš Novotný",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "Box",
      rest: "5-1",
    },
  },
  {
    path: "/fighters/",
    name: "Kim Amoussa",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "67kg",
      kategorie: "Box",
      rest: "5-0-1",
    },
  },
  {
    path: "/fighters/",
    name: "Josef Pekárek",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "Box",
      rest: "100-50",
    },
  },
  {
    path: "/fighters/",
    name: "Jaroslav Kubíček",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "Box",
      rest: "Olympijský Box 30-20, Profi Box 1-2",
    },
  },
  {
    path: "/fighters/",
    name: "Jiří Mravec",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "86kg",
      kategorie: "MMA",
      rest: "0-1",
    },
  },
  {
    path: "/fighters/davidStec",
    name: "David Štec",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "71kg",
      kategorie: "Box",
      rest: "12-6",
    },
  },

  {
    path: "/fighters/petrValicek",
    name: "Petr Valíček",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "60kg",
      kategorie: "Box",
      rest: "3-5",
    },
  },
  {
    path: "/fighters/",
    name: "Petr Navrátil",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "60kg",
      kategorie: "Box",
      rest: "7-8",
    },
  },
  {
    path: "/fighters/robertPrazdny",
    name: "Robert Prázdný",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "Box",
      rest: "K1 0-1, MMA 0-2",
    },
  },
  {
    path: "/fighters/",
    name: "Daniel Bernold",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "69kg",
      kategorie: "K1",
      rest: "1-0",
    },
  },
  {
    path: "/fighters/vojtaBachorik",
    name: "Vojtěch Bachořík",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "66kg",
      kategorie: "K1",
      rest: "1-2",
    },
  },
  {
    path: "/fighters/denisDerkac",
    name: "Denis Derkáč",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "82kg",
      kategorie: "Box",
      rest: "0-0",
    },
  },
  {
    path: "/fighters/",
    name: "Filip Palyza",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "82kg",
      kategorie: "Box",
      rest: "0-0",
    },
  },
  {
    path: "/fighters/",
    name: "Pavel Šigut",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "75kg",
      kategorie: "Box",
      rest: "0-0",
    },
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
  },
});

export default function Fighters() {
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Banner header={header} />

      <NavigationMenu />
      <Main title="ZÁPASNÍCI" align="center" gutterBottom>
        <Grid container spacing={2}>
          {fotky?.map((foto, index) => {
            return (
              <Grid key={index} item xs={12} md={6}>
                <Fighter
                  key={index}
                  avatar={foto?.path}
                  avatarAlt={foto?.name}
                  fighter={foto?.fighter}
                  facebookLink={foto?.facebook}
                  instagramLink={foto?.instagram}
                />
              </Grid>
            );
          })}
        </Grid>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
