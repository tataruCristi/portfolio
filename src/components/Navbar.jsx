import { useState } from "react";
import Typography from "@mui/material/Typography";
import { AppBar, IconButton, Toolbar, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DrawerNav from "./Drawer.jsx";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const showDrawer = useMediaQuery("(min-width:600px)");

  const classes = {
    navbar: {
      backgroundColor: "hsl(0, 0%, 98%)",
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
      color: "hsl(0, 0%, 20%)",
      "&:hover": {
        color: "hsl(0, 0%, 0%)",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "1rem",
      },
    },
    logo: {
      flexGrow: "1",
      color: "hsl(0, 0%, 0%)",
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
            <Link href="#home" underline="none">
              <Typography sx={classes.linkText} variant="h6">
                Home
              </Typography>
            </Link>
            <Link href="#experience" underline="none">
              <Typography sx={classes.linkText} variant="h6">
                Experience
              </Typography>
            </Link>
            <Link href="#projects" underline="none">
              <Typography sx={classes.linkText} variant="h6">
                Projects
              </Typography>
            </Link>
            <Link href="#contact" underline="none">
              <Typography sx={classes.linkText} variant="h6">
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
      </AppBar>
    </>
  );
};

export default Navbar;
