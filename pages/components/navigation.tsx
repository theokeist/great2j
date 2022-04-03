import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Image from "next/image";

import logo from "../../public/logo.jpg";
import logoLight from "../../public/logo-light.jpg";

import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useRouter } from "next/router";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { CustomThemeContext } from "./theme/greatThemeProvider";
import { Divider } from "@mui/material";

export const pages = [
  { name: "Eventy", link: "/events" },
  { name: "Zápasníci", link: "/fighters" },
  { name: "Partneři", link: "/event-partners" },
  { name: "E-shop", redirect: "https://bit.ly/GreatShopCZ" },
  { name: "O nás", link: "/about" },
  { name: "Kontakt", link: "/contact" },
];

export const mobilePages = [
  { name: "Domů", link: "/" },
  { name: "Eventy", link: "/events" },
  { name: "Zápasníci", link: "/fighters" },
  { name: "Partneři", link: "/event-partners" },
  { name: "E-shop", redirect: "https://bit.ly/GreatShopCZ" },
  { name: "O nás", link: "/about" },
  { name: "Kontakt", link: "/contact" },
];

const social = [
  {
    name: "Instagram",
    icon: <InstagramIcon color="primary" />,
    link: "https://www.instagram.com/great_2j/?hl=cs",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon color="primary" />,
    link: "https://www.youtube.com/channel/UCPGv4E2KiH8degq2RigLUoA",
  },
];

export const NavigationMenu = () => {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [checked, setChecked] = React.useState(true);

  const { currentTheme, setTheme } = React.useContext(CustomThemeContext);
  const isNormal = Boolean(currentTheme === "themeDark");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isNormal) {
      //@ts-ignore
      setTheme("themeLight");
      setChecked(false);
    } else {
      //@ts-ignore
      setTheme("themeDark");
      setChecked(true);
    }
  };

  const isActive = (page: any) => {
    if (router?.pathname == page?.link) {
      return (
        <Typography
          textAlign="center"
          color="primary"
          sx={{ fontSize: 20, fontWeight: 900 }}
        >
          {page?.name}
        </Typography>
      );
    } else {
      return (
        <Typography textAlign="center" color="primary" sx={{ fontSize: 20 }}>
          {page?.name}
        </Typography>
      );
    }
  };

  const logoImage = () => {
    return (
      <Link href="/">
        <Image
          alt="GREAT"
          src={isNormal ? logo : logoLight}
          layout="fill"
          priority
          objectFit="cover"
        />
      </Link>
    );
  };

  return (
    <AppBar
      sx={{
        position: { xl: "fixed", xs: "static" },
        left: { xl: 0, sm: "none" },
        flexDirection: { xl: "column", sm: "row" },
        flexWrap: "wrap",
        width: { xl: "15vw", lg: "100%", sm: "100%" },
        height: { xl: "100vh", lg: "100%", sm: "100%" },
        bgcolor: "background.paper",
        py: 1.5,
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            height: { xl: "100vh", lg: "100%", sm: "100%" },
            justifyContent: "space-evenly",
            alignItems: "center",
            flexDirection: { xl: "column", sm: "row" },
          }}
        >
          <IconButton
            sx={{ px: 13, py: 9, display: { xs: "none", md: "flex" } }}
          >
            {logoImage()}
          </IconButton>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {mobilePages.map((page, index) => (
                <Link
                  key={index}
                  href={page?.link ? page.link : page.redirect}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    {isActive(page)}
                  </MenuItem>
                </Link>
              ))}
              <hr style={{ width: "100%" }} />
              <MenuItem>
                <FormGroup sx={{ py: 1 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        size="small"
                        checked={checked}
                        color="secondary"
                        onChange={handleChange}
                      />
                    }
                    label={checked ? "tmavý motiv" : "světlý motiv"}
                    sx={{ color: "secondary.main" }}
                  />
                </FormGroup>
              </MenuItem>
            </Menu>
          </Box>

          <IconButton sx={{ px: 8, py: 5, display: { md: "none" } }}>
            {logoImage()}
          </IconButton>

          {pages.map((page, index) => (
            <Box
              key={index}
              sx={{ width: "100%", display: { xs: "none", md: "flex" } }}
            >
              {page && (
                <Link
                  key={index}
                  href={page?.link ? page.link : page.redirect}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      py: 2,
                      px: 3,
                      color: "primary",
                      display: "block",
                      borderRadius: 0,
                      letterSpacing: 3,
                      fontWeight: 800,
                      fontSize: 16,
                      lineHeight: "initial",
                    }}
                    variant={
                      router?.pathname == page?.link ? "outlined" : undefined
                    }
                    fullWidth
                  >
                    {page?.name}
                  </Button>
                </Link>
              )}
            </Box>
          ))}
          <Box sx={{ flexGrow: 0, display: { md: "none" } }}>
            <IconButton
              onClick={handleOpenUserMenu}
              color="primary"
              size="large"
            >
              <ShareIcon />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {social.map((setting, index) => (
                <Link
                  key={index}
                  href={setting.link}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    color="primary"
                  >
                    <ListItemIcon>{setting.icon}</ListItemIcon>
                    <ListItemText>{setting.name}</ListItemText>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <FormGroup sx={{ padding: 2, display: { xs: "none", xl: "block" } }}>
            <hr style={{ width: "100%", backgroundColor: "red" }} />
            <FormControlLabel
              sx={{ color: "secondary.main" }}
              control={
                <Switch
                  color="secondary"
                  checked={checked}
                  onChange={handleChange}
                />
              }
              label={checked ? "tmavý motiv" : "světlý motiv"}
            />
          </FormGroup>
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavigationMenu;
