import { Container, Paper } from "@mui/material";
import React, { useContext } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { skillsList1, skillsList2 } from "../helpers/SkillsList";
import { DarkModeContext } from "../DarkModeContext";

const Skills = () => {
  const { darkMode } = useContext(DarkModeContext);

  const classes = {
    container: {
      display: "flex",
      flexDirection: {
        xs: "column",
        sm: "row",
      },
      justifyContent: "space-evenly",
    },
    paper: {
      padding: {
        xs: "1rem",
        sm: "2rem",
        md: "2rem",
      },
      display: "flex",
      flexDirection: {
        xs: "column",
        sm: "row",
      },
      margin: "0 2rem",
      backgroundColor: darkMode ? "rgb(24, 26, 27)" : "#fff",
      color: darkMode ? "rgb(200, 195, 188)" : "rgba(0, 0, 0, 0.87)",
    },
    title: {
      fontFamily: "inherit",
      textAlign: "center",
    },
    list: {
      margin: {
        xs: "auto",
        sm: "1rem",
      },
      "& .MuiListItemText-primary": {
        fontWeight: "500",
      },
      "& .MuiListItemText-secondary": {
        color: darkMode ? "rgb(200, 195, 188)" : "rgba(0, 0, 0, 0.87)",
      },
      padding: {
        xs: 0,
        sm: "1rem",
      },
    },
    listText: {},
    svg: {
      width: "35px",
      height: "35px",
    },
  };

  return (
    <Container sx={classes.container}>
      <Paper sx={classes.paper}>
        <List sx={classes.list}>
          {skillsList1.map((skill) => {
            const Logo = skill.logo;
            return (
              <ListItem key={skill.name}>
                <ListItemAvatar>
                  <Logo style={classes.svg} />
                </ListItemAvatar>
                <ListItemText
                  primary={skill.name}
                  secondary={skill.experience}
                />
              </ListItem>
            );
          })}
        </List>
        <List sx={classes.list}>
          {skillsList2.map((skill) => {
            const Logo = skill.logo;
            return (
              <ListItem key={skill.name}>
                <ListItemAvatar>
                  <Logo style={classes.svg} />
                </ListItemAvatar>
                <ListItemText
                  primary={skill.name}
                  secondary={skill.experience}
                />
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Container>
  );
};

export default Skills;
