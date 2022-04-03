import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Main from "./components/main";
import NavigationMenu from "./components/navigation";
import EvnetTimeline from "./components/timeline";
import Banner from "./components/banner";
import CopyrightFooter from "./components";

import event from "../public/events/gfn1.webp";
import Image from "next/image";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Button, Link, Paper } from "@mui/material";

export const eventPages = [
  {
    name: "GREAT FIGHT NIGHT",
    link: "/great-fight-night",
    tickets: "https://goout.net/cs/great-fight-night-pro-frantiska/szutfws/",
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
        title="GREAT FIGHT"
        subtitle="EVENTY"
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
                  px: 40,
                  mt: 7,
                }
              : matches
              ? { px: 6, mt: 7 }
              : { px: 2, mt: 2 }
          }
        >
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} lg={12}>
              {eventPages.map((page, index) => (
                <Paper
                  elevation={24}
                  key={index}
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    width: "100%",
                  }}
                >
                  <Grid container item spacing={2}>
                    <Grid item xs={12}>
                      <Image
                        className="charity-photo"
                        alt="great by 2j"
                        src={event}
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
                          fullWidth
                          sx={{ py: 2 }}
                        >
                          informace o eventu
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
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Main>
      <CopyrightFooter />
    </>
  );
}
