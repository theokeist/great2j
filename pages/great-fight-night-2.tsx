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
                            color: "rgba(249,91,32,0.88)",
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
                        Druhý galavečer Great Fight Night, který se odehraje již
                        30. července v ostravské hale Tatran, nabídne celkem 12
                        boxerských zápasů. Zajímavostí je, že bojovníci nebudou
                        bojovat pouze za sebe, ale hlavně pro malou{" "}
                        <a
                          style={{
                            color: "rgba(249,91,32,0.88)",
                            textDecoration: "none",
                            fontWeight: 500,
                          }}
                          href="https://www.maruskakucerova.cz/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Marušku
                        </a>
                        {", "}, pro kterou organizace hodlá vybrat 200 tisíc
                        korun. Jaká jména se v ringu představí?
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
                Zlatým hřebem celého večera bude bitva mezi Martinem "Emptyšem"
                Prázdným a Davidem Popovičem. Přezdívaný "Emptyš", který je
                miláčkem ostravských fanoušků, chce být prvním šampionem
                organizace Great by 2j a k tomuto cíli už není daleko. Cesta za
                titulem ovšem nebude jednoduchá, překazit jeho plány se chystá
                David Popovič, který je čtyřnásobným českým mistrem. Tento zápas
                rozhodně slibuje atraktivní a tvrdou bitvu, která otřásne
                ostravskou halou.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Ještě předtím fanoušky ale čeká zajímavý souboj Dominika
                “Hasbully” Glosera, který se původně měl utkat s Michalem
                Zátorským, který se ovšem zranil, a tak Dominika čeká neméně
                těžká zkouška v podobě polského mistra, reprezentanta a
                účastníka MS - Mateusze Urbana. V ringu je jako doma – takhle
                výstižně by se dal charakterizovat Michal Takács, který za svou
                kariéru nasbíral okolo 300 zápasů. Takács se mezi provazy potkal
                s těmi nejlepšími, a dokonce dokázal porazit i medailisty z
                olympiády. Tentokrát se mu postaví mladý a dravý Miloš "Banán"
                Beránek, který si mezi profesionály vybudoval skvělý rekord
                šesti vítězství bez jediné porážky. Nyní se ale vrací zpět do
                olympijského boxu, kde má jasný cíl, dostat se na olympijské
                hry! K tomu ho může výrazně přiblížit výhra nad Michalem
                Takácsem, ale jisté je, že nic jednoduchého ho nečeká.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Mimo tří hlavních taháků se ale můžeme těšit i na ostatní skvělé
                zápasy. Na cestě za dalším ukončením je ostravský bombardér Jan
                "Tyson" Strakoš, který se utká s neméně tvrdým Samuelem Bílým,
                který si o Strakoše sebevědomě řekl a je přesvědčen, že ho
                porazí. Podle mnohých se může jednat o zápas večera, jelikož oba
                borci doslova milují tvrdé přestřelky.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Celou kartu otevřou Ondřej Balík s Ondřejem Malým, kteří chtějí
                hned na začátku nastavit vysokou laťku a předvést fantastický
                zápas. Nesmíme také zapomenout na jednoho z nejlepších boxerů ve
                váze do 67 kg Kelvina Soquessa, kterého vyzve neporažený Viktor
                Volcho.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Další perlou bude souboj dvou mistrů svých zemí, a to účastníkem
                mistrovství Evropy Erikem Suchým a Vadimem Balubou, který
                nedávno přijel do ČR z Ukrajiny a ihned vybojoval stříbrnou
                medaili ve čtvrtém kole extraligy. Z pověstného Jetsaam Gymu
                také do Ostravy přijede i Dominik Brabec, kterého otestuje Maxim
                Schejbal, jenž nedávno vybojoval skvělé umístění na ME. Vítěz
                tohoto souboje navíc výrazně zamíchá kartami ve váze do 80 kg.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Karta je tedy téměř kompletní a už teď je jasné, že se mají
                fanoušci boxu na co těšit. Nejenže si vychutnají spoustu
                skvělých zápasů, ale koupí lístku zároveň mohou podpořit dobrou
                věc. Vstupenky jsou k dispozici na Goout.net
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
