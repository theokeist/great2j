import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavigationMenu from "./routes";
import CopyrightFooter from "./components";
import header from "../public/about.webp";
import Main from "./components/main";
import Banner from "./components/banner";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CallIcon from "@mui/icons-material/Call";
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

export default function Contact() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <ThemeProvider theme={themes}>
      <CssBaseline />
      <NavigationMenu />
      <Banner
        align="center"
        title="Kontakt"
        header={"./about.webp"}
        objectPosition="0 5%"
      />

      <Main>
        <Grid
          sx={
            matchesLg
              ? { px: 36, py: 7 }
              : matches
              ? { px: 6, py: 6 }
              : { px: 2, py: 6 }
          }
        >
          <Typography
            variant="h5"
            color="primary"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <CallIcon color="primary" sx={{ mr: 1 }} />
            739 495 153
          </Typography>
          <Typography
            variant="h5"
            color="primary"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <EmailIcon color="primary" sx={{ mr: 1 }} />
            info@great2j.cz
          </Typography>
          <hr></hr>
          <Typography
            variant="h6"
            color="primary"
            sx={{ display: "flex", alignItems: "center", mt: 2 }}
          >
            <InstagramIcon color="primary" sx={{ mr: 1 }} />
            <a
              style={{ color: "red", textDecoration: "none" }}
              href="https://www.instagram.com/great_2j/?hl=cs"
            >
              great_2j
            </a>
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <ContactMailIcon color="primary" sx={{ mr: 1 }} />
            spoluprace@great2j.cz
          </Typography>
          <hr></hr>
          <Typography variant="body2" color="primary" sx={{ mt: 5 }}>
            <strong>Název organizace:</strong> GREAT by 2j
          </Typography>
          <Typography variant="body2" color="primary">
            <strong>IČ:</strong> 05956731
          </Typography>
        </Grid>
      </Main>
      <CopyrightFooter />
    </ThemeProvider>
  );
}
