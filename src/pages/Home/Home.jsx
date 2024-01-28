import "./style.css";
import Social from "../../components/Social";
import Data from "../../components/Data/Data";
import ScrollDown from "../../components/ScrollDown";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import { useElementOnScreen } from "../../hooks/UseElementOnScreen";
import { ActiveLinksContext } from "../../ActiveLinksContext";
import { useContext, useEffect } from "react";

const Home = () => {
  const theme = useTheme();
  const setActiveLink = useContext(ActiveLinksContext);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useEffect(() => {
    setActiveLink((prev) => ({ ...prev, home: isVisible }));
  }, [isVisible, setActiveLink]);

  const classes = {
    container: {
      overflowX: "hidden",
      margin: {
        xs: "4rem auto",
        sm: "8rem auto",
      },
    },
    social: {
      margin: "auto",
      padding: "0",
    },
    data: {
      [theme.breakpoints.down("md")]: {
        display: "flex",
      },
    },
  };
  return (
    <Container ref={containerRef} sx={classes.container} id="home">
      <Grid container rowSpacing={8}>
        <Grid item={true} xs={4} sm={4} md={3} sx={classes.social}>
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
        <Grid item={true} xs={8} sm={8} md={4} order={{ xs: 2, sm: 2, md: 3 }}>
          <Box className="home__img" />
        </Grid>
        <Grid item={true} md={12} order={4}>
          <ScrollDown />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
