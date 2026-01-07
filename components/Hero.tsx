
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageSquare, Github, Linkedin, Code2, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Computer Science Engineer | Problem Solver";
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
    let current = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, current));
      current++;
      if (current > fullText.length) clearInterval(interval);
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-secondary/20 blur-[120px] rounded-full animate-pulse" />

      {/* Social Sidebar */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40 after:content-[''] after:w-px after:h-24 after:bg-white/20 after:mt-4"
      >
        <a href={PERSONAL_INFO.links.github} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-all hover:-translate-y-1"><Github size={20} /></a>
        <a href={PERSONAL_INFO.links.linkedIn} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-all hover:-translate-y-1"><Linkedin size={20} /></a>
        <a href={PERSONAL_INFO.links.leetCode} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-all hover:-translate-y-1"><Code2 size={20} /></a>
        <a href={PERSONAL_INFO.links.gfg} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-primary transition-all hover:-translate-y-1"><Zap size={20} /></a>
      </motion.div>

      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 inline-block py-1.5 px-6 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase"
          >
            Available for Internships 2024
          </motion.div>
          
          <h1 className="text-6xl md:text-9xl font-black font-display tracking-tight mb-8">
            <span className="text-white">Shweta</span> <br className="md:hidden" />
            <span className="text-gradient">Sahu</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-mono text-textSecondary mb-10 min-h-[1.5em] tracking-tight">
            {text}<span className="text-primary animate-pulse font-bold">|</span>
          </p>
          
          <p className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Final year student passionate about Competitive Programming and Full-Stack Development. 
            Solving complex problems with elegant code.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <a 
            href="#projects" 
            className="px-10 py-4 bg-gradient-primary hover:scale-105 transition-all rounded-full font-black uppercase tracking-widest text-white shadow-2xl shadow-primary/40 flex items-center gap-2"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 glass hover:bg-white/10 text-white rounded-full font-black uppercase tracking-widest transition-all border border-white/10 flex items-center gap-2"
          >
            <MessageSquare size={20} />
            Let's Talk
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-textSecondary/50"
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};

export default Hero;
