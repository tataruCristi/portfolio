import "./index.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Container, Typography, Paper } from "@mui/material";

const Experience = () => {
  const classes = {
    cotainer: {
      padding: "5rem 0",
    },
    title: {
      fontFamily: "inherit",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "3rem",
    },
  };
  return (
    <Container sx={classes.cotainer} id="experience">
      <Typography sx={classes.title} variant="h4">
        Experience
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Paper
              sx={{
                textAlign: "center",
                padding: "20px",
                maxWidth: "350px",
                float: "right",
              }}
            >
              <Typography variant="h6">Calistrat Hogas, Tecuci</Typography>
              <Typography variant="p">High School Diploma</Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ m: "auto 0" }}>
            <Typography variant="h6" component="span">
              2010 - 2014
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Paper
              sx={{
                textAlign: "center",
                padding: "20px",
                maxWidth: "250px",
              }}
            >
              <Typography variant="h6">Gheorghe Asaghi, Iasi</Typography>
              <Typography variant="p">Bachelor's Degree</Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="primary">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ m: "auto 0" }}>
            <Typography variant="h6" component="span">
              2014 - 2018
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Paper
              sx={{
                textAlign: "center",
                padding: "20px",
                maxWidth: "250px",
                float: "right",
              }}
            >
              <Typography variant="h6">Continental, Iasi</Typography>
              <Typography variant="p">System Test Engineer</Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="primary">
              <BugReportIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ m: "auto 0" }}>
            <Typography variant="h6" component="span">
              2018 - 2022
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Paper
              sx={{
                textAlign: "center",
                padding: "20px",
                maxWidth: "250px",
              }}
            >
              <Typography variant="h6">Continental, Iasi</Typography>
              <Typography variant="p">Web Developer</Typography>
            </Paper>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ m: "auto 0" }}>
            <Typography variant="h6" component="span">
              2022 - present
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};

export default Experience;
