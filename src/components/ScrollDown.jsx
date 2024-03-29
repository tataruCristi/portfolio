import React, { useContext } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Link, Box } from "@mui/material";
import { DarkModeContext } from "../DarkModeContext";

function ScrollDown() {
  const { darkMode } = useContext(DarkModeContext);

  const classes = {
    container: {
      display: {
        xs: "none",
        sm: "block",
      },
      paddingTop: "3rem",
    },
  };

  return (
    <Box sx={classes.container} className="home__scroll">
      <Link
        href="#about"
        className="home_scroll-button button--flex dark"
        underline="none"
      >
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: darkMode ? "rgb(200, 195, 188)" : "hsl(0, 0%, 46%)",
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: darkMode ? "rgb(200, 195, 188)" : "hsl(0, 0%, 46%)",
              strokeWidth: "20px",
            }}
          ></path>
        </svg>
        <span
          className={darkMode ? "home__scroll-name dark" : "home__scroll-name"}
        >
          Scroll Down
        </span>
        <ArrowDownwardIcon
          className={
            darkMode ? "home__scroll-arrow dark" : "home__scroll-arrow"
          }
        />
      </Link>
    </Box>
  );
}

export default ScrollDown;
