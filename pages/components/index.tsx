import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function CopyrightFooter() {
  return (
    <Box
      sx={{
        bgcolor: "primary.dark",
        marginLeft: "auto",
        width: { xl: "calc(100% - 15vw)", xs: "100%" },
        p: 3,
      }}
      component="footer"
    >
      <Typography variant="body2" color="primary.light" align="center">
        {"Copyright © "}{" "}
        <Link color="inherit" href="https://www.instagram.com/great_2j/?hl=cs">
          Great by 2j
        </Link>
        {", designed by "}
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
  );
}
