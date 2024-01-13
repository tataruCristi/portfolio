import "./index.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Project from "../../components/Project/index";
import { ProjectList } from "../../helpers/ProjectList";
import { Container, Typography } from "@mui/material";

const Projects = () => {
  const classes = {
    container: {
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
    <Container sx={classes.container} id="projects">
      <Typography variant="h4" sx={classes.title}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {ProjectList.map((el) => (
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
            key={el.name}
          >
            <Project project={el} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
