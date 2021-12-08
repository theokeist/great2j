import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Main from "./components/main";
import header from "../public/event_partner.webp";
import Banner from "./components/banner";

const cards = [1, 2, 3, 4, 5, 6, 7];

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

export default function EventPartners() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Banner header={header} objectPosition="0 25%" />

      <NavigationMenu />
      <Main title="Sponzoři a partneři">
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
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" color="secondary" size="large" fullWidth>
            zobrazit
          </Button>
          <Button variant="outlined" color="primary" size="large" fullWidth>
            více
          </Button>
        </Stack>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
