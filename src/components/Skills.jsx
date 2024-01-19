import { Container, Paper, Box } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import { ReactComponent as ReactSvg } from "../assets/react-svg.svg";
import { ReactComponent as HtmlSvg } from "../assets/html-5-svg.svg";
import { ReactComponent as CssSvg } from "../assets/css-3-svg.svg";
import { ReactComponent as JSSvg } from "../assets/javascript-svg.svg";
import { ReactComponent as TypescriptSvg } from "../assets/typescript-svg.svg";
import { ReactComponent as MaterialSvg } from "../assets/material-ui-svg.svg";

const Skills = () => {
  const classes = {
    container: {
      display: "flex",
      flexDirection: {
        xs: "column",
        sm: "row",
      },
      justifyContent: "space-evenly",
      // alignItems: "center",
      paddingTop: "4rem",
    },
    paper: {
      padding: {
        xs: "1rem",
        sm: "2rem",
        md: "3rem",
      },
      display: "flex",
      flexDirection: {
        xs: "column",
        sm: "row",
      },
    },
    title: {
      fontFamily: "inherit",
      textAlign: "center",
    },
    list: {
      margin: {
        xs: "auto",
        sm: "2rem",
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
          <ListItem>
            <ListItemAvatar>
              <HtmlSvg style={classes.svg} />
            </ListItemAvatar>
            <ListItemText primary="HTML" secondary="Intermediary" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <CssSvg style={classes.svg} />
            </ListItemAvatar>
            <ListItemText primary="CSS" secondary="Intermediary" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <JSSvg style={classes.svg} />
            </ListItemAvatar>
            <ListItemText primary="Javascript" secondary="Intermediary" />
          </ListItem>
        </List>
        <List sx={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <ReactSvg style={classes.svg} />
            </ListItemAvatar>
            <ListItemText primary="React" secondary="Intermediary" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <TypescriptSvg style={classes.svg} />
            </ListItemAvatar>
            <ListItemText primary="Typescript" secondary="Intermediary" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <MaterialSvg style={classes.svg} />
            </ListItemAvatar>
            <ListItemText primary="Material UI" secondary="Intermediary" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Skills;
