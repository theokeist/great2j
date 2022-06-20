import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useTheme, createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import NavigationMenu from "./components/navigation";
import CopyrightFooter from "./components";
import Main from "./components/main";
//import { fightersFotky } from "./api/fighters";
import Fighter from "./components/fighter";
import Banner from "./components/banner";
import useMediaQuery from "@mui/material/useMediaQuery";

import header from "../public/fighters.webp";

import supabase from "./api";

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

export default function Fighters() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));

  const [todos, setTodos] = React.useState<any>([]);

  const fetchTodos = async () => {
    const { data } = await supabase.from("fighters").select("*").order("id");
    setTodos(data);
  };

  React.useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <NavigationMenu />
      <Banner
        title="Ranking list"
        align="center"
        gutterBottom
        header={"./fighters.webp"}
      />

      <Main>
        <Grid
          container
          spacing={4}
          sx={
            matchesLg
              ? {
                  width: { xl: "calc(100% - 15vw)", sm: "100%" },
                  marginLeft: "auto",
                  px: 10,
                  py: 7,
                }
              : matches
              ? { px: 6, py: 7 }
              : { px: 1, py: 1 }
          }
        >
          {todos?.map((foto: any, index: any) => {
            return (
              <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
                <Fighter
                  key={index}
                  avatar={foto?.fotka_url}
                  avatarAlt={foto?.jmeno}
                  fighter={foto}
                  facebookLink={foto?.facebook}
                  instagramLink={foto?.instagram}
                  websiteLink={foto?.web}
                />
              </Grid>
            );
          })}
          {/* {fightersFotky?.map((foto, index) => {
            return (
              <Grid key={index} item sm={12} md={6} lg={4}>
                <Fighter
                  key={index}
                  avatar={foto?.path}
                  avatarAlt={foto?.name}
                  fighter={foto?.fighter}
                  facebookLink={foto?.facebook}
                  instagramLink={foto?.instagram}
                  websiteLink={foto?.website}
                />
              </Grid>
            );
          })} */}
        </Grid>
      </Main>
      <CopyrightFooter />
    </>
  );
}
