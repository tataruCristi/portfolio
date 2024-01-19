import { Container, Typography } from "@mui/material";
import React from "react";
import Social from "./Social/Social";

const Footer = () => {
  const classes = {
    container: {
      backgroundColor: "#fff",
      padding: "1rem 0",
    },
    title: {
      textAlign: "center",
      color: "hsl(0, 0%, 0%)",
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
