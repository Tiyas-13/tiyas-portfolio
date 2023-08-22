import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Element } from 'react-scroll';
import AnimatedSection from "./components/AnimatedSection";
import Socials from "./components/Socials";


function App() {
  return (
      <div>
          <Navbar />
    <div className="bg-[#F7F4EC]">
        <Element name="home">
            <AnimatedSection id="home" thr={0.2}><Home /></AnimatedSection>
        </Element>
        <Element name="about">
            <AnimatedSection id="about" thr={0.3}><About /></AnimatedSection>
        </Element>
        <Element name="experience">
            <AnimatedSection id="experience" thr={0.1}><Experience /></AnimatedSection>
        </Element>
        <Element name="projects">
            <AnimatedSection id="projects" thr={0.2}><Projects /></AnimatedSection>
        </Element>
    </div>
          <Element name="contact">
              <AnimatedSection id="contact" thr={0.1}><Contact /></AnimatedSection>
          </Element>
      </div>
  );
}

export default App;
