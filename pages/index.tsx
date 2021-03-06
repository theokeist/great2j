import * as React from "react";
import {
  Button,
  Grid,
  Box,
  Stack,
  Typography,
  CssBaseline,
  Paper,
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
    <Box sx={{ display: "flex", alignItems: "center", my: 3.5 }}>
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
    <>
      <NavigationMenu />
      <Main>
        <Box
          sx={
            matchesLg
              ? {
                  width: "calc(100% - 15vw)",
                  marginLeft: "auto",
                  bgcolor: "primary",
                  pt: 14,
                  pb: 6,
                  px: 4,
                }
              : matches
              ? { bgcolor: "primary", pt: 10, pb: 6, px: 2 }
              : { bgcolor: "primary", pt: 3, pb: 6, px: 1.5 }
          }
        >
          <Stack
            direction={matches ? "row" : "column"}
            spacing={6}
            justifyContent="center"
          >
            <Grid item xs={12} md={8} lg={7}>
              <iframe
                width="100%"
                height={matches ? "440px" : "356px"}
                src="https://www.youtube.com/embed/i4QYUrJyNoQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: "10px" }}
              ></iframe>
              <Typography
                variant="h6"
                color="primary"
                align="justify"
                paragraph
                sx={
                  matchesLg
                    ? {
                        py: 5,
                        backgroundColor: "primary",
                        fontSize: { md: 24, xs: 16 },
                      }
                    : matches
                    ? {
                        px: 2,
                        py: 2.5,
                        backgroundColor: "primary",
                        fontSize: { md: 24, xs: 16 },
                      }
                    : {
                        px: 1,
                        py: 3.5,
                        backgroundColor: "primary",
                        fontSize: { md: 24, xs: 16 },
                      }
                }
              >
                GREAT je ostravsk?? organizace po????daj??c?? galave??ery ringov??ch
                sport??, konkr??tn?? boxu, K-1. Hlavn?? my??lenkou organizace je
                pozvednut?? a propagace t??chto sport??, bojovn??k?? a p??edev????m
                pomoc pot??ebn??m. Proto jsou v??echny galave??ery v??nov??ny d??tem a
                rodin??m s posti??en??m.
              </Typography>
            </Grid>

            {/* <Grid item xs={12} md={6} lg={4}>
              <Paper
                elevation={24}
                sx={
                  matchesLg
                    ? {
                        minHeight: 710,
                        borderRadius: 3,
                        px: 5,
                        py: 5,
                        backgroundColor: "primary",
                      }
                    : matches
                    ? {
                        minHeight: 600,
                        borderRadius: 3,
                        px: 3.5,
                        py: 2.5,
                        backgroundColor: "primary",
                      }
                    : {
                        minHeight: 600,
                        borderRadius: 3,
                        px: 2.5,
                        py: 3.5,
                        backgroundColor: "primary",
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
                  {props?.title?.[0]} K??
                </Typography>

                <Typography
                  variant={matches ? "h4" : "h5"}
                  align="center"
                  color="primary"
                  sx={{ fontWeight: 300 }}
                >
                  vybr??no z 250 000 K??
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
                              bgcolor: "primary.light",
                            },
                            color: "red",
                            mt: 1.5,
                            mb: 6,
                            py: 2.5,
                            borderRadius: 3,
                            fontWeight: 700,
                            typography: {
                              letterSpacing: 4,
                            },
                          }
                        : matches
                        ? {
                            bgcolor: "black",
                            ":hover": {
                              bgcolor: "primary.light",
                            },
                            color: "red",
                            mt: 5,
                            mb: 5,
                            py: 2,
                            px: 0,
                            borderRadius: 3,
                            fontWeight: 700,
                            typography: {
                              letterSpacing: 3,
                            },
                          }
                        : {
                            bgcolor: "black",
                            ":hover": {
                              bgcolor: "primary.light",
                            },
                            color: "red",
                            mt: 0,
                            mb: 3,
                            py: 2.5,
                            borderRadius: 3,
                            fontWeight: 700,
                            typography: {
                              letterSpacing: 0,
                            },
                          }
                    }
                  >
                    transparentn?? ????et
                  </Button>
                </Link>
                <Typography
                  variant="body1"
                  color="primary"
                  align="justify"
                  paragraph
                >
                  Ve??ker?? pen??ze poslou???? na podporu mal??ho Franti??ka, kter?? se
                  narodil v ??est??m m??s??ci t??hotenstv??, trp?? d??tskou mozkovou
                  obrnou a je odk??z??n na invalidn?? voz??k, a pro kter??ho GREAT
                  organizuje galave??er v Ostrav?? dne 22.4.2022. Poj??me ho
                  spole??n?? podpo??it v jeho cest?? ??ivotem tam, kde u?? to jin??
                  maj?? za sebou.
                  <br />
                  <br />
                  Podpo??it ho m????ete rovn???? koup?? oble??en?? zna??ky GREAT, v??echny
                  produkty zna??ky GREAT jsou z??rukou kvality a jsou vyr??b??ny v
                  ??esk?? Republice.
                  <br />
                  <br />
                  Prohl??dnout produkty{" "}
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
              </Paper>
            </Grid> */}
          </Stack>
        </Box>
      </Main>
      <CopyrightFooter />
    </>
  );
}
