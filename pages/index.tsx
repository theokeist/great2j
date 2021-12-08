import * as React from "react";
import AppBar from "@mui/material/AppBar";
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

import header from "../public/header.jpg";
import logo from "../public/logo.jpg";

import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Banner from "./components/banner";
import Main from "./components/main";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const cards = [1, 2, 3, 4, 5, 6, 7];

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

export default function Album() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Banner header={header} />
      <NavigationMenu />
      <Main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="primary" paragraph>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" color="primary" size="large">
                Main call to action
              </Button>
              <Button variant="outlined" color="secondary" size="large">
                Secondary action
              </Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid
            sx={{ display: { overflowX: "scroll", flexWrap: "nowrap" } }}
            container
            spacing={4}
          >
            {cards.map((card) => (
              <Grid item key={card} xs={3} sm={4} md={3}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
