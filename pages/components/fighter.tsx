import * as React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import Avatar from "@mui/material/Avatar";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function Fighter({
  avatar,
  avatarAlt,
  fighter,
  instagramLink,
  facebookLink,
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
      alignItems="center"
      onMouseOver={() => setHover((old) => !old)}
      onMouseOut={() => setHover(false)}
    >
      <Avatar alt={avatarAlt} sx={{ width: 172, height: 172 }}>
        <Image
          alt={avatarAlt}
          src={
            !hover && avatar ? avatar + "/normal.jpg" : avatar + "/hover.jpg"
          }
          layout="fill"
          objectFit="cover"
          objectPosition="center 5%"
          priority
        />
      </Avatar>
      <Stack
        direction={matches ? "column" : "row"}
        spacing={4}
        justifyContent="space-between"
      >
        {!instagramLink && (
          <Link href={instagramLink}>
            <InstagramIcon color="primary" sx={{ fontSize: 30 }} />
          </Link>
        )}
        {!facebookLink && (
          <Link href={facebookLink}>
            <FacebookIcon color="primary" sx={{ fontSize: 30 }} />
          </Link>
        )}
      </Stack>

      <Typography variant="body1" color="primary" paragraph>
        <Typography
          variant="h5"
          color="primary"
          sx={{ fontWeight: 900 }}
          paragraph
        >
          {avatarAlt}
        </Typography>
        Something short and leading about the collection below—its contents, the
        creator, etc. Make it short and sweet, but not too short so eading about
        the collection below—its contents, the creator, etc. Make it short and
        sw eading about the collection below—its contents, the creator, etc.
        Make it short and sw
        <Typography variant="h6" color="primary" paragraph>
          Kategorie:
        </Typography>
        <ul>
          <li>{fighter?.vaha}</li>
          <li>{fighter?.kategorie}</li>
          <li>{fighter?.rest}</li>
        </ul>
      </Typography>
    </Stack>
  );
}
