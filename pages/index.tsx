import * as React from "react";
import {
  Button,
  Grid,
  Box,
  Stack,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import Link from "@mui/material/Link";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import cheerio from "cheerio";
import axios from "axios";

import header from "../public/header.jpg";

import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Banner from "./components/banner";
import Main from "./components/main";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mt: 2.5, mb: 3.5 }}>
      <Box sx={{ width: "100%", mr: 2 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="h6" color="secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

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
      reverse: "#fff",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});

export async function getServerSideProps() {
  const { data } = await axios.get(
    "https://ib.fio.cz/ib/transparent?a=2302072455"
  );
  const $ = cheerio.load(data);
  const title = $(".pohybySum > table > tbody > tr > td:nth-child(2)").text();
  const trimTitle = title.trim();
  const arrayTitle = trimTitle.split(",");

  return {
    props: { title: arrayTitle },
  };
}

export default function IndexPage(props: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("xl"));
  const FINAL_PRICE = 2.5;
  const CURRENT = props?.title;
  const FINAL = Math.floor(parseInt(CURRENT) / FINAL_PRICE);
  const [progress, setProgress] = React.useState(FINAL);
  const [showForm, setHover] = React.useState(false);
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) =>
  //       prevProgress >= 100 ? 10 : prevProgress + 10
  //     );
  //   }, 1400);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <NavigationMenu />
      <Main>
        <Box
          sx={
            matchesLg
              ? { bgcolor: "primary", pt: 8, pb: 6, px: 39 }
              : matches
              ? { bgcolor: "primary", pt: 2, pb: 6, px: 2 }
              : { bgcolor: "primary", pt: 2, pb: 6, px: 2 }
          }
        >
          <Stack
            direction={matches ? "row" : "column"}
            spacing={8}
            justifyContent="center"
          >
            <Grid item md={6}>
              <iframe
                width="100%"
                height={matches ? "340px" : "256px"}
                src="https://www.youtube.com/embed/1tiBBGb_5_g?controls=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                GREAT je ostravská organizace pořádající galavečery ringových
                sportů pro dobročinné účely. Koupí oblečení GREAT přispíváte na
                podporu malého Františka, který se narodil v šestém měsíci
                těhotenství, trpí dětskou mozkovou obrnou a je odkázán na
                invalidní vozík, a pro kterého GREAT organizují galavečer v
                Ostravě dne 2.4.2022. Všechny produkty značky GREAT jsou zárukou
                kvality a jsou vyráběny v České Republice.
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Box
                sx={
                  matchesLg
                    ? {
                        minHeight: 600,
                        borderRadius: 0,
                        px: 6,
                        py: 5,
                        backgroundColor: "primary.dark",
                      }
                    : matches
                    ? {
                        minHeight: 600,
                        borderRadius: 0,
                        px: 3.5,
                        py: 2.5,
                        backgroundColor: "primary.dark",
                      }
                    : {
                        minHeight: 600,
                        borderRadius: 0,
                        px: 4.5,
                        py: 2.75,
                        backgroundColor: "primary.dark",
                      }
                }
              >
                <LinearProgressWithLabel color="secondary" value={progress} />

                <Typography
                  variant="h5"
                  align="center"
                  color="primary"
                  paragraph
                >
                  celkem vybráno
                </Typography>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{ fontWeight: 900 }}
                  color="primary"
                  paragraph
                >
                  {props?.title?.[0]} Kč
                </Typography>
                <Typography
                  variant="h5"
                  align="center"
                  color="primary"
                  paragraph
                >
                  z
                </Typography>
                <Typography variant="h3" align="center" color="primary">
                  250 000 Kč
                </Typography>
                <Link
                  href={"https://ib.fio.cz/ib/transparent?a=2302072455"}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    size="large"
                    variant="outlined"
                    fullWidth
                    startIcon={
                      !showForm ? (
                        <FavoriteBorderIcon
                          style={{
                            fontSize: 30,
                            marginRight: 10,
                          }}
                        />
                      ) : (
                        <FavoriteIcon
                          style={{
                            fontSize: 30,
                            marginRight: 10,
                          }}
                        />
                      )
                    }
                    onMouseEnter={() => {
                      setHover(true);
                    }}
                    onMouseLeave={() => {
                      setHover(false);
                    }}
                    sx={
                      matchesLg
                        ? {
                            bgcolor: "reverse",
                            ":hover": {
                              bgcolor: "white",
                            },
                            color: "red",
                            mt: 5,
                            mb: 6,
                            py: 2.5,
                            borderRadius: 0,
                            fontWeight: 900,
                            typography: {
                              letterSpacing: 4,
                            },
                          }
                        : matches
                        ? {
                            bgcolor: "reverse",
                            ":hover": {
                              bgcolor: "white",
                            },
                            color: "red",
                            mt: 5,
                            mb: 5,
                            py: 2,
                            px: 0,
                            borderRadius: 0,
                            fontWeight: 900,
                            typography: {
                              letterSpacing: 4,
                            },
                          }
                        : {
                            bgcolor: "reverse",
                            ":hover": {
                              bgcolor: "white",
                            },
                            color: "red",
                            mt: 5,
                            mb: 6,
                            py: 2.5,
                            borderRadius: 0,
                            fontWeight: 900,
                            typography: {},
                          }
                    }
                  >
                    pomoz Františkovi
                  </Button>
                </Link>
                <Typography
                  variant="body2"
                  color="primary"
                  align="justify"
                  paragraph
                >
                  GREAT je ostravská organizace pořádající galavečery ringových
                  sportů pro dobročinné účely. Koupí oblečení GREAT přispíváte
                  na podporu malého Františka, který se narodil v šestém měsíci
                  těhotenství, trpí dětskou mozkovou obrnou a je odkázán na
                  invalidní vozík, a pro kterého GREAT organizují galavečer v
                  Ostravě dne 2.4.2022. Všechny produkty značky GREAT jsou
                  zárukou kvality a jsou vyráběny v České Republice.
                </Typography>
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
