import React, { useState, useContext } from "react";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import { DarkModeContext } from "../DarkModeContext";

const classes = {
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
    color: "red",
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
  inputDark: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgb(200, 195, 188)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(232, 230, 227)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#fff",
      },
    },
    "& .MuiInputBase-input": {
      color: "rgb(200, 195, 188)",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      color: "rgb(200, 195, 188)",
    },
    "& .MuiFormLabel-root": {
      color: "rgb(200, 195, 188)",
    },
  },
};

const ContactForm = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [success, setSuccess] = useState(false);
  const [progress, setProgress] = useState(false);
  const [error, setError] = useState(false);
  const { darkMode } = useContext(DarkModeContext);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      (formName.length === 0) |
      (formEmail.length === 0) |
      (formMessage.length === 0)
    ) {
      setError(true);
      return;
    }
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
          setSuccess(true);
          setProgress(false);
          setConfirmation(true);
          setFormName("");
          setFormEmail("");
          setFormMessage("");
          setError(false);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setProgress(false);
          setConfirmation(true);
        }
      );
  };

  const handleClose = () => {
    setConfirmation(false);
  };

  return (
    <Box sx={classes.formContainer} component="form">
      <TextField
        sx={
          darkMode ? { ...classes.input, ...classes.inputDark } : classes.input
        }
        label="Your Name"
        name="user_name"
        placeholder="Enter your name"
        value={formName}
        onChange={(e) => setFormName(e.target.value)}
        helperText={error && formName.length === 0 ? "Enter your name" : ""}
        error={error && formName.length === 0}
      />
      <TextField
        sx={
          darkMode ? { ...classes.input, ...classes.inputDark } : classes.input
        }
        label="Your email"
        name="user_email"
        placeholder="Enter your email"
        value={formEmail}
        onChange={(e) => setFormEmail(e.target.value)}
        helperText={error && formEmail.length === 0 ? "Enter your email" : ""}
        error={error && formEmail.length === 0}
      />
      <TextField
        sx={
          darkMode ? { ...classes.input, ...classes.inputDark } : classes.input
        }
        multiline
        label="Project description"
        name="user_message"
        rows={5}
        placeholder="Describe the project"
        value={formMessage}
        onChange={(e) => setFormMessage(e.target.value)}
        helperText={error && formMessage.length === 0 ? "Enter a message" : ""}
        error={error && formMessage.length === 0}
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={confirmation}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        {success ? (
          <Alert severity="success">Message sent successfully!</Alert>
        ) : (
          <Alert severity="error">Error! Please try again!</Alert>
        )}
      </Snackbar>
    </Box>
  );
};

export default ContactForm;
