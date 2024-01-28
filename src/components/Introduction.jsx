import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Picture from "../assets/intro.jpg";
import DownloadIcon from "@mui/icons-material/Download";

const Introduction = () => {
  const classes = {
    image: {
      background: `url(${Picture})`,
      height: {
        xs: "200px",
        sm: "230px",
        md: "280px",
        lg: "350px",
      },
      width: {
        xs: "200px",
        sm: "230px",
        md: "280px",
        lg: "350px",
      },
      backgroundSize: "cover",
      margin: "auto",
      borderRadius: "1rem",
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    description: {
      fontFamily: "inherit",
      fontSize: {
        xs: "0.9rem",
        sm: "1rem",
        md: "1.1rem",
      },
      padding: {
        xs: "2rem 3rem",
        sm: "0 1.5rem",
      },
    },
    button: {
      backgroundColor: "hsl(0, 0%, 20%)",
      width: "220px",
      color: "#fff",
      padding: {
        xs: "0.75rem 1rem",
        sm: "1.25rem 2rem",
      },
      borderRadius: "1rem",
      margin: {
        xs: "2rem",
        sm: "3rem",
      },
      fontWeight: "500",
      "&:hover": {
        backgroundColor: "hsl(0, 0%, 0%)",
      },
      fontFamily: "inherit",
    },
    buttonIcon: {
      marginLeft: "0.5rem",
    },
  };
  return (
    <Grid container spacing={{ xs: 0, sm: 2 }}>
      <Grid item={true} xs={12} sm={6}>
        <Box sx={classes.image} />
      </Grid>
      <Grid item={true} xs={12} sm={6} sx={classes.grid}>
        <Typography sx={classes.description}>
          After finishing studies I started to work at Continental as a System
          Test Enginner. After a couple of years I wanted to try something
          different, so I started to learn web development in my spare time. In
          2022 I got the opportunity to work on a web development project. I am
          now capable of stating that I have found what I was meant to do.
        </Typography>
        <Button
          sx={classes.button}
          href="../assets/tataruConstantinCristinel_CV.pdf"
          target="_blank"
          download
        >
          Download CV <DownloadIcon sx={classes.buttonIcon} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Introduction;
