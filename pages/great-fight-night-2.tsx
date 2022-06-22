import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Main from "./components/main";
import NavigationMenu from "./components/navigation";
import EvnetTimeline2 from "./components/timeline-2";
import Banner from "./components/banner";
import CopyrightFooter from "./components";
import event from "../public/events/gfn1.webp";

import maruska from "../public/events/maruska.jpg";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Paper } from "@mui/material";

export default function Events() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <NavigationMenu />
      <Banner
        align="center"
        header={"./event3.webp"}
        objectPosition="0 20%"
        title="GREAT FIGHT NIGHT 2"
      />

      <Main>
        <Grid
          container
          sx={
            matchesLg
              ? {
                  width: { xl: "calc(100% - 15vw)", sm: "100%" },
                  marginLeft: "auto",
                  px: 10,
                  mt: 7,
                }
              : matches
              ? { px: 6, mt: 7 }
              : { px: 2, mt: 2 }
          }
        >
          <Grid container spacing={6}>
            {matchesLg && <hr style={{ width: "60%", margin: "70px auto" }} />}
            <Grid item xs={12} md={6} lg={8}>
              <Grid container spacing={4}>
                {matches ? (
                  <>
                    <Grid item xs={12} md={12} lg={12}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: 26,
                          letterSpacing: 1,
                        }}
                        variant="h6"
                        color="primary"
                        align="justify"
                        paragraph
                      >
                        GREAT FIGHT NIGHT 2 !! Je to tady! Již druhý galavečer
                        plný skvělých boxerských zápasů, pro který je největším
                        vítězstvím pomáhat! Chlapci z 2j se tentokrat rozhodli
                        vybrat finanční pomoc{" "}
                        <a
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontWeight: 500,
                          }}
                          href="https://www.maruskakucerova.cz/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Marušku
                        </a>
                        {", "}
                        trpící dětskou mozkovou obrnou. Cílem této dobročinné
                        akce je vybrat pro tuto malou bojovnici 200.000 Kč a tím
                        ji alespoň částečně ulehčit život.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Paper
                        variant="outlined"
                        sx={{ borderRadius: 3, p: 0.5 }}
                      >
                        <a
                          style={{
                            textDecoration: "none",
                          }}
                          href="https://goout.net/cs/great-fight-night-pro-marusku/szqmvmt/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            className="event-photo"
                            alt="great by 2j"
                            src={event}
                            layout="responsive"
                            placeholder="blur"
                            objectFit="contain"
                            priority
                          />
                        </a>
                      </Paper>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} md={12} lg={8}>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: { md: 25, sx: 22 },
                          letterSpacing: { xs: 0 },
                        }}
                        variant="h6"
                        color="primary"
                        align="justify"
                        paragraph
                      >
                        GREAT FIGHT NIGHT 2 !! Je to tady! Již druhý galavečer
                        plný skvělých boxerských zápasů, pro který je největším
                        vítězstvím pomáhat! Chlapci z 2j se tentokrat rozhodli
                        vybrat finanční pomoc{" "}
                        <a
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontWeight: 500,
                          }}
                          href="https://www.maruskakucerova.cz/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Marušku
                        </a>
                        {", "}
                        trpící dětskou mozkovou obrnou. Cílem této dobročinné
                        akce je vybrat pro tuto malou bojovnici 200.000 Kč a tím
                        ji alespoň částečně ulehčit život.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Paper
                        variant="outlined"
                        sx={{ borderRadius: 3, p: 0.5 }}
                      >
                        <a
                          style={{
                            textDecoration: "none",
                          }}
                          href="https://goout.net/cs/great-fight-night-pro-marusku/szqmvmt/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            className="event-photo"
                            alt="great by 2j"
                            src={event}
                            layout="responsive"
                            placeholder="blur"
                            objectFit="contain"
                            priority
                          />
                        </a>
                      </Paper>
                    </Grid>
                  </>
                )}
              </Grid>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Připravili jsme pro vás vydařený program! V hlavním zápase se
                můžete těšit na oblíbence z Ostravy Martina Prázdného. Dále se v
                ringu představí jména, jako Michal Zátorský, Dominik Gloser,
                Maxim Schejbal, Dominik Brabec a Natálie Poledníková a mnoho
                dalších! S touto našlapanou fight card se vracíme do Ostravského
                chrámu boxu, haly Tatran! Nenech si ujít tuto velkou show, která
                se bude konat již 30.7.2022 !! Pojďme společně uprostřed léta
                vybojovat lepší a plnohodnotný život pro Marušku a užít si
                skvělý galavečer boxu!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper variant="outlined" sx={{ borderRadius: 3, p: 0.5 }}>
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href="https://www.maruskakucerova.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="charity-photo"
                    alt="great by 2j"
                    src={maruska}
                    layout="responsive"
                    placeholder="blur"
                    objectFit="contain"
                    priority
                  />
                </a>
              </Paper>
            </Grid>
          </Grid>
          <hr style={{ width: "60%", margin: "70px auto" }}></hr>
          <Grid container spacing={6}>
            {matches ? (
              <>
                <Grid item xs={12} md={12} lg={12}>
                  <Typography variant="h4" color="primary" gutterBottom>
                    Hala Tatran, <br />
                    Cingrova 1627/10, <br />
                    702 00 Moravská Ostrava a Přívoz,
                    <br /> Česko
                  </Typography>
                  <iframe
                    src="https://frame.mapy.cz/s/badeluzupu"
                    width="100%"
                    height="580"
                    frameBorder="0"
                    style={{ borderRadius: "10px" }}
                  ></iframe>
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={6} lg={8}>
                  {/* <hr style={{ width: "60%", margin: "70px auto" }}></hr>*/}
                  <Typography variant="h5" color="primary" gutterBottom>
                    Hala Tatran, Cingrova 1627/10, 702 00 Moravská Ostrava a
                    Přívoz, Česko
                  </Typography>
                  <iframe
                    src="https://frame.mapy.cz/s/badeluzupu"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    style={{ borderRadius: "10px" }}
                  ></iframe>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Main>
      <CopyrightFooter />
    </>
  );
}
