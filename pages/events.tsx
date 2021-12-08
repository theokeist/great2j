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
import header from "../public/event3.webp";
import Main from "./components/main";

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

export default function Events() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="pt-2"
        style={{ position: "relative", width: "100%", height: "38.66vw" }}
      >
        <Image
          alt="great by 2j"
          src={header}
          layout="fill"
          objectFit="cover"
          objectPosition="0 30%"
          placeholder="blur"
          priority
        />
      </div>
      <NavigationMenu />
      <Main title="Eventy">
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
