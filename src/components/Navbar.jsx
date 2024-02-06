import { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import { AppBar, IconButton, Toolbar, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DrawerNav from "./Drawer.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import ThemeSwitch from "./ThemeSwitch.jsx";
import { DarkModeContext } from "../DarkModeContext.js";

const Navbar = ({ activeLink }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  const theme = useTheme();
  const showDrawer = useMediaQuery("(min-width:600px)");

  const classes = {
    navbar: {
      backgroundColor: darkMode ? "rgb(24, 26, 27)" : "#fff",
      boxShadow: "none",
      height: "100px",
      display: "flex",
      justifyContent: "center",
    },
    toolbar: {
      marginRight: "15%",
      marginLeft: "15%",
      display: "flex",
      justifyContent: "center",
    },
    links: {
      display: {
        xs: "none",
        sm: "flex",
      },
    },
    linkText: {
      margin: "2rem",
      fontFamily: "inherit",
      color: darkMode ? "rgb(200, 195, 188)" : "hsl(0, 0%, 20%)",
      "&:hover": {
        color: darkMode ? "rgb(232, 230, 227)" : "hsl(0, 0%, 0%)",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
    activeLink: {
      color: darkMode ? "rgb(232, 230, 227)" : "hsl(0, 0%, 0%)",
      fontWeight: "600",
    },
    logo: {
      flexGrow: "1",
      color: darkMode ? "rgb(232, 230, 227)" : "hsl(0, 0%, 0%)",
      fontWeight: "600",
      fontFamily: "Satisfy, cursive",
      display: {
        xs: "block",
        sm: "none",
        md: "block",
      },
    },
    iconButton: {
      color: "hsl(0, 0%, 0%)",
      display: {
        sm: "none",
      },
    },
  };

  return (
    <>
      <AppBar sx={classes.navbar} position="sticky">
        <Toolbar sx={classes.toolbar}>
          <Typography sx={classes.logo} variant="h5">
            Tataru
          </Typography>

          <Box sx={classes.links}>
            <Link href="#" underline="none">
              <Typography
                sx={
                  activeLink.home
                    ? { ...classes.linkText, ...classes.activeLink }
                    : classes.linkText
                }
                variant="h6"
              >
                Home
              </Typography>
            </Link>
            <Link href="#about" underline="none">
              <Typography
                sx={
                  activeLink.about
                    ? { ...classes.linkText, ...classes.activeLink }
                    : classes.linkText
                }
                variant="h6"
              >
                About
              </Typography>
            </Link>
            <Link href="#projects" underline="none">
              <Typography
                sx={
                  activeLink.projects
                    ? { ...classes.linkText, ...classes.activeLink }
                    : classes.linkText
                }
                variant="h6"
              >
                Projects
              </Typography>
            </Link>
            <Link href="#contact" underline="none">
              <Typography
                sx={
                  activeLink.contact
                    ? { ...classes.linkText, ...classes.activeLink }
                    : classes.linkText
                }
                variant="h6"
              >
                Contact
              </Typography>
            </Link>
          </Box>
          <IconButton
            onClick={() => setOpenDrawer(true)}
            sx={classes.iconButton}
          >
            <MenuIcon
              sx={{
                width: "40px",
                height: "40px",
              }}
            />
          </IconButton>
        </Toolbar>
        {!showDrawer && <DrawerNav open={openDrawer} setOpen={setOpenDrawer} />}
        {showDrawer && <ThemeSwitch />}
      </AppBar>
    </>
  );
};

export default Navbar;
