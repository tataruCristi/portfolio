import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const Project = ({ project }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const classes = {
    container: {
      width: {
        xs: "300px",
        sm: "300px",
        md: "345px",
      },
    },
    image: {},
    description: {
      variant: {
        xs: "body2",
        sm: "h6",
      },
    },
  };

  return (
    <Card sx={classes.container}>
      <CardActionArea href={project.link} target="_blank">
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt="project preview"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography
            variant={isMobile ? "body2" : "body1"}
            sx={classes.description}
          >
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Project;
