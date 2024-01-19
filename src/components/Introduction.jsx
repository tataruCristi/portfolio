import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import Picture from "../assets/intro.jpg";
import DownloadIcon from "@mui/icons-material/Download";

const Introduction = () => {
  const classes = {
    container: {
      display: "flex",
      flexDirection: {
        xs: "column",
        sm: "row",
      },
    },
    image: {
      background: `url(${Picture})`,
      height: {
        xs: "200px",
        sm: "250px",
        md: "300px",
        lg: "400px",
      },
      width: {
        xs: "200px",
        sm: "250px",
        md: "300px",
        lg: "400px",
      },
      backgroundSize: "cover",
      margin: "auto",
    },
    grid: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    description: {
      fontFamily: "inherit",
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
        xs: "1rem",
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
      <Grid item xs={12} sm={6}>
        <Box sx={classes.image} />
      </Grid>
      <Grid item xs={12} sm={6} sx={classes.grid}>
        <Typography sx={classes.description}>
          Write some introduction here Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Explicabo eos commodi amet in corporis minima iure,
          vitae voluptatibus soluta, nisi quasi minus velit excepturi rerum
          eligendi rem expedita cumque facere.
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
