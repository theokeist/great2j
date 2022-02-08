import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Main from "./components/main";
import NavigationMenu from "./components/navigation";
import EvnetTimeline from "./components/timeline";
import Banner from "./components/banner";
import CopyrightFooter from "./components";

import frantisek from "../public/events/frantisek.jpg";
import Image from "next/image";

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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Events() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <NavigationMenu />
      <Banner
        align="center"
        title="GREAT FIGHT NIGHT"
        subtitle="pro Františka"
        header={"./event3.webp"}
        objectPosition="0 31%"
      />

      <Main>
        <Grid
          container
          sx={
            matchesLg
              ? { px: 30, mt: 7 }
              : matches
              ? { px: 6, mt: 7 }
              : { px: 2, mt: 4 }
          }
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={7}>
              <Grid container spacing={4}>
                {matches ? (
                  <>
                    <Grid item xs={12} md={12} lg={4}>
                      <Image
                        alt="great by 2j"
                        src={frantisek}
                        layout="responsive"
                        placeholder="blur"
                        priority
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: { md: 25, sx: 22 },
                          letterSpacing: { xs: 1, md: 2 },
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
                ) : (
                  <>
                    <Grid item xs={12} md={12} lg={8}>
                      <Typography
                        sx={{
                          fontWeight: 300,
                          fontSize: { md: 25, sx: 22 },
                          letterSpacing: { xs: 1, md: 2 },
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
                    <Grid item xs={12} md={12} lg={4} sx={{ mb: 4 }}>
                      <Image
                        alt="great by 2j"
                        src={frantisek}
                        layout="responsive"
                        placeholder="blur"
                        priority
                      />
                    </Grid>
                  </>
                )}
              </Grid>
              <Typography
                sx={{ fontWeight: 300 }}
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
                sx={{ fontWeight: 300, mt: 4 }}
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
            <Grid item xs={12} md={6} lg={5} sx={{ padding: { xs: 0 } }}>
              <EvnetTimeline />
            </Grid>
          </Grid>
          <hr style={{ width: "60%", margin: "100px auto" }}></hr>
          <Grid item xs={12} md={12}>
            <iframe
              src="https://frame.mapy.cz/s/medebatofa"
              width="100%"
              height="500"
              frameBorder="0"
            ></iframe>
          </Grid>
        </Grid>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
