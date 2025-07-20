import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Navbar from './Navbar';
import ParticlesBackground from './ParticlesBackground';
import './App.css';

function App() {
  return (
    <>

      <Navbar />
      <main className="pt-20 px-6 max-w-5xl mx-auto text-white font-mono relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="mt-20">
          <About />
        </section>
        <section id="projects" className="mt-20">
          <Projects />
        </section>
      </main>
    </>
  );
}

export default App;
