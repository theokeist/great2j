import * as React from "react";
import {
  Button,
  Grid,
  Box,
  Stack,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import Link from "@mui/material/Link";
import { createTheme, useTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import header from "../public/header.jpg";

import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import Banner from "./components/banner";
import Main from "./components/main";

import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

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
    secondary: {
      main: "#ff0000",
    },
  },
});

export default function Album() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 1400);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <Banner header={header} />
      <NavigationMenu />
      <Main>
        <Box
          sx={{
            bgcolor: "primary",
            pt: 2,
            pb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Stack
              direction={matches ? "row" : "column-reverse"}
              spacing={8}
              justifyContent="center"
            >
              <Grid item md={6}>
                <iframe
                  width="100%"
                  height="300px"
                  src="https://www.youtube.com/embed/9RxK4UUM9sU"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <Typography variant="body1" color="primary" paragraph>
                  GREAT je ostravská organizace pořádající galavečery ringových
                  sportů pro dobročinné účely. Koupí oblečení GREAT přispíváte
                  na podporu malého Františka, který se narodil v šestém měsíci
                  těhotenství, trpí dětskou mozkovou obrnou a je odkázán na
                  invalidní vozík, a pro kterého GREAT organizují galavečer v
                  Ostravě dne 2.4.2022. Všechny produkty značky GREAT jsou
                  zárukou kvality a jsou vyráběny v České Republice.
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Box
                  sx={{
                    minHeight: 600,
                    borderRadius: 0,
                    px: 5,
                    py: 7,
                    backgroundColor: "primary.dark",
                  }}
                >
                  <Typography
                    variant="h3"
                    align="center"
                    color="primary"
                    paragraph
                  >
                    Vybráno
                  </Typography>
                  <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 900 }}
                    color="primary"
                    paragraph
                  >
                    38 269,- Kč
                  </Typography>
                  <Typography
                    variant="h4"
                    align="center"
                    color="primary"
                    paragraph
                  >
                    z
                  </Typography>
                  <Typography
                    variant="h3"
                    align="center"
                    color="primary"
                    paragraph
                  >
                    250 000,- Kč
                  </Typography>
                  <LinearProgressWithLabel color="secondary" value={progress} />
                  <Button
                    size="large"
                    fullWidth
                    sx={{ bgcolor: "green", my: 2, borderRadius: 0 }}
                  >
                    Přispět
                  </Button>
                  <Typography variant="body2" color="primary" paragraph>
                    GREAT je ostravská organizace pořádající galavečery
                    ringových sportů pro dobročinné účely. Koupí oblečení GREAT
                    přispíváte na podporu malého Františka, který se narodil v
                    šestém měsíci těhotenství, trpí dětskou mozkovou obrnou a je
                    odkázán na invalidní vozík, a pro kterého GREAT organizují
                    galavečer v Ostravě dne 2.4.2022. Všechny produkty značky
                    GREAT jsou zárukou kvality a jsou vyráběny v České
                    Republice.
                  </Typography>
                </Box>
              </Grid>
            </Stack>
          </Container>
        </Box>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
