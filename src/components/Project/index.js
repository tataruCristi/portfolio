import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Project = ({ project }) => {
  return (
    // <Paper sx={{ textAlign: "center", height: "200px", width: "300px" }}>
    //   <a href={project.link}>{project.name}</a>
    // </Paper>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={project.link} target="_blank">
        <CardMedia
          component="img"
          height="200"
          image={project.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            minima iusto corrupti ullam veritatis aliquid repellat! Consequatur
            ea qui molestias accusamus. Laboriosam reprehenderit possimus
            laudantium tempora voluptas rem alias optio!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Project;
