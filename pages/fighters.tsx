import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Main from "./components/main";
import Fighter from "./components/fighter";
import Banner from "./components/banner";
import useMediaQuery from "@mui/material/useMediaQuery";

import header from "../public/fighters.webp";
import { fightersFotky } from "./constants/fighters";

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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Banner header={header} />

      <NavigationMenu />
      <Main title="ZÁPASNÍCI" align="center" background="blue" gutterBottom>
        <Grid
          container
          spacing={2}
          sx={matches ? { px: 36, py: 7 } : { px: 3, py: 2 }}
        >
          {fightersFotky?.map((foto, index) => {
            return (
              <Grid key={index} item xs={12} md={6}>
                <Fighter
                  key={index}
                  avatar={foto?.path}
                  avatarAlt={foto?.name}
                  fighter={foto?.fighter}
                  facebookLink={foto?.facebook}
                  instagramLink={foto?.instagram}
                  websiteLink={foto?.website}
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
