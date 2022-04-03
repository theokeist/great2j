import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Main from "./components/main";
import NavigationMenu from "./components/navigation";
import EvnetTimeline from "./components/timeline";
import Banner from "./components/banner";
import CopyrightFooter from "./components";

import frantisek from "../public/events/frantisek.jpg";
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
        header={"./events/gfn_event.webp"}
        objectPosition="0 20%"
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
                        Historicky první GREAT FIGHT NIGHT se uskuteční v pátek
                        22.4.2022 v Atletické hale v Ostravě-Vítkovicích. Cílem
                        této akce je vybrat 250 000 Kč pro malého{" "}
                        <a
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontWeight: 500,
                          }}
                          href="https://www.dobryandel.cz/2020/predcasne-narozeni-ovlivnilo-sestiletemu-frantiskovi-cely-zivot/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Františka a jeho maminku
                        </a>
                        {", "}
                        kteří oba bojují každý den a proto si zaslouží aby se
                        tentokrát bojovalo pro ně.
                      </Typography>
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
                        Historicky první GREAT FIGHT NIGHT se uskuteční v sobotu
                        23.4.2022 v Atletické hale v Ostravě-Vítkovicích. Cílem
                        této akce je vybrat 250 000 Kč pro malého{" "}
                        <a
                          style={{
                            color: "red",
                            textDecoration: "none",
                            fontWeight: 500,
                          }}
                          href="https://www.dobryandel.cz/2020/predcasne-narozeni-ovlivnilo-sestiletemu-frantiskovi-cely-zivot/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Františka a jeho maminku
                        </a>
                        {", "}
                        kteří oba bojují každý den a proto si zaslouží aby se
                        tentokrát bojovalo pro ně.
                      </Typography>
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
                Hala s kapacitou více než 1 800 lidí zažije opravdu
                neopakovatelnou podívanou. V ringu totiž uvidíme skvělé souboje,
                několik mistrů České Republiky a mimojiné také
                vyhecované/vyhrocené nelítostné bitvy, jaké jistě nabídnou
                například zápasy{" "}
                <strong>
                  Strakoš vs. Obracaj, Pekárek vs. Kubíček nebo Gámez vs.
                  Hartmann.
                </strong>{" "}
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Velký svátek z této akce dělá také účast ostravské bojovnice a
                velkého supertalentu <strong>Elizabeth Bezděkové</strong>.
                Přehlídku krásných technik a souboj plný přestřelek jako vždy
                slibuje zápas <strong>Jiřího Juřičky</strong>. Svůj možná
                poslední zápas v boxu zažije <strong>Martin Prázdný</strong>,
                který se do královského sportu vrátil kvůli zranění kolene,
                avšak po tomto galavečeru nejspíše opět zamíří do MMA. V hlavním
                zápase večera pak bude nejen Ostrava, ale celé Česko a Slovensko
                na nohou - do ringu se totiž po třech letech vrací{" "}
                <strong>Marek Vaneček</strong>, pro kterého to možná bude, a
                možná také nebude, úplné loučení s kariérou, během které potkal
                jména jako Strnisko, Clemente Russo, Tlkanec apod., tedy nejen
                českou, ale i světovou elitu. Tváří v tvář se mu postaví David
                Klíč - kat jeho rivala z dob největší slávy, Jiřího Havel,
                kterého Klíč na posledním Mistrovství České Republiky nelítostně
                knokautoval! Přijďte si užít nezapomenutelný večer plný skvělého
                boxu a K-1 a pomoci tím malému Františkovi!
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Paper variant="outlined" sx={{ borderRadius: 3, p: 0.5 }}>
                <a
                  style={{
                    textDecoration: "none",
                  }}
                  href="https://www.dobryandel.cz/2020/predcasne-narozeni-ovlivnilo-sestiletemu-frantiskovi-cely-zivot/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="charity-photo"
                    alt="great by 2j"
                    src={frantisek}
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
                <Grid item xs={12} md={6} lg={8}>
                  <Typography variant="h4" color="primary" gutterBottom>
                    Atletická hala Ostrava, <br />
                    Ruská 3077/135, <br />
                    700 30 Ostrava - Zábřeh,
                    <br /> Česko
                  </Typography>
                  <iframe
                    src="https://frame.mapy.cz/s/medebatofa"
                    width="100%"
                    height="580"
                    frameBorder="0"
                    style={{ borderRadius: "10px" }}
                  ></iframe>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <EvnetTimeline />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12} md={6} lg={4}>
                  <EvnetTimeline />
                </Grid>
                <Grid item xs={12} md={6} lg={8}>
                  <hr style={{ width: "60%", margin: "70px auto" }}></hr>
                  <Typography variant="h5" color="primary" gutterBottom>
                    Atletická hala Ostrava, Ruská 3077/135, 700 30 Ostrava -
                    Zábřeh, Česko
                  </Typography>
                  <iframe
                    src="https://frame.mapy.cz/s/medebatofa"
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
