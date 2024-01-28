import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  Snackbar,
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import emailjs from "@emailjs/browser";
import CircularProgress from "@mui/material/CircularProgress";
import { useElementOnScreen } from "../../hooks/UseElementOnScreen";
import { ActiveLinksContext } from "../../ActiveLinksContext";

export const Contact = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(false);
  const setActiveLink = useContext(ActiveLinksContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setActiveLink((prev) => ({ ...prev, contact: isVisible }));
  }, [isVisible, setActiveLink]);

  const handleClose = () => {
    setConfirmation(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setProgress(true);

    emailjs
      .send(
        "service_wl580aj",
        "template_riy0c5s",
        {
          form_name: formName,
          form_email: formEmail,
          form_message: formMessage,
        },
        "1z-Vo-ydDEPTKsEC1"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent succesfully!");
          setProgress(false);
          setConfirmation(true);
        },
        (error) => {
          console.log(error.text);
          setMessage("Error. Please try again!");
          setProgress(false);
          setConfirmation(true);
        }
      );

    setFormName("");
    setFormEmail("");
    setFormMessage("");
  };

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
    input: {
      margin: "1rem 0",
      width: {
        xs: "80%",
        sm: "70%",
      },
      radius: "5rem",
    },
    button: {
      display: "inline-flex",
      alignItems: "center",
      backgroundColor: "hsl(0, 0%, 20%)",
      color: "#fff",
      padding: "1.25rem 2rem",
      borderRadius: "1rem",
      fontWeight: "500",
      "&:hover": {
        backgroundColor: "hsl(0, 0%, 0%)",
      },
      fontFamily: "inherit",
      marginTop: "2rem",
    },
    buttonIcon: {
      marginLeft: "0.5rem",
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
            Write me your project
          </Typography>
          <Box sx={classes.formContainer} component="form">
            <TextField
              sx={classes.input}
              label="Name"
              name="user_name"
              placeholder="Enter your name"
              value={formName}
              onChange={(e) => setFormName(e.target.value)}
            />
            <TextField
              sx={classes.input}
              label="Email"
              name="user_email"
              placeholder="Enter your email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
            />
            <TextField
              sx={classes.input}
              multiline
              label="Message"
              name="user_message"
              rows={5}
              placeholder="Describe your project"
              value={formMessage}
              onChange={(e) => setFormMessage(e.target.value)}
            />
            <Button sx={classes.button} onClick={sendEmail}>
              Send Message
              <svg
                style={classes.buttonIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="#fff"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="#fff"
                ></path>
              </svg>
            </Button>
            {progress && (
              <CircularProgress
                sx={{ position: "absolute", top: "50%", left: "50%" }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={confirmation}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
      />
    </Container>
  );
};
