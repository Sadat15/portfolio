import "./App.css";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    document.title = "Sadat";
    AOS.init();
  }, []);
  return (
    <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
