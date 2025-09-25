import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

import "./App.css";

function App() {
  return (
    <div className= "text-text h-full transition-all">
      <AnimatedBackground />

      <div className="z-1 w-full flex flex-col">
        <Header />
        <main className="max-w-7xl w-full mx-auto mt-27 inline-grid grid-cols-1 gap-4 text-center p-6.25">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
