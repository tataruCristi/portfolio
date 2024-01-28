import { Container, Typography, Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import Tabs from "@mui/material/Tabs";
import TabPanel from "@mui/lab/TabPanel";
import Experience from "../../components/Experience";
import Skills from "../../components/Skills";
import Introduction from "../../components/Introduction";
import { useElementOnScreen } from "../../hooks/UseElementOnScreen";
import { ActiveLinksContext } from "../../ActiveLinksContext";

const About = () => {
  const [tab, setTab] = useState("introduction");
  const setActiveLink = useContext(ActiveLinksContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setActiveLink((prev) => ({ ...prev, about: isVisible }));
  }, [isVisible, setActiveLink]);

  const classes = {
    container: {
      minHeight: "750px",
      padding: "3rem 0",
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
      fontSize: {
        xs: "0.8rem",
        sm: "1rem",
      },
    },
    tabPanel: {
      padding: { xs: "2rem 0", sm: "4rem" },
    },
  };

  return (
    <Container ref={containerRef} sx={classes.container} id="about">
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
        <TabPanel value="introduction" sx={classes.tabPanel}>
          <Introduction />
        </TabPanel>
        <TabPanel value="education" sx={classes.tabPanel}>
          <Experience />
        </TabPanel>
        <TabPanel value="skills" sx={classes.tabPanel}>
          <Skills />
        </TabPanel>
      </TabContext>
    </Container>
  );
};

export default About;
