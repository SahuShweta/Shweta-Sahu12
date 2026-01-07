
import React from 'react';
import { Terminal, ArrowUp, Github, Linkedin, Code2, Zap, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-12 px-4 border-t border-white/5 bg-[#0a0118]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                <Terminal size={24} />
              </div>
              <span className="text-2xl font-bold text-white font-display">Shweta<span className="text-primary">.Sahu</span></span>
            </div>
            <p className="text-textSecondary leading-relaxed">
              Computer Science Engineer specialized in competitive programming and modern web technologies.
            </p>
            <div className="flex gap-4">
              <a href={PERSONAL_INFO.links.github} target="_blank" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-textSecondary hover:text-white hover:bg-primary transition-all"><Github size={18} /></a>
              <a href={PERSONAL_INFO.links.linkedIn} target="_blank" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-textSecondary hover:text-white hover:bg-primary transition-all"><Linkedin size={18} /></a>
              <a href={PERSONAL_INFO.links.leetCode} target="_blank" className="w-10 h-10 glass rounded-lg flex items-center justify-center text-textSecondary hover:text-white hover:bg-primary transition-all"><Code2 size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Achievements'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-textSecondary hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-primary transition-all group-hover:w-4" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-1" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-textSecondary hover:text-white transition-colors break-all">{PERSONAL_INFO.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-secondary mt-1" />
                <a href={`tel:${PERSONAL_INFO.phone}`} className="text-textSecondary hover:text-white transition-colors">{PERSONAL_INFO.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Zap size={18} className="text-accent mt-1" />
                <span className="text-textSecondary">Available for remote work & internships.</span>
              </li>
            </ul>
          </div>

          {/* Coding Stats Summary */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest">Coding Stats</h4>
            <div className="space-y-4">
              <div className="p-4 glass rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-textSecondary">LeetCode</span>
                  <span className="text-xs text-primary font-mono font-bold">500+ Solved</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[85%]" />
                </div>
              </div>
              <div className="p-4 glass rounded-2xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-textSecondary">GFG</span>
                  <span className="text-xs text-secondary font-mono font-bold">1200+ Score</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-[70%]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-textSecondary text-sm">
            © {currentYear} Shweta Sahu. All rights reserved. Made with ❤️ in India.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-textSecondary hover:text-white hover:bg-primary transition-all group"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
