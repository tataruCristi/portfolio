import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Box from "@mui/material/Box";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
