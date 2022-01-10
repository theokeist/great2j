import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import Avatar from "@mui/material/Avatar";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function Fighter({
  avatar,
  avatarAlt,
  fighter,
  instagramLink,
  facebookLink,
  websiteLink,
}: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [hover, setHover] = React.useState(false);

  return (
    <Stack
      sx={{ py: 4 }}
      direction={matches ? "row" : "column"}
      spacing={3}
      justifyContent="center"
      alignItems={matches ? "flex-start" : "center"}
      onMouseOver={() => {
        if (avatar !== "/fighters/") {
          setHover((old) => !old);
        }
      }}
      onMouseOut={() => {
        if (avatar !== "/fighters/") {
          setHover((old) => !old);
        }
      }}
    >
      <Avatar
        alt={avatarAlt}
        sx={matches ? { width: 156, height: 156 } : { width: 176, height: 176 }}
        imgProps={{
          style: { objectPosition: "50% 10%" },
        }}
        src={!hover && avatar ? avatar + "/normal.jpg" : avatar + "/hover.jpg"}
      >
        {avatarAlt?.split(" ")?.[0][0]}
        {avatarAlt?.split(" ")?.[1][0]}
      </Avatar>
      <Stack
        direction={matches ? "column" : "row"}
        spacing={2.6}
        justifyContent="space-between"
      >
        {instagramLink && (
          <Link href={instagramLink}>
            <InstagramIcon color="primary" sx={{ fontSize: 29 }} />
          </Link>
        )}
        {facebookLink && (
          <Link href={facebookLink}>
            <FacebookIcon
              color="primary"
              sx={matches ? { fontSize: 29, mt: -0.5 } : { fontSize: 30 }}
            />
          </Link>
        )}
        {websiteLink && (
          <Link href={websiteLink}>
            <LanguageIcon
              color="primary"
              sx={matches ? { fontSize: 29, mt: -0.5 } : { fontSize: 30 }}
            />
          </Link>
        )}
      </Stack>

      <Grid container>
        <Grid item>
          <Typography
            variant="h1"
            color="primary"
            sx={{ fontWeight: 400, fontSize: 28, letterSpacing: 2 }}
            paragraph
          >
            {avatarAlt}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 300, fontSize: 24, letterSpacing: 2 }}
            paragraph
          >
            Kategorie:
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 200, fontSize: 20, wordSpacing: 2 }}
            paragraph
          >
            <ul>
              <li>{fighter?.vaha}</li>
              <li>{fighter?.kategorie}</li>
              <li>{fighter?.rest}</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
