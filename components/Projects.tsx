
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter, Code2, Globe } from 'lucide-react';
import { PROJECTS } from '../constants';
import SectionHeading from './SectionHeading';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Mobile' | 'AI/ML' | 'Cloud'>('All');
  const categories: ('All' | 'Web' | 'Mobile' | 'AI/ML' | 'Cloud')[] = ['All', 'Web', 'Mobile', 'AI/ML', 'Cloud'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 bg-[#0a0118]/60">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Innovative Solutions" 
          subtitle="A curated showcase of my technical projects across different domains." 
        />

        <div className="flex items-center justify-center gap-4 mb-16 overflow-x-auto no-scrollbar pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 whitespace-nowrap rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? 'bg-gradient-primary text-white shadow-xl shadow-primary/20 scale-105' 
                  : 'glass text-textSecondary hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#1a0b2e]/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/40 transition-all shadow-2xl"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b2e] via-[#1a0b2e]/20 to-transparent opacity-60" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className="px-4 py-1.5 glass rounded-full text-[10px] font-black uppercase tracking-widest text-white border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-10 -mt-8 relative z-10 bg-gradient-to-t from-[#1a0b2e] to-transparent">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-lg border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-white font-display">{project.title}</h3>
                  <p className="text-textSecondary mb-8 line-clamp-2 text-lg font-medium leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 text-textSecondary hover:text-white transition-colors group/link">
                        <Github size={20} className="group-hover/link:rotate-12 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-widest">Source</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 text-textSecondary hover:text-white transition-colors group/link">
                        <Globe size={20} className="group-hover/link:scale-110 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-widest">Demo</span>
                      </a>
                    )}
                    <div className="ml-auto w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-all">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>

                {/* Hover Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
