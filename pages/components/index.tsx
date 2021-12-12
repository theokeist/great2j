import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";

const theme = createTheme({
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

export default function CopyrightFooter() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "primary.main", p: 3 }} component="footer">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © Great by 2j, designed by "}
          <Link
            color="inherit"
            href="https://www.instagram.com/martin0rszulik/?hl=cs"
          >
            martin0rszulik
          </Link>
          {", "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
