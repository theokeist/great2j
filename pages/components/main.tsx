import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Main({ title, children }: any) {
  return (
    <Container sx={{ px: 3, pb: 18, pt: 7 }}>
      <Typography
        component="h1"
        variant="h3"
        color="primary"
        sx={{
          fontWeight: 900,
        }}
        gutterBottom
      >
        {title}
      </Typography>
      {children}
    </Container>
  );
}
