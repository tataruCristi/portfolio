import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Container, Typography, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineContent, {
  timelineContentClasses,
} from "@mui/lab/TimelineContent";
import { DarkModeContext } from "../DarkModeContext";
import { useContext } from "react";

const Experience = () => {
  const { darkMode } = useContext(DarkModeContext);

  const classes = {
    container: {
      padding: {
        xs: "2rem 0",
        sm: "1rem",
      },
    },
    timeline: {
      [`& .${timelineContentClasses.root}`]: {
        flex: 0,
      },
      padding: {
        xs: 0,
      },
    },
    connector: {
      backgroundColor: "hsl(0, 0%, 40%)",
    },
    dot: {
      backgroundColor: "hsl(0, 0%, 20%)",
    },
    paper: {
      textAlign: "center",
      padding: {
        xs: "1rem",
        sm: "1rem",
      },
      maxWidth: "350px",
      backgroundColor: darkMode ? "rgb(24, 26, 27)" : "#fff",
      color: darkMode ? "rgb(200, 195, 188)" : "rgba(0, 0, 0, 0.87)",
    },
    paperLeft: {
      float: {
        xs: "none",
        sm: "left",
      },
    },
    paperRight: {
      float: {
        xs: "none",
        sm: "right",
      },
    },
    content: {
      m: "auto 0",
      minWidth: "100px",
    },
    years: {
      paddingLeft: 0,
    },
  };

  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <Container sx={classes.container}>
      <Timeline
        position={isMobile ? "alternate" : "left"}
        sx={!isMobile ? classes.timeline : {}}
      >
        <TimelineItem>
          <TimelineOppositeContent>
            <Paper sx={{ ...classes.paper, ...classes.paperRight }}>
              <Typography variant={isMobile ? "h6" : "subtitle1"}>
                Calistrat Hogas, Tecuci
              </Typography>
              <Typography variant={isMobile ? "p" : "caption"}>
                High School Diploma
              </Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={classes.connector} />
            <TimelineDot sx={classes.dot}>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={classes.connector} />
          </TimelineSeparator>
          <TimelineContent sx={classes.content}>
            <Typography
              sx={classes.years}
              variant={isMobile ? "h6" : "button"}
              component="span"
            >
              2010 - 2014
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Paper sx={{ ...classes.paper, ...classes.paperLeft }}>
              <Typography variant={isMobile ? "h6" : "subtitle1"}>
                Gheorghe Asaghi, Iasi
              </Typography>
              <Typography variant={isMobile ? "p" : "caption"}>
                Bachelor's Degree
              </Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={classes.connector} />
            <TimelineDot sx={classes.dot}>
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={classes.connector} />
          </TimelineSeparator>
          <TimelineContent sx={classes.content}>
            <Typography variant={isMobile ? "h6" : "button"} component="span">
              2014 - 2018
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Paper
              sx={{
                ...classes.paper,
                ...classes.paperRight,
              }}
            >
              <Typography variant={isMobile ? "h6" : "subtitle1"}>
                Continental, Iasi
              </Typography>
              <Typography variant={isMobile ? "p" : "caption"}>
                System Test Engineer
              </Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={classes.connector} />
            <TimelineDot sx={classes.dot}>
              <BugReportIcon />
            </TimelineDot>
            <TimelineConnector sx={classes.connector} />
          </TimelineSeparator>
          <TimelineContent sx={classes.content}>
            <Typography variant={isMobile ? "h6" : "button"} component="span">
              2018 - 2022
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Paper sx={{ ...classes.paper, ...classes.paperLeft }}>
              <Typography variant={isMobile ? "h6" : "subtitle1"}>
                Continental, Iasi
              </Typography>
              <Typography variant={isMobile ? "p" : "caption"}>
                Web Developer
              </Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={classes.connector} />
            <TimelineDot sx={classes.dot}>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={classes.connector} />
          </TimelineSeparator>
          <TimelineContent sx={classes.content}>
            <Typography variant={isMobile ? "h6" : "button"} component="span">
              2022 - present
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default Experience;
