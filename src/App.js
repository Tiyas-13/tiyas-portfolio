import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar />
        <Home />
        <About />
        <Experience />
        <Projects />
      <Contact />
    </div>
  );
}

export default App;
