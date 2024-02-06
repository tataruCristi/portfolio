import { Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import Social from "./Social";
import { DarkModeContext } from "../DarkModeContext";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  const classes = {
    container: {
      backgroundColor: darkMode ? "rgb(24, 26, 27)" : "#fff", //"#161618"
      padding: "1rem 0",
    },
    title: {
      textAlign: "center",
      color: darkMode ? "rgb(232, 230, 227)" : "hsl(0, 0%, 0%)", //#d6d6d6
      fontWeight: "600",
      fontFamily: "Satisfy, cursive",
    },
    text: {
      textAlign: "center",
    },
  };

  return (
    <Container sx={classes.container}>
      <Typography sx={classes.title} variant="h5">
        Tataru Cristi
      </Typography>
      <Social type="horizontal" />
      <Typography sx={classes.text} variant="subtitle2">
        &copy; TataruCristi. All rights reserved
      </Typography>
    </Container>
  );
};

export default Footer;
