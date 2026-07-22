import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <Navbar />  


      {/* Hero Section */}
      <Hero />



      {/* About */}
      <About />



      {/* Skills */}
      <Skills />




      {/* Projects */}
      <Projects />



      {/* Contact */}
      <Contact />



    <Footer />


    </div>
  );
}


export default App;