import { LanguageProvider } from "./i18n";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import CodeRain from "./components/CodeRain";

function App() {
  return (
    <LanguageProvider>
      <div className="text-white min-h-screen relative">
        <CodeRain />
        <div className="relative z-10">
          <Nav />
          <Hero />
          <About />
          <Projects />
          <Timeline />
          <Contact />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;


export default App;
