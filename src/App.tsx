import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-ink text-white min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;
