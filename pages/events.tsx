import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Main from "./components/main";
import NavigationMenu from "./components/navigation";
import EvnetTimeline from "./components/timeline";
import Banner from "./components/banner";
import CopyrightFooter from "./components";

import event from "../public/events/gfn1.webp";
import event2 from "../public/events/gfn2.webp";

import event1 from "../public/events/gfn1.1.webp";
import event1_2 from "../public/events/gfn2.1.webp";

import Image from "next/image";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Link, Paper } from "@mui/material";

export const eventPages = [
  {
    name: "GREAT FIGHT NIGHT 2",
    link: "/great-fight-night-2",
    tickets: "https://goout.net/cs/great-fight-night-pro-marusku/szqmvmt/",
    event: event,
    event2: event2,
  },
  {
    name: "GREAT FIGHT NIGHT",
    link: "/great-fight-night",
    tickets: "https://goout.net/cs/great-fight-night-pro-frantiska/szutfws/",
    event: event1,
    event2: event1_2,
  },
];

export default function Events() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <NavigationMenu />
      <Banner
        align="center"
        title="EVENTY"
        header={"./event3.webp"}
        objectPosition="0 31%"
      />

      <Main>
        <Grid
          container
          sx={
            matchesLg
              ? {
                  width: { xl: "calc(100% - 15vw)", sm: "100%" },
                  marginLeft: "auto",
                  px: 20,
                  mt: 7,
                }
              : matches
              ? { px: 6, mt: 7 }
              : { px: 2, mt: 2 }
          }
        >
          <Grid container spacing={6}>
            {eventPages.map((page, index) => (
              <Grid item xs={12} md={6} lg={6} key={index}>
                <Paper
                  elevation={24}
                  key={index}
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    mt: 4,
                    width: "100%",
                  }}
                >
                  <Grid container item spacing={2}>
                    <Grid item xs={12}>
                      <Image
                        className="charity-photo"
                        alt="great by 2j"
                        src={matchesLg ? page.event2 : page.event2}
                        layout="responsive"
                        placeholder="blur"
                        objectFit="contain"
                        priority
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Link
                        key={index}
                        href={page.link}
                        sx={{ textDecoration: "none", width: "100%" }}
                      >
                        <Button
                          size="large"
                          variant="outlined"
                          color="primary"
                          disabled={!page.link || page.link === "#"}
                          fullWidth
                          sx={{ py: 2 }}
                        >
                          informace
                        </Button>
                      </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Link
                        key={index}
                        href={page.tickets}
                        sx={{ textDecoration: "none", width: "100%" }}
                      >
                        <Button
                          size="large"
                          variant="contained"
                          color="secondary"
                          disableElevation
                          fullWidth
                          sx={{ py: 2 }}
                        >
                          lístky
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Main>
      <CopyrightFooter />
    </>
  );
}
