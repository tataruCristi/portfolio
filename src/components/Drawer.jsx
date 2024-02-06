import Drawer from "@mui/material/Drawer";
import { Box, Link } from "@mui/material";
import { DarkModeContext } from "../DarkModeContext";
import { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";

const DrawerNav = ({ open, setOpen }) => {
  const { darkMode } = useContext(DarkModeContext);

  const classes = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: darkMode ? "rgb(27, 29, 30)" : "hsl(0, 0%, 98%)",
    },
    links: {
      color: darkMode ? "rgb(200, 195, 188)" : "hsl(0, 0%, 20%)",
      fontSize: "2.5rem",
      fontWeight: "500",
      "&:hover": {
        fontWeight: "600",
      },
    },
  };

  const closeDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Drawer
      sx={classes.drawer}
      anchor="right"
      open={open}
      onClose={closeDrawer}
    >
      <Box sx={classes.container}>
        <ThemeSwitch />
        <Link
          href="#"
          underline="none"
          sx={classes.links}
          onClick={closeDrawer}
        >
          Home
        </Link>
        <Link
          href="#about"
          underline="none"
          sx={classes.links}
          onClick={closeDrawer}
        >
          About
        </Link>
        <Link
          href="#projects"
          underline="none"
          sx={classes.links}
          onClick={closeDrawer}
        >
          Projects
        </Link>
        <Link
          href="#contact"
          underline="none"
          sx={classes.links}
          onClick={closeDrawer}
        >
          Contact
        </Link>
      </Box>
    </Drawer>
  );
};

export default DrawerNav;
