import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Box from "@mui/material/Box";
import { Contact } from "./pages/Contact/Contact";
import Footer from "./components/Footer";
import About from "./pages/About/About";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
}

export default App;
