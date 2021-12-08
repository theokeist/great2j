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
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import ShareIcon from "@mui/icons-material/Share";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useRouter } from "next/router";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

export const pages = [
  { name: "Eventy", link: "/events" },
  { name: "Bojovníci", link: "/fighters" },
  { name: "O nás", link: "/about" },
  { name: "E-shop", link: "/eshop" },
  { name: "Kontakt", link: "/contact" },
  { name: "Sponzoři & Spolupráce", link: "/event-partners" },
];

export const mobilePages = [
  { name: "Domů", link: "/" },
  { name: "Eventy", link: "/events" },
  { name: "Bojovníci", link: "/fighters" },
  { name: "O nás", link: "/about" },
  { name: "E-shop", link: "/eshop" },
  { name: "Kontakt", link: "/contact" },
  { name: "Sponzoři & Spolupráce", link: "/event-partners" },
];

const settings = [
  {
    name: "Instagram",
    icon: <InstagramIcon color="primary" />,
    link: "https://www.instagram.com/great_2j/?hl=cs",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon color="primary" />,
    link: "https://www.instagram.com/great_2j/?hl=cs",
  },
  {
    name: "YouTube",
    icon: <YouTubeIcon color="primary" />,
    link: "https://www.instagram.com/great_2j/?hl=cs",
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

  const isActive = (page: any) => {
    if (router?.pathname == page?.link) {
      return (
        <Typography textAlign="center" color="primary" sx={{ fontWeight: 900 }}>
          {page?.name}
        </Typography>
      );
    } else {
      return (
        <Typography textAlign="center" color="primary">
          {page?.name}
        </Typography>
      );
    }
  };

  const logoImage = () => {
    return (
      <Link href="/">
        <Image
          alt="great by 2j"
          src={logo}
          layout="fill"
          width={"100"}
          height={"40"}
          priority
        />
      </Link>
    );
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "black", py: 2 }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
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
                <Link key={index} href={page.link}>
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    {isActive(page)}
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <IconButton sx={{ px: 8, py: 5, display: { md: "none" } }}>
            {logoImage()}
          </IconButton>

          {pages.map((page, index) => (
            <Box key={index} sx={{ display: { xs: "none", md: "flex" } }}>
              <Link key={index} href={page?.link}>
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                  variant={
                    router?.pathname == page?.link ? "outlined" : undefined
                  }
                >
                  {page?.name}
                </Button>
              </Link>
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
              {settings.map((setting, index) => (
                <Link key={index} href={setting.link}>
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
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavigationMenu;
