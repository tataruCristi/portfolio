import { Container, Grid, Paper, Box, Typography, Button } from "@mui/material";
import React, { useEffect, useContext } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useElementOnScreen } from "../../hooks/UseElementOnScreen";
import { ActiveLinksContext } from "../../ActiveLinksContext";
import ContactForm from "../../components/ContactForm";
import { DarkModeContext } from "../../DarkModeContext";

export const Contact = () => {
  const setActiveLink = useContext(ActiveLinksContext);
  const { darkMode } = useContext(DarkModeContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setActiveLink((prev) => ({ ...prev, contact: isVisible }));
  }, [isVisible, setActiveLink]);

  const classes = {
    container: {
      padding: "3rem 0",
    },
    title: {
      textAlign: "center",
      fontFamily: "inherit",
      fontWeight: "600",
      marginBottom: "3rem",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maringTop: {
        xs: "1rem",
        sm: 0,
      },
    },
    card: {
      textAlign: "center",
      width: "300px",
      height: "150px",
      margin: "1rem 0",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-evenly",
      backgroundColor: darkMode ? "rgb(24, 26, 27)" : "#fff",
      color: "inherit",
    },
    cardTitle: {
      textAlign: "center",
      fontFamily: "inherit",
      fontWeight: "500",
      marginBottom: "1rem",
      maxWidth: {
        xs: "270px",
        sm: "250px",
        md: "300px",
      },
      margin: "auto",
      marginTop: {
        xs: "3rem",
        sm: 0,
      },
    },
    cardButton: {
      fontFamily: "inherit",
      color: darkMode ? "rgb(200, 195, 188)" : "hsl(0, 0%, 20%)",
      borderRadius: "1rem",
      "&:hover": {
        color: darkMode ? "rgb(232, 230, 227)" : "hsl(0, 0%, 0%)",
        backgroundColor: darkMode ? "rgb(31, 34, 35)" : "hsl(0, 0%, 95%)",
      },
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      alignItems: "center",
    },
  };

  return (
    <Container ref={containerRef} id="contact" sx={classes.container}>
      <Typography variant="h4" sx={classes.title}>
        Get in touch
      </Typography>
      <Grid container>
        <Grid item={true} xs={12} sm={6}>
          <Typography sx={classes.cardTitle} variant="h5">
            Talk to me
          </Typography>
          <Box sx={classes.cardContainer}>
            <Paper sx={classes.card}>
              <EmailOutlinedIcon />
              <Typography>Email</Typography>
              <Typography>tataru.cristi5@gmail.com</Typography>
              <Button
                sx={classes.cardButton}
                variant="text"
                href="mailto:tataru.cristi5@gmail.com"
              >
                Contact me <ArrowRightAltIcon />
              </Button>
            </Paper>
            <Paper sx={classes.card}>
              <WhatsAppIcon />
              <Typography>Whatsapp</Typography>
              <Typography>0757138228</Typography>
              <Button
                sx={classes.cardButton}
                variant="text"
                href="https://wa.me/040757138228?text="
                target="_blank"
              >
                Contact me <ArrowForwardIcon />
              </Button>
            </Paper>
            <Paper sx={classes.card}>
              <LinkedInIcon />
              <Typography fontFamily="inherit">Linkedin</Typography>
              <Typography>in/tataru-cristi/</Typography>
              <Button
                sx={classes.cardButton}
                variant="text"
                href="https://www.linkedin.com/in/tataru-cristi/"
                target="_blank"
              >
                Contact me <ArrowRightAltIcon />
              </Button>
            </Paper>
          </Box>
        </Grid>
        <Grid item={true} xs={12} sm={6} sx={{ xs: 12 }}>
          <Typography sx={classes.cardTitle} variant="h5">
            Is there a project that I can help you with?
          </Typography>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};
