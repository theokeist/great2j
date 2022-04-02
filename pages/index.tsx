import * as React from "react";
import {
  Button,
  Grid,
  Box,
  Stack,
  Typography,
  CssBaseline,
} from "@mui/material";
import Link from "@mui/material/Link";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import cheerio from "cheerio";
import axios from "axios";
import NavigationMenu from "./components/navigation";
import CopyrightFooter from "./components";
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
    <Box sx={{ display: "flex", alignItems: "center", mx: 1, my: 3.5 }}>
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
              ? { bgcolor: "primary", pt: 8, pb: 6, px: 30 }
              : matches
              ? { bgcolor: "primary", pt: 4, pb: 6, px: 2 }
              : { bgcolor: "primary", pt: 4, pb: 6, px: 1.5 }
          }
        >
          <Stack
            direction={matches ? "row" : "column"}
            spacing={6}
            justifyContent="center"
          >
            <Grid item xs={12} md={6} lg={5}>
              <iframe
                width="100%"
                height={matches ? "340px" : "256px"}
                src="https://www.youtube.com/embed/B1YJXXFwgpA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography
                variant="h6"
                color="primary"
                align="justify"
                paragraph
                sx={{
                  mt: { xs: 1, md: 4 },
                  fontSize: { md: 24, xs: 16 },
                }}
              >
                GREAT je ostravská organizace pořádající galavečery ringových
                sportů, konkrétně boxu, K-1 a Muay Thai. Hlavní myšlenkou
                organizace je pozvednutí a propagace těchto sportů, bojovníků a
                především pomoc potřebným. Proto jsou všechny galavečery
                věnovány dětem a rodinám s postižením.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Box
                sx={
                  matchesLg
                    ? {
                        minHeight: 600,
                        borderRadius: 0,
                        px: 5,
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
                        px: 2.5,
                        py: 3.5,
                        backgroundColor: "primary.dark",
                      }
                }
              >
                <Typography
                  variant={matches ? "h2" : "h3"}
                  align="center"
                  sx={{ fontWeight: 900 }}
                  color="primary"
                  paragraph
                >
                  {props?.title?.[0]} Kč
                </Typography>

                <Typography
                  variant={matches ? "h4" : "h5"}
                  align="center"
                  color="primary"
                  sx={{ fontWeight: 300 }}
                >
                  vybráno z 250 000 Kč
                </Typography>
                <LinearProgressWithLabel color="secondary" value={progress} />

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
                            marginRight: 5,
                          }}
                        />
                      ) : (
                        <FavoriteIcon
                          style={{
                            fontSize: 30,
                            marginRight: 5,
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
                            bgcolor: "black",
                            ":hover": {
                              bgcolor: "white",
                            },
                            color: "red",
                            mt: 1.5,
                            mb: 6,
                            py: 2.5,
                            borderRadius: 0,
                            fontWeight: 700,
                            typography: {
                              letterSpacing: 4,
                            },
                          }
                        : matches
                        ? {
                            bgcolor: "black",
                            ":hover": {
                              bgcolor: "white",
                            },
                            color: "red",
                            mt: 5,
                            mb: 5,
                            py: 2,
                            px: 0,
                            borderRadius: 0,
                            fontWeight: 700,
                            typography: {
                              letterSpacing: 3,
                            },
                          }
                        : {
                            bgcolor: "black",
                            ":hover": {
                              bgcolor: "white",
                            },
                            color: "red",
                            mt: 0,
                            mb: 3,
                            py: 2.5,
                            borderRadius: 0,
                            fontWeight: 700,
                            typography: {
                              letterSpacing: 0,
                            },
                          }
                    }
                  >
                    transparentní účet
                  </Button>
                </Link>
                <Typography
                  variant="body1"
                  color="primary"
                  align="justify"
                  paragraph
                >
                  Veškeré peníze poslouží na podporu malého Františka, který se
                  narodil v šestém měsíci těhotenství, trpí dětskou mozkovou
                  obrnou a je odkázán na invalidní vozík, a pro kterého GREAT
                  organizuje galavečer v Ostravě dne 22.4.2022. Pojďme ho
                  společně podpořit v jeho cestě životem tam, kde už to jiní
                  mají za sebou.
                  <br />
                  <br />
                  Podpořit ho můžete rovněž koupí oblečení značky GREAT, všechny
                  produkty značky GREAT jsou zárukou kvality a jsou vyráběny v
                  České Republice.
                  <br />
                  <br />
                  Prohlédnout produkty{" "}
                  <a
                    style={{
                      color: "red",
                    }}
                    href="https://bit.ly/GreatShopCZ"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    zde.
                  </a>
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
