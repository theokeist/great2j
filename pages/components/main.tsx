import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Main({
  title,
  subtitle,
  align = "start",
  children,
  gutterBottom = false,
}: any) {
  return (
    <Container sx={{ px: 3, pb: 18, pt: 8 }}>
      <Typography
        component="h1"
        variant="h3"
        color="primary"
        gutterBottom={gutterBottom}
        textAlign={align}
        sx={{
          fontWeight: 900,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          component="h1"
          variant="subtitle1"
          color="primary"
          textAlign={align}
          sx={{
            fontWeight: 500,
            fontSize: 36,
          }}
          gutterBottom
        >
          {subtitle}
        </Typography>
      )}
      {children}
    </Container>
  );
}
