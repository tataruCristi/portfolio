import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { DarkModeContext } from "../DarkModeContext";
import { useContext } from "react";

const Social = ({ type }) => {
  const { darkMode } = useContext(DarkModeContext);
  const homeStyle = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    link: {
      color: darkMode ? "rgb(200, 195, 188)" : "hsl(0, 0%, 20%)",
      marginTop: "1rem",
      "&:hover": {
        color: darkMode ? "#eee" : "hsl(0, 0%, 0%)",
      },
    },
  };

  const footerStyle = {
    container: {
      display: "flex",
      justifyContent: "center",
    },
    link: {
      color: darkMode ? "#d6d6d6" : "hsl(0, 0%, 20%)",
      margin: "1rem",
      "&:hover": {
        color: darkMode ? "#fff" : "hsl(0, 0%, 0%)",
      },
    },
  };

  const classes = type !== "horizontal" ? homeStyle : footerStyle;

  return (
    <Box sx={classes.container}>
      <Link
        sx={classes.link}
        href="https://www.linkedin.com/in/tataru-cristi/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon />
      </Link>
      <Link
        sx={classes.link}
        href="https://github.com/tataruCristi"
        target="_blank"
        rel="noreferrer"
      >
        <GitHubIcon />
      </Link>
      <Link
        sx={classes.link}
        href="https://www.instagram.com/tatarucristi5/"
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon />
      </Link>
    </Box>
  );
};

export default Social;
