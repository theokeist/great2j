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
                        GREAT FIGHT NIGHT 2 !! Je to tady! Ji?? druh?? galave??er
                        pln?? skv??l??ch boxersk??ch z??pas??, pro kter?? je nejv??t????m
                        v??t??zstv??m pom??hat! Chlapci z 2j se tentokrat rozhodli
                        vybrat finan??n?? pomoc{" "}
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
                          Maru??ku
                        </a>
                        {", "}
                        trp??c?? d??tskou mozkovou obrnou. C??lem t??to dobro??inn??
                        akce je vybrat pro tuto malou bojovnici 200.000 K?? a t??m
                        ji alespo?? ????ste??n?? uleh??it ??ivot.
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
                        Druh?? galave??er Great Fight Night, kter?? se odehraje ji??
                        30. ??ervence v ostravsk?? hale Tatran, nab??dne celkem 12
                        boxersk??ch z??pas??. Zaj??mavost?? je, ??e bojovn??ci nebudou
                        bojovat pouze za sebe, ale hlavn?? pro malou{" "}
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
                          Maru??ku
                        </a>
                        {", "}, pro kterou organizace hodl?? vybrat 200 tis??c
                        korun. Jak?? jm??na se v ringu p??edstav???
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
                Zlat??m h??ebem cel??ho ve??era bude bitva mezi Martinem "Empty??em"
                Pr??zdn??m a Davidem Popovi??em. P??ezd??van?? "Empty??", kter?? je
                mil????kem ostravsk??ch fanou??k??, chce b??t prvn??m ??ampionem
                organizace Great by 2j a k tomuto c??li u?? nen?? daleko. Cesta za
                titulem ov??em nebude jednoduch??, p??ekazit jeho pl??ny se chyst??
                David Popovi??, kter?? je ??ty??n??sobn??m ??esk??m mistrem. Tento z??pas
                rozhodn?? slibuje atraktivn?? a tvrdou bitvu, kter?? ot????sne
                ostravskou halou.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Je??t?? p??edt??m fanou??ky ale ??ek?? zaj??mav?? souboj Dominika
                ???Hasbully??? Glosera, kter?? se p??vodn?? m??l utkat s Michalem
                Z??torsk??m, kter?? se ov??em zranil, a tak Dominika ??ek?? nem??n??
                t????k?? zkou??ka v podob?? polsk??ho mistra, reprezentanta a
                ????astn??ka MS - Mateusze Urbana. V ringu je jako doma ??? takhle
                v??sti??n?? by se dal charakterizovat Michal Tak??cs, kter?? za svou
                kari??ru nasb??ral okolo 300 z??pas??. Tak??cs se mezi provazy potkal
                s t??mi nejlep????mi, a dokonce dok??zal porazit i medailisty z
                olympi??dy. Tentokr??t se mu postav?? mlad?? a drav?? Milo?? "Ban??n"
                Ber??nek, kter?? si mezi profesion??ly vybudoval skv??l?? rekord
                ??esti v??t??zstv?? bez jedin?? por????ky. Nyn?? se ale vrac?? zp??t do
                olympijsk??ho boxu, kde m?? jasn?? c??l, dostat se na olympijsk??
                hry! K tomu ho m????e v??razn?? p??ibl????it v??hra nad Michalem
                Tak??csem, ale jist?? je, ??e nic jednoduch??ho ho ne??ek??.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Mimo t???? hlavn??ch tah??k?? se ale m????eme t????it i na ostatn?? skv??l??
                z??pasy. Na cest?? za dal????m ukon??en??m je ostravsk?? bombard??r Jan
                "Tyson" Strako??, kter?? se utk?? s nem??n?? tvrd??m Samuelem B??l??m,
                kter?? si o Strako??e sebev??dom?? ??ekl a je p??esv??d??en, ??e ho
                poraz??. Podle mnoh??ch se m????e jednat o z??pas ve??era, jeliko?? oba
                borci doslova miluj?? tvrd?? p??est??elky.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Celou kartu otev??ou Ond??ej Bal??k s Ond??ejem Mal??m, kte???? cht??j??
                hned na za????tku nastavit vysokou la??ku a p??edv??st fantastick??
                z??pas. Nesm??me tak?? zapomenout na jednoho z nejlep????ch boxer?? ve
                v??ze do 67 kg Kelvina Soquessa, kter??ho vyzve nepora??en?? Viktor
                Volcho.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Dal???? perlou bude souboj dvou mistr?? sv??ch zem??, a to ????astn??kem
                mistrovstv?? Evropy Erikem Such??m a Vadimem Balubou, kter??
                ned??vno p??ijel do ??R z Ukrajiny a ihned vybojoval st????brnou
                medaili ve ??tvrt??m kole extraligy. Z pov??stn??ho Jetsaam Gymu
                tak?? do Ostravy p??ijede i Dominik Brabec, kter??ho otestuje Maxim
                Schejbal, jen?? ned??vno vybojoval skv??l?? um??st??n?? na ME. V??t??z
                tohoto souboje nav??c v??razn?? zam??ch?? kartami ve v??ze do 80 kg.
              </Typography>
              <Typography
                sx={{ fontWeight: 400, mt: 4 }}
                variant="body1"
                color="primary"
                align="justify"
                paragraph
              >
                Karta je tedy t??m???? kompletn?? a u?? te?? je jasn??, ??e se maj??
                fanou??ci boxu na co t????it. Nejen??e si vychutnaj?? spoustu
                skv??l??ch z??pas??, ale koup?? l??stku z??rove?? mohou podpo??it dobrou
                v??c. Vstupenky jsou k dispozici na Goout.net
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
                    702 00 Moravsk?? Ostrava a P????voz,
                    <br /> ??esko
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
                    Hala Tatran, Cingrova 1627/10, 702 00 Moravsk?? Ostrava a
                    P????voz, ??esko
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
