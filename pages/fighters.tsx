import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Image from "next/image";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Main from "./components/main";
import Fighter from "./components/fighter";

import header from "../public/fighters.webp";

const fotky = [
  {
    path: "/fighters/davidStec",
    name: "David Štec",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "71kg",
      kategorie: "box",
      rest: "12-6",
    },
  },
  {
    path: "/fighters/denisDerkac",
    name: "Denis Derkáč",
    facebook: "",
    instagram: "",
  },
  {
    path: "/fighters/honzaStrakos",
    name: "Honza Strakoš",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "76kg",
      kategorie: "K1",
      rest: "3-1",
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
      rest: "K1 2-1, MMA 3-2, BOX 1-1",
    },
  },
  {
    path: "/fighters/kristianPeczka",
    name: "Kristián Péczka",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "box",
      rest: "16*19",
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
    path: "/fighters/marekBiela",
    name: "Marek Biela",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "86kg",
      kategorie: "box",
      rest: "6-2",
    },
  },
  {
    path: "/fighters/marekVanecek",
    name: "Marek Vaněček",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "86kg",
      kategorie: "box",
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
      kategorie: "box",
      rest: "50-30",
    },
  },
  {
    path: "/fighters/patrikStefan",
    name: "Patrik Štefan",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "63,5kg",
      kategorie: "box",
      rest: "19-6",
    },
  },
  {
    path: "/fighters/petrValicek",
    name: "Petr Valíček",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "60kg",
      kategorie: "box",
      rest: "3-5",
    },
  },
  {
    path: "/fighters/robertPrazdny",
    name: "Robert Prázdný",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "box",
      rest: "K1 0-1, MMA 0-2",
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
    path: "/fighters/wernerHartmann",
    name: "Werner Hartmann",
    facebook: "",
    instagram: "",
    fighter: {
      vaha: "92kg",
      kategorie: "box",
      rest: "12-7-1",
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
      <div
        className="pt-2"
        style={{ position: "relative", width: "100%", height: "40.66vw" }}
      >
        <Image
          alt="great by 2j"
          src={header}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
      <NavigationMenu />
      <Main title="Bojovníci">
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
        {fotky?.map((foto) => {
          return (
            <Fighter
              avatar={foto?.path}
              avatarAlt={foto?.name}
              fighter={foto?.fighter}
              facebookLink={foto?.facebook}
              instagramLink={foto?.instagram}
            />
          );
        })}
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
