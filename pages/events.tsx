import * as React from "react";
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

import Image from "next/image";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import header from "../public/event3.webp";
import Main from "./components/main";
import Banner from "./components/banner";

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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Events() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Banner header={header} objectPosition="0 30%" />

      <NavigationMenu />
      <Main align="center" title="GREAT FIGHT NIGHT" subtitle="pro Františka">
        <Typography variant="h6" color="primary" paragraph>
          Datum konání
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction={matches ? "row" : "column"}
          spacing={2}
        >
          <Typography variant="body1" color="primary" paragraph>
            Rozhodli jsme se zorganizovat galavečer ringových sportů za účelem
            propagace a změny nastolených trendů, díky kterým se dnes dostává
            pozornosti hlavně MMA. Abychom ukázali, že jsme nepřišli vydělávat
            peníze, ale dělat to pro sport a pro potřebné, rozhodli jsme se, že
            akce bude organizována pro dobrou věc. Na internetu jsme našli
            článek o malém Františkovi, který se narodil o 13 týdnů dříve a své
            první měsíce života strávil na jednotce intenzivní a resuscitační
            péče a neonatologie mimo jiné také s krvácením do mozku. Po
            propuštění z nemocnice se začal velmi opožďovat a byla mu
            diagnostikována dětská mozková obrna. Taktéž se potýká s velkými
            problémy s motorikou a vadou řeči. František a jeho maminka, která
            je na něj od narození sama, musí každý den dojíždět na rehabilitace
            a absolvovat různé pobyty v lázeňských zařízeních. Bohužel spoustu
            nákladů nehradí pojišťovna, například samotné rehabilitace vyjdou
            měsíčně na 20.000,- Kč. Tím to naneštěstí nekončí. František
            nedokáže samostatně chodit a s pomocí udělá pár krůčků. Po většinu
            života je odkázán na invalidní vozík a na péči své maminky a
            blízkých. Z důvodu zkrácení Achillových šlach potřebuje mít neustále
            na nohou ortézy, jejichž výroba je velmi finančně nákladná. V České
            republice nejsou žádné, které by Fandovi pomáhaly, a tak má nyní již
            druhé od firmy z Vídně, kam také musí jednou měsíčně dojíždět.
            Výroba ortéz vyšla na 180 a 120 tisíc Kč. O tom, že to má rodina
            extrémně finančně a psychicky náročné, nemusíme vést debaty. Z toho
            důvodu jsme se rozhodli, že naše cílová částka, kterou se pokusíme
            pro rodinu vybrat, bude vysoká - 250.000,- Kč. Budeme rádi, když nám
            v tomto pomůžete svou účastí a skvělým výkonem na galavečeru! :)
          </Typography>
          <iframe
            src="https://frame.mapy.cz/s/movodutovo"
            width="auto"
            height="400"
            frameBorder="0"
          ></iframe>
        </Stack>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
