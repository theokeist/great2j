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
import { Paper } from "@mui/material";

export default function Fighter({
  avatar,
  avatarAlt,
  fighter,
  instagramLink,
  facebookLink,
  websiteLink,
}: any) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  //const [hover, setHover] = React.useState(false);

  return (
    <Paper elevation={12} sx={{ width: "100%", px: 3, borderRadius: 4 }}>
      <Stack
        sx={{ py: 3 }}
        direction={matches ? "row" : "row"}
        spacing={3.5}
        justifyContent="center"
        alignItems={"flex-start"}
        // onMouseOver={() => {
        //   if (avatar !== "/fighters/") {
        //     setHover((old) => !old);
        //   }
        // }}
        // onMouseOut={() => {
        //   if (avatar !== "/fighters/") {
        //     setHover((old) => !old);
        //   }
        // }}
      >
        <Stack
          direction={matches ? "column" : "column"}
          spacing={2.6}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Avatar
            alt={avatarAlt}
            sx={
              matchesLg
                ? { width: 156, height: 156 }
                : matches
                ? { width: 176, height: 176 }
                : { width: 100, height: 100 }
            }
            imgProps={{
              style: { objectPosition: "50% 10%" },
            }}
            src={avatar}
          >
            {avatarAlt?.split(" ")?.[0][0]}
            {avatarAlt?.split(" ")?.[1][0]}
          </Avatar>
          <Stack
            direction={matches ? "row" : "row"}
            spacing={2}
            justifyContent="space-between"
            alignItems="baseline"
            alignSelf="center"
          >
            {instagramLink && instagramLink !== "NULL" && (
              <Link href={instagramLink}>
                <InstagramIcon color="primary" sx={{ fontSize: 24 }} />
              </Link>
            )}
            {facebookLink && facebookLink !== "NULL" && (
              <Link href={facebookLink}>
                <FacebookIcon
                  color="primary"
                  sx={matches ? { fontSize: 24, mt: -0.5 } : { fontSize: 24 }}
                />
              </Link>
            )}
            {websiteLink && websiteLink !== "NULL" && (
              <Link href={websiteLink}>
                <LanguageIcon
                  color="primary"
                  sx={matches ? { fontSize: 24, mt: -0.5 } : { fontSize: 24 }}
                />
              </Link>
            )}
          </Stack>
        </Stack>

        <Grid item container>
          <Grid item>
            <Typography
              variant="h1"
              color="primary"
              sx={{ fontWeight: 600, fontSize: 22, letterSpacing: 2.5 }}
            >
              {fighter?.jmeno || avatarAlt}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 300, fontSize: 18, letterSpacing: 1.5 }}
              paragraph
            >
              za {fighter?.gym}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              sx={{ fontWeight: 200, fontSize: 22, wordSpacing: 2 }}
            >
              <Typography variant="body1">
                {fighter?.vaha && <li>{fighter?.vaha} kg</li>}
                {fighter?.kategorie && <li>{fighter?.kategorie}</li>}

                {fighter?.skore &&
                  fighter?.skore?.split(",").map((skore: any, index: any) => {
                    return <li key={index}>{skore}</li>;
                  })}
              </Typography>
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Paper>
  );
}
