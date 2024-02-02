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
  },
  cardTitle: {
    textAlign: "center",
    fontFamily: "inherit",
    fontWeight: "500",
    marginBottom: "1rem",
  },
  cardButton: {
    fontFamily: "inherit",
    color: "hsl(0, 0%, 20%)",
    borderRadius: "1rem",
    "&:hover": {
      color: "hsl(0, 0%, 0%)",
      backgroundColor: "hsl(0, 0%, 95%)",
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    alignItems: "center",
  },
};

export const Contact = () => {
  const setActiveLink = useContext(ActiveLinksContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setActiveLink((prev) => ({ ...prev, contact: isVisible }));
  }, [isVisible, setActiveLink]);

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
            Write me your project
          </Typography>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};
