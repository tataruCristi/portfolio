import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects/Projects";
import Box from "@mui/material/Box";
import { Contact } from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import { ActiveLinksContext } from "./ActiveLinksContext";
import { useEffect, useState } from "react";
import { DarkModeContext } from "./DarkModeContext";

function App() {
  const [activeLink, setActiveLink] = useState({
    home: true,
    about: false,
    projects: false,
    contact: false,
  });

  const [darkMode, setDarkMode] = useState(() => {
    const initialValue = JSON.parse(localStorage.getItem("darkMode"));
    return initialValue !== null ? initialValue : false;
  });

  const classes = {
    lightMode: {
      backgroundColor: "hsl(0, 0%, 98%)",
      color: "hsl(0, 0%, 20%)",
    },
    darkMode: {
      backgroundColor: "rgb(27, 29, 30)",
      color: "rgb(200, 195, 188)",
    },
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <ActiveLinksContext.Provider value={setActiveLink}>
        <Box sx={darkMode ? classes.darkMode : classes.lightMode}>
          <Navbar activeLink={activeLink} />
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Box>
      </ActiveLinksContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;
