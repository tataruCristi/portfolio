import { Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Introduction from "../../components/Introduction";
import TabList from "@mui/lab/TabList";

const About = () => {
  const [tab, setTab] = useState("education");

  const classes = {
    container: {
      minHeight: "630px",
    },
    title: {
      textAlign: "center",
      fontFamily: "inherit",
      fontWeight: "600",
      marginBottom: "3rem",
    },
    tabsContainer: {
      margin: "auto",
      display: "flex",
      justifyContent: "center",
    },
    tabs: {
      "& .MuiTabs-indicator": {
        backgroundColor: "hsl(0, 0%, 0%)",
      },
    },
    tab: {
      fontFamily: "inherit",
      color: "hsl(0, 0%, 20%)",
      margin: {
        xs: "0",
        md: "0 2rem",
      },
      "&.Mui-selected": {
        color: "hsl(0, 0%, 0%)",
        fontWeight: 600,
      },
    },
  };

  return (
    <Container sx={classes.container} id="about">
      <Typography sx={classes.title} variant="h4">
        About me
      </Typography>
      <TabContext value={tab}>
        <Box sx={classes.tabsContainer}>
          <Tabs
            sx={classes.tabs}
            value={tab}
            onChange={(e, value) => setTab(value)}
            aria-label="scrollable auto"
            variant="scrollable"
            centered
          >
            <Tab sx={classes.tab} label="Introduction" value="introduction" />
            <Tab
              sx={classes.tab}
              label="Education & Experience"
              value="education"
            />
            <Tab sx={classes.tab} label="Skills" value="skills" />
          </Tabs>
        </Box>
        <TabPanel value="introduction">
          <Introduction />
        </TabPanel>
        <TabPanel value="education" sx={{ padding: { xs: 0, sm: "1rem" } }}>
          <Experience />
        </TabPanel>
        <TabPanel value="skills">
          <Skills />
        </TabPanel>
      </TabContext>
    </Container>
  );
};

export default About;

{
  /* <TabContext
value={tab}
sx={{ maxWidth: "200px" }}
variant="scrollable"
scrollButtons="auto"
>
<Tabs
  onChange={(e, value) => setTab(value)}
  aria-label="tabs"
  centered
  sx={classes.tabs}
>
  <Tab sx={classes.tab} label="Introduction" value="introduction" />
  <Tab
    sx={classes.tab}
    label="Education & Experience"
    value="education"
  />
  <Tab sx={classes.tab} label="Skills" value="skills" />
</Tabs>
<TabPanel value="introduction">
  <Introduction />
</TabPanel>
<TabPanel value="education">
  <Experience />
</TabPanel>
<TabPanel value="skills">
  <Skills />
</TabPanel>
</TabContext> */
}
