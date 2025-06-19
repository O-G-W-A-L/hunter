import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './index.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section id="home" className="min-h-screen bg-blue-100">
          <Home />
        </section>
        <section id="about" className="min-h-screen bg-blue-200">
          <About />
        </section>
        <section id="skills" className="min-h-screen bg-blue-400">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen bg-blue-300">
          <Projects />
        </section>
        <section id="contact" className="min-h-screen bg-blue-400">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
