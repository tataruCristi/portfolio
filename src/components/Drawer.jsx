import Drawer from "@mui/material/Drawer";
import { Box, Link } from "@mui/material";

const DrawerNav = ({ open, setOpen }) => {
  const classes = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
    },
    links: {
      color: "hsl(0, 0%, 20%)",
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
        <Link
          href="#home"
          underline="none"
          sx={classes.links}
          onClick={closeDrawer}
        >
          Home
        </Link>
        <Link
          href="#experience"
          underline="none"
          sx={classes.links}
          onClick={closeDrawer}
        >
          Experience
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