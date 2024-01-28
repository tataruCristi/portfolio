import { Container, Paper } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { skillsList1, skillsList2 } from "../helpers/SkillsList";

const Skills = () => {
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
      padding: {
        xs: 0,
        sm: "1rem",
      },
    },
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
