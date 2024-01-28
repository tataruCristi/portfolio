import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects/Projects";
import Box from "@mui/material/Box";
import { Contact } from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import { ActiveLinksContext } from "./ActiveLinksContext";
import { useState } from "react";

function App() {
  const [activeLink, setActiveLink] = useState({
    home: false,
    about: false,
    projects: false,
    contact: false,
  });

  return (
    <ActiveLinksContext.Provider value={setActiveLink}>
      <Box>
        <Navbar activeLink={activeLink} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Box>
    </ActiveLinksContext.Provider>
  );
}

export default App;
