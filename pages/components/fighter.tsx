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

export const fightersFotky = [
  {
    path: "/fighters/marekVanecek",
    name: "Marek Vaněček",
    facebook: "https://www.facebook.com/Marek.vanecekk",
    instagram: "https://instagram.com/marekvanecek",
    fighter: {
      gym: "BC Ostrava",
      vaha: "86kg",
      kategorie: "Box",
      rest: "70-30",
    },
  },
  {
    path: "/fighters/",
    name: "David Klíč",
    facebook: "https://www.facebook.com/Marek.vanecekk",
    instagram: "https://instagram.com/marekvanecek",
    fighter: {
      gym: "Berserkers Gym Blansko",
      vaha: "86kg",
      kategorie: "Box",
      rest: "",
    },
  },
  {
    path: "/fighters/martinPrazdny",
    name: "Martin Prázdný",
    facebook: "https://www.facebook.com/eemptys",
    instagram: "https://instagram.com/martin.emptys",
    fighter: {
      gym: "Fighting Club Ostrava",
      vaha: "82kg",
      kategorie: "Box",
      rest: "50-30",
    },
  },
  {
    path: "/fighters/",
    name: "Rostislav Kročil",
    facebook: "",
    instagram: "",
    fighter: {
      gym: "Boxing Gym Zlín",
      vaha: "82kg",
      kategorie: "",
      rest: "",
    },
  },
  {
    path: "/fighters/wernerHartmann",
    name: "Werner Hartmann",
    facebook: "https://www.facebook.com/werner.hartmann.86",
    instagram: "https://instagram.com/wehacko",
    website: "https://wernerhartmann.cz",
    fighter: {
      gym: "BAIL Vítkovice",
      vaha: "92kg",
      kategorie: "Box",
      rest: "12-7-1",
    },
  },
  {
    path: "/fighters/denisGamez",
    name: "Denis Gámez",
    facebook: "https://www.facebook.com/rezava.trubka",
    instagram: "",
    fighter: {
      gym: "SSK Vítkovice",
      vaha: "92kg",
      kategorie: "Box",
      rest: "65-25",
    },
  },
  {
    path: "/fighters/lizBezdekova",
    name: "Elizabeth Bezděková",
    facebook: "https://www.facebook.com/elizabethbezdekova3",
    instagram: "https://instagram.com/elizabethbezdek",
    fighter: {
      gym: "Jetsaam Gym Brno",
      vaha: "54kg",
      kategorie: "Muay Thai",
      rest: "",
    },
  },
  {
    path: "/fighters/jiriJuricka",
    name: "Jiří Juřička",
    facebook:
      "https://www.facebook.com/people/Ji%C5%99%C3%AD-Ju%C5%99i%C4%8Dka/100004740256410/",
    instagram: "",
    fighter: {
      gym: "JMFS Ostrava",
      vaha: "92kg",
      kategorie: "K1",
      rest: "K1 2-1, MMA 3-2, Box 1-1",
    },
  },
  {
    path: "/fighters/dominikGloser",
    name: "Dominik Gloser",
    facebook: "https://www.facebook.com/dominik.gloser.10",
    instagram: "https://instagram.com/glosic_19",
    fighter: {
      gym: "SSK Vítkovice",
      vaha: "75kg",
      kategorie: "Box",
      rest: "122-20",
    },
  },
  {
    path: "/fighters/",
    name: "Hubert Kaczmarek",
    facebook: "https://www.facebook.com/Marek.vanecekk",
    instagram: "https://instagram.com/hubercik_boxing",
    fighter: {
      gym: "PERSONA NON GRATA fight team",
      vaha: "75kg",
      kategorie: "Box",
      rest: "60-30",
    },
  },
  {
    path: "/fighters/honzaStrakos",
    name: "Jan Strakoš",
    facebook: "https://www.facebook.com/honzicek.strakos",
    instagram: "https://instagram.com/honza__strakos",
    fighter: {
      gym: "Pretorian Fight Club",
      vaha: "76kg",
      kategorie: "K1",
      rest: "3-1",
    },
  },
  {
    path: "/fighters/danielObracaj",
    name: "Daniel Obracaj",
    facebook: "",
    instagram: "https://instagram.com/obracajdanie",
    fighter: {
      gym: "Bear Paw Fighting Team Havířov",
      vaha: "76kg",
      kategorie: "",
      rest: "MMA 4-4, Box 5-5, K1 0-1",
    },
  },
  {
    path: "/fighters/nataliePolednikova",
    name: "Natálie Poledníková",
    facebook: "",
    instagram: "https://instagram.com/naty.polednik",
    fighter: {
      gym: "BC Ostrava",
      vaha: "66kg",
      kategorie: "",
      rest: "Box 33-17",
    },
  },
  {
    path: "/fighters/kristianPeczka",
    name: "Kristián Péczka",
    facebook: "https://www.facebook.com/kristian.peczka",
    instagram: "https://instagram.com/kristianpeczka",
    fighter: {
      gym: " X-Fight Hrabůvka",
      vaha: "92kg",
      kategorie: "Box",
      rest: "16-19",
    },
  },
  {
    path: "/fighters/patrikStefan",
    name: "Patrik Štefan",
    facebook: "https://www.facebook.com/patrik.stefan11",
    instagram: "https://instagram.com/patrikk_stefan",
    fighter: {
      gym: "BC Ostrava",
      vaha: "67kg",
      kategorie: "Box",
      rest: "19-6",
    },
  },
  {
    path: "/fighters/",
    name: "Tomáš Novotný",
    facebook: "https://www.facebook.com/tomas.novotny.7",
    instagram: "https://instagram.com/beast98tn",
    fighter: {
      gym: "Hi-Tech Boxing Olomouc",
      vaha: "92kg",
      kategorie: "Box",
      rest: "4-1",
    },
  },
  {
    path: "/fighters/",
    name: "Kim Amoussa",
    facebook: "https://www.facebook.com/kim.amoussa",
    instagram: "https://instagram.com/kimamoussa",
    fighter: {
      gym: "Hi-Tech Boxing Olomouc",
      vaha: "67kg",
      kategorie: "Box",
      rest: "5-0-1",
    },
  },
  {
    path: "/fighters/",
    name: "Josef Pekárek",
    facebook: "https://www.facebook.com/josef.pekarek.3",
    instagram: "https://instagram.com/pekarekjosef",
    fighter: {
      gym: "SSK Vítkovice",
      vaha: "92kg",
      kategorie: "Box",
      rest: "100-50",
    },
  },
  {
    path: "/fighters/",
    name: "Jaroslav Kubíček",
    facebook: "https://www.facebook.com/boxhavirovzs",
    instagram: "https://instagram.com/boxing_havirov_jarda_kubicek",
    fighter: {
      gym: "Boxing Havířov",
      vaha: "92kg",
      kategorie: "Box",
      rest: "Olympijský Box 30-20, Profi Box 1-2",
    },
  },
  {
    path: "/fighters/marekBiela",
    name: "Marek Biela",
    facebook: "https://www.facebook.com/marek.s.biela",
    instagram: "https://instagram.com/whitemarek",
    fighter: {
      gym: "BC Ostrava",
      vaha: "82kg",
      kategorie: "Box",
      rest: "6-2",
    },
  },
  {
    path: "/fighters/",
    name: "Jakub Holec",
    facebook: "",
    instagram: "https://instagram.com/houbesholec",
    fighter: {
      gym: "Spartakus Vsetín",
      vaha: "82kg",
      kategorie: "Box",
      rest: "6-2",
    },
  },
  {
    path: "/fighters/jiriMravec",
    name: "Jiří Mravec",
    facebook: "https://www.facebook.com/moris.yankees",
    instagram: "https://instagram.com/mravi13",
    fighter: {
      gym: "Fighting Club Ostrava",
      vaha: "86kg",
      kategorie: "MMA",
      rest: "0-1",
    },
  },

  {
    path: "/fighters/",
    name: "Michal Vavřík",
    facebook: "",
    instagram: "https://instagram.com/mihajel.v",
    fighter: {
      gym: "Lumberjack Gym Bílovec",
      vaha: "86kg",
      kategorie: "Box",
      rest: "1-1",
    },
  },
  {
    path: "/fighters/petrValicek",
    name: "Petr Valíček",
    facebook: "https://www.facebook.com/petr.valicek.14",
    instagram: "https://instagram.com/petr_valicek",
    fighter: {
      gym: "GREAT Gym",
      vaha: "63,5kg",
      kategorie: "Box",
      rest: "3-5",
    },
  },
  {
    path: "/fighters/petrNavratil",
    name: "Petr Navrátil",
    facebook: "https://www.facebook.com/petr.navratil.161",
    instagram: "https://instagram.com/navratillpetr",
    fighter: {
      gym: "X-Fight Hrabůvka",
      vaha: "60kg",
      kategorie: "Box",
      rest: "7-8",
    },
  },
  {
    path: "/fighters/robertPrazdny",
    name: "Robert Prázdný",
    facebook: "https://www.facebook.com/robert.toth.1213",
    instagram: "https://instagram.com/rob.empty",
    fighter: {
      gym: "Fighting Club Ostrava",
      vaha: "69kg",
      kategorie: "",
      rest: "K1 0-1, MMA 0-2",
    },
  },

  {
    path: "/fighters/danielBernold",
    name: "Daniel Bernold",
    facebook: "https://www.facebook.com/daniel.bernold.90",
    instagram: "https://instagram.com/d_bernold",
    fighter: {
      gym: "HAMR Gym Ostrava",
      vaha: "69kg",
      kategorie: "K1",
      rest: "1-0",
    },
  },
  {
    path: "/fighters/maxPlachetka",
    name: "Max Plachetka",
    facebook: "",
    instagram: "https://instagram.com/plachetka_bubes",
    fighter: {
      gym: "BC Ostrava",
      vaha: "46kg",
      kategorie: "Box",
      rest: "26-7-7",
    },
  },
  {
    path: "/fighters/vojtaBachorik",
    name: "Vojtěch Bachořík",
    facebook: "https://www.facebook.com/somcarovny.bachor",
    instagram: "https://instagram.com/bachorik_",
    fighter: {
      gym: "HAMR Gym Ostrava",
      vaha: "66kg",
      kategorie: "K1",
      rest: "1-2",
    },
  },

  {
    path: "/fighters/",
    name: "Jakub Matuška",
    facebook: "",
    instagram: "https://instagram.com/kubbaaaa_",
    fighter: {
      gym: "Fighting Club Ostrava",
      vaha: "66kg",
      kategorie: "K1",
      rest: "0-1",
    },
  },
  {
    path: "/fighters/denisDerkac",
    name: "Denis Derkáč",
    facebook: "https://www.facebook.com/denis.derkac",
    instagram: "https://instagram.com/deerkyyy",
    fighter: {
      gym: "GREAT Gym",
      vaha: "82kg",
      kategorie: "Box",
      rest: "0-0",
    },
  },

  {
    path: "/fighters/pavelSigut",
    name: "Pavel Šigut",
    facebook: "https://www.facebook.com/diheljepica",
    instagram: "https://instagram.com/pavel_sigut",
    fighter: {
      gym: "Fighting Club Ostrava",
      vaha: "75kg",
      kategorie: "Box",
      rest: "0-0",
    },
  },
  {
    path: "/fighters/frankoLalik",
    name: "Franko Lálik",
    facebook: "",
    instagram: "",
    fighter: {
      gym: "Jetsaam Gym Brno",
      vaha: "72kg",
      kategorie: "Box",
      rest: "2-1",
    },
  },
  {
    path: "/fighters/",
    name: "Marek Kellner",
    facebook: "",
    instagram: "https://instagram.com/mvvxx_99",
    fighter: {
      gym: "TJ Sokol Křemže",
      vaha: "71kg",
      kategorie: "K1",
      rest: "1-1",
    },
  },
  {
    path: "/fighters/",
    name: "Liliana Kmentová",
    facebook: "https://www.facebook.com/Marek.vanecekk",
    instagram: "https://instagram.com/marekvanecek",
    fighter: {
      gym: "Fighting Club Ostrava",
      vaha: "57kg",
      kategorie: "Box",
      rest: "1-1-1",
    },
  },
  {
    path: "/fighters/",
    name: "Mirek Nykl",
    facebook: "",
    instagram: "",
    fighter: {
      gym: "Jetsaam Gym Brno",
      vaha: "81kg",
      kategorie: "Box",
      rest: "0-0",
    },
  },
  {
    path: "/fighters/",
    name: "Dorian Kropog",
    facebook: "",
    instagram: "",
    fighter: {
      gym: "Spider Olomouc",
      vaha: "46kg",
      kategorie: "Box",
      rest: "",
    },
  },
  {
    path: "/fighters/gabrielKosican",
    name: "Gabriel Kosičan",
    facebook: "",
    instagram: "",
    fighter: {
      gym: "Jetsaam Gym Brno",
      vaha: "75kg",
      kategorie: "Box",
      rest: "0-0",
    },
  },
  {
    path: "/fighters/",
    name: "David Gábor",
    facebook: "",
    instagram: "",
    fighter: {
      gym: "Hi-Tech Boxing Olomouc",
      vaha: "",
      kategorie: "Box",
      rest: "",
    },
  },
  {
    path: "/fighters/",
    name: "Petr Martínek",
    facebook: "",
    instagram: "",
    fighter: {
      gym: "Spider Olomouc",
      vaha: "",
      kategorie: "Box",
      rest: "",
    },
  },
];

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
  const [hover, setHover] = React.useState(false);

  return (
    <Stack
      sx={{ py: 3 }}
      direction={matches ? "row" : "row"}
      spacing={4}
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
          src={
            !hover && avatar ? avatar + "/normal.webp" : avatar + "/hover.webp"
          }
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
          {instagramLink && (
            <Link href={instagramLink}>
              <InstagramIcon color="primary" sx={{ fontSize: 24 }} />
            </Link>
          )}
          {facebookLink && (
            <Link href={facebookLink}>
              <FacebookIcon
                color="primary"
                sx={matches ? { fontSize: 24, mt: -0.5 } : { fontSize: 24 }}
              />
            </Link>
          )}
          {websiteLink && (
            <Link href={websiteLink}>
              <LanguageIcon
                color="primary"
                sx={matches ? { fontSize: 24, mt: -0.5 } : { fontSize: 24 }}
              />
            </Link>
          )}
        </Stack>
      </Stack>

      <Grid container>
        <Grid item>
          <Typography
            variant="h1"
            color="primary"
            sx={{ fontWeight: 400, fontSize: 22, letterSpacing: 2 }}
            paragraph
          >
            {avatarAlt}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 300, fontSize: 22, letterSpacing: 2 }}
            paragraph
          >
            za {fighter?.gym}
          </Typography>
          <Typography
            variant="h6"
            color="primary"
            sx={{ fontWeight: 200, fontSize: 22, wordSpacing: 2 }}
          >
            <Typography variant="body2">
              <li>{fighter?.vaha}</li>
              <li>{fighter?.kategorie}</li>
              <li>{fighter?.rest}</li>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
