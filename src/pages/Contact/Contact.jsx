import {
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Contact = () => {
  const classes = {
    container: {
      padding: "5rem",
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
      alignItems: "center",
    },
    input: {
      margin: "1rem 0",
      width: {
        xs: "100%",
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
    },
    buttonIcon: {
      marginLeft: "0.5rem",
    },
  };

  return (
    <Container id="contact" sx={classes.container}>
      <Typography variant="h4" sx={classes.title}>
        Get in touch
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6} sx={{ xs: 12 }}>
          <Typography sx={classes.cardTitle} variant="h5">
            Write me your project
          </Typography>
          <Box sx={classes.formContainer} component="form">
            <TextField
              sx={classes.input}
              id="form-name"
              label="Name"
              placeholder="Enter your name"
            />
            <TextField
              sx={classes.input}
              id="form-email"
              label="Email"
              placeholder="Enter your email"
            />
            <TextField
              sx={classes.input}
              multiline
              id="form-message"
              label="Message"
              rows={5}
              placeholder="Describe your project"
            />
            <Button sx={classes.button}>
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
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
// min 2:32
//  <h2 className='section__title'>Get in touch</h2>
//  <span className='section__subtitle'>Contact me</span>

//  <div className='contact__container container grid'>
//      <div className='contact__content'>
//          <h3 className='contact__title'>Talk to me</h3>
//          <div className="contact__info">
//              <div className="contact__card">
//                  <i className='bx bx-mail-send contact__card-icon'></i>
//                  <h3 className='contact__card-title'>Email</h3>
//                  <span className='contact__card-data'>tataru.cristi5@gmail.com</span>
//                  <a href="" className="contact_button">
//                      Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
//                  </a>
//              </div>

//              <div className="contact__card">
//                  <i className='bx bxl-whatsup contact__card-icon'></i>
//                  <h3 className='contact__card-title'>Whatsapp</h3>
//                  <span className='contact__card-data'>0757138228</span>
//                  <a href="" className="contact_button">
//                      Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
//                  </a>
//              </div>

//              <div className="contact__card">
//                  <i className='bx bxl-messenger contact__card-icon'></i>
//                  <h3 className='contact__card-title'>Linkedin</h3>
//                  <span className='contact__card-data'>in/tataru-cristi/</span>
//                  <a href="" className="contact_button">
//                      Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i>
//                  </a>
//              </div>
//          </div>
//      </div>
//      <div className='contact__content'>
//          <h3 className="contact_title">Write me your project</h3>

//      </div>
//  </div>
