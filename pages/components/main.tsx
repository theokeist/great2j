import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Main({
  title,
  subtitle,
  align = "start",
  background = "initial",
  children,
  gutterBottom = false,
}: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Grid sx={{ backgroundColor: background, p: 0, pb: 18 }}>
      {title && (
        <Grid
          sx={
            matches
              ? { backgroundColor: background, pt: 6, pb: 6 }
              : { backgroundColor: background, pt: 5, pb: 5 }
          }
        >
          <Typography
            component="h1"
            variant="h3"
            color="primary"
            gutterBottom={gutterBottom}
            textAlign={align}
            sx={
              matches
                ? {
                    fontWeight: 700,
                    letterSpacing: 10,
                    wordSpacing: 10,
                    fontSize: 62,
                  }
                : {
                    fontWeight: 700,
                    letterSpacing: 4,
                    wordSpacing: 1,
                    fontSize: 24,
                  }
            }
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              component="h1"
              variant="subtitle1"
              color="primary"
              textAlign={align}
              sx={
                matches
                  ? {
                      fontWeight: 300,
                      fontSize: 50,
                      letterSpacing: 4,
                      marginBottom: 0,
                    }
                  : {
                      fontWeight: 300,
                      fontSize: 20,
                      letterSpacing: 2,
                      marginBottom: 0,
                    }
              }
              gutterBottom
            >
              {subtitle}
            </Typography>
          )}
        </Grid>
      )}
      {children}
    </Grid>
  );
}
