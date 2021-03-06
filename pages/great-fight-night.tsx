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
                        Historicky prvn?? GREAT FIGHT NIGHT se uskute??n?? v p??tek
                        22.4.2022 v Atletick?? hale v Ostrav??-V??tkovic??ch. C??lem
                        t??to akce je vybrat 250 000 K?? pro mal??ho{" "}
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
                          Franti??ka a jeho maminku
                        </a>
                        {", "}
                        kte???? oba bojuj?? ka??d?? den a proto si zaslou???? aby se
                        tentokr??t bojovalo pro n??.
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
                        Historicky prvn?? GREAT FIGHT NIGHT se uskute??n?? v sobotu
                        23.4.2022 v Atletick?? hale v Ostrav??-V??tkovic??ch. C??lem
                        t??to akce je vybrat 250 000 K?? pro mal??ho{" "}
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
                          Franti??ka a jeho maminku
                        </a>
                        {", "}
                        kte???? oba bojuj?? ka??d?? den a proto si zaslou???? aby se
                        tentokr??t bojovalo pro n??.
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
                Hala s kapacitou v??ce ne?? 1 800 lid?? za??ije opravdu
                neopakovatelnou pod??vanou. V ringu toti?? uvid??me skv??l?? souboje,
                n??kolik mistr?? ??esk?? Republiky a mimojin?? tak??
                vyhecovan??/vyhrocen?? nel??tostn?? bitvy, jak?? jist?? nab??dnou
                nap????klad z??pasy{" "}
                <strong>
                  Strako?? vs. Obracaj, Pek??rek vs. Kub????ek nebo G??mez vs.
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
                Velk?? sv??tek z t??to akce d??l?? tak?? ????ast ostravsk?? bojovnice a
                velk??ho supertalentu <strong>Elizabeth Bezd??kov??</strong>.
                P??ehl??dku kr??sn??ch technik a souboj pln?? p??est??elek jako v??dy
                slibuje z??pas <strong>Ji????ho Ju??i??ky</strong>. Sv??j mo??n??
                posledn?? z??pas v boxu za??ije <strong>Martin Pr??zdn??</strong>,
                kter?? se do kr??lovsk??ho sportu vr??til kv??li zran??n?? kolene,
                av??ak po tomto galave??eru nejsp????e op??t zam?????? do MMA. V hlavn??m
                z??pase ve??era pak bude nejen Ostrava, ale cel?? ??esko a Slovensko
                na nohou - do ringu se toti?? po t??ech letech vrac??{" "}
                <strong>Marek Vane??ek</strong>, pro kter??ho to mo??n?? bude, a
                mo??n?? tak?? nebude, ??pln?? lou??en?? s kari??rou, b??hem kter?? potkal
                jm??na jako Strnisko, Clemente Russo, Tlkanec apod., tedy nejen
                ??eskou, ale i sv??tovou elitu. Tv?????? v tv???? se mu postav?? David
                Kl???? - kat jeho rivala z dob nejv??t???? sl??vy, Ji????ho Havel,
                kter??ho Kl???? na posledn??m Mistrovstv?? ??esk?? Republiky nel??tostn??
                knokautoval! P??ij??te si u????t nezapomenuteln?? ve??er pln?? skv??l??ho
                boxu a K-1 a pomoci t??m mal??mu Franti??kovi!
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
                    Atletick?? hala Ostrava, <br />
                    Rusk?? 3077/135, <br />
                    700 30 Ostrava - Z??b??eh,
                    <br /> ??esko
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
                    Atletick?? hala Ostrava, Rusk?? 3077/135, 700 30 Ostrava -
                    Z??b??eh, ??esko
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
