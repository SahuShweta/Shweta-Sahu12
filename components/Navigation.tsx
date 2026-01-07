
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0118]/80 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform shadow-lg shadow-primary/30">
            <Terminal size={24} />
          </div>
          <span className="text-2xl font-black font-display tracking-tight text-white hidden sm:block">
            Shweta<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-bold uppercase tracking-widest text-textSecondary hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-gradient-primary text-white rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-primary/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 glass rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0a0118] border-b border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-12 flex flex-col gap-8 items-center">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-black uppercase tracking-widest text-textSecondary hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full max-w-xs text-center py-4 bg-gradient-primary text-white rounded-xl font-black uppercase tracking-widest"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
