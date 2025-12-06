// App.jsx
import Navbar from "./components/navbar";
import Hero from "./components/hero";
// import About from "./components/about";
// import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Conference from "./components/conference";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Conference />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
