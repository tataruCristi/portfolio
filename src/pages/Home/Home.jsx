import "./style.css";
import Social from "../../components/Social/Social";
import Data from "../../components/Data/Data";
import ScrollDown from "../../components/ScrollDown";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";

const Home = () => {
  const theme = useTheme();

  const classes = {
    container: {
      padding: "8rem 0",
      overflowX: "hidden",
    },
    social: {
      margin: "auto",
      padding: "0",
    },
    data: {
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
  };
  return (
    <Container sx={classes.container} id="home">
      <Grid container spacing={{ xs: 2, sm: 2 }}>
        <Grid item xs={4} sm={4} md={3} sx={classes.social}>
          <Social />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          order={{ xs: 3, sm: 3, md: 2 }}
          sx={classes.data}
        >
          <Data />
        </Grid>
        <Grid item xs={8} sm={8} md={4} order={{ xs: 2, sm: 2, md: 3 }}>
          <Box className="home__img" />
        </Grid>
        <Grid item md={12} order={4}>
          <ScrollDown />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
