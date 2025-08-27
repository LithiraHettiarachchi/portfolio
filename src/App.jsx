// App.jsx
import Navbar from "./components/navbar";
import Hero from "./components/hero";
// import About from "./components/about";
// import About from "./components/About";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
