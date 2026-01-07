
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { SKILLS } from '../constants';
import SectionHeading from './SectionHeading';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Tools' | 'AI/ML'>('All');
  
  const categories: ('All' | 'Frontend' | 'Backend' | 'Tools' | 'AI/ML')[] = ['All', 'Frontend', 'Backend', 'Tools', 'AI/ML'];

  const filteredSkills = activeCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 bg-[#0a0118]/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Technical Stack" 
          subtitle="My toolkit for solving problems and building scalable software." 
        />

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full border text-xs font-black uppercase tracking-widest transition-all ${
                activeCategory === cat 
                  ? 'bg-gradient-primary border-transparent text-white shadow-xl shadow-primary/20 scale-105' 
                  : 'glass border-white/5 text-textSecondary hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => {
              const IconComponent = (LucideIcons as any)[skill.icon] || LucideIcons.Terminal;
              const accentColor = skill.category === 'Frontend' ? 'accent' : skill.category === 'Backend' ? 'secondary' : skill.category === 'AI/ML' ? 'primary' : 'white';
              
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card p-6 rounded-3xl group hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-${accentColor}/10 rounded-2xl flex items-center justify-center text-${accentColor} group-hover:bg-${accentColor}/20 group-hover:rotate-6 transition-all`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <span className="font-bold text-white text-lg block">{skill.name}</span>
                      <span className="text-[10px] text-textSecondary uppercase tracking-widest font-black">{skill.category}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-bold text-textSecondary uppercase tracking-widest">
                      <span>Proficiency</span>
                      <span className="text-white">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r from-${accentColor} to-transparent opacity-80`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
