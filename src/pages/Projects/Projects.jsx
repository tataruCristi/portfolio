import Grid from "@mui/material/Grid";
import Project from "../../components/Project";
import { projectsList } from "../../helpers/ProjectsList";
import { Container, Typography } from "@mui/material";
import { useElementOnScreen } from "../../hooks/UseElementOnScreen";
import { ActiveLinksContext } from "../../ActiveLinksContext";
import { useContext, useEffect } from "react";

const Projects = () => {
  const setActiveLink = useContext(ActiveLinksContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "200px",
    threshold: 0.5,
  });

  useEffect(() => {
    setActiveLink((prev) => ({ ...prev, projects: isVisible }));
  }, [isVisible, setActiveLink]);

  const classes = {
    container: {
      minHeight: "80vh",
      padding: "3rem 0",
    },
    title: {
      fontFamily: "inherit",
      fontWeight: "600",
      textAlign: "center",
      marginBottom: "2rem",
    },
    grid: {
      margin: 0,
    },
  };
  return (
    <Container ref={containerRef} sx={classes.container} id="projects">
      <Typography variant="h4" sx={classes.title}>
        Projects
      </Typography>
      <Grid container sx={classes.grid} rowSpacing={4}>
        {projectsList.map((el) => (
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
