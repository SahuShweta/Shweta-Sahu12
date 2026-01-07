
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-primary/30 selection:text-white overflow-x-hidden bg-backgroundDark">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <ThreeBackground />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
