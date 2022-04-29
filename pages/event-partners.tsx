import * as React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "next/image";

import NavigationMenu from "./components/navigation";
import CopyrightFooter from "./components";
import Main from "./components/main";
import Banner from "./components/banner";

import boxing from "../public/partners/boxingostrava.jpg";
import jemasport from "../public/partners/jemasport.png";
import moodnite from "../public/partners/moodnite.jpg";
import skrcto from "../public/partners/skrcto.jpg";

import filip_zidek from "../public/partners/filip_zidek.jpg";
import dva_mluvci from "../public/partners/dva_mluvci.jpg";

import nadace_rgb from "../public/partners/nadace_rgb.png";
import backfist from "../public/partners/backfist.png";
import bernold from "../public/partners/bernold.png";
import svihej from "../public/partners/svihej.png";
import nedproject from "../public/partners/nedproject.png";

const fotky = [
  {
    path: nedproject,
    name: "NED Ekosystém",
    link: "https://nedproject.co/",
  },
  {
    path: boxing,
    name: "BOXING CLUB OSTRAVA",
    link: "https://boxingclubostrava.cz/",
  },
  {
    path: jemasport,
    name: "JEMASPORT",
    link: "https://www.jemasport.cz/",
  },
  {
    path: dva_mluvci,
    name: "Dva Mluvčí",
    link: "https://www.dvamluvci.cz/",
  },
  {
    path: filip_zidek,
    name: "JEMASPORT",
    link: "https://www.facebook.com/filipzidekphotography/",
  },
  {
    path: moodnite,
    name: "Moodnite",
    link: "https://www.moodnite.cz/",
  },
  {
    path: skrcto,
    name: "Skrč to!",
    link: "http://www.skrctostudio.cz/",
  },
  {
    path: nadace_rgb,
    name: "Nadace Multicraft",
    link: "http://nadacemulticraft.cz/",
  },
  {
    path: backfist,
    name: "BACKFIST",
    link: "https://www.backfist.cz/",
  },
  {
    path: bernold,
    name: "BERNOLD",
    link: "https://www.bernold.cz/",
  },
  {
    path: svihej,
    name: "ŠVIHEJ",
    link: "https://www.svihej.cz/",
  },
];

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function EventPartners() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <>
      <NavigationMenu />
      <Banner
        title="Partneři"
        header={"./event_partner.webp"}
        objectPosition="0 25%"
      />
      <Main>
        <Grid
          container
          spacing={4}
          sx={
            matchesLg
              ? {
                  width: { xl: "calc(100% - 15vw)", sm: "100%" },
                  marginLeft: "auto",
                  px: 10,
                  py: 7,
                }
              : matches
              ? { px: 3, py: 5 }
              : { px: 5, py: 5 }
          }
        >
          {fotky?.map((foto, index) => {
            return (
              <Grid key={index} item xs={6} sm={6} md={4} lg={2}>
                <Link href={foto.link}>
                  <Image
                    alt={foto.name}
                    src={foto.path}
                    height={256}
                    width={256}
                    layout="responsive"
                    priority
                  />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Main>
      <CopyrightFooter />
    </>
  );
}
