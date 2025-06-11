import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;