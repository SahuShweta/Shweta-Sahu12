
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { JOURNEY } from '../constants';
import SectionHeading from './SectionHeading';
import { Experience as ExperienceType } from '../types';

// Fixed typing: Use React.FC to properly handle React-specific props like 'key'
// and used the imported Experience type for better type safety.
const TimelineItem: React.FC<{ item: ExperienceType; index: number }> = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative mb-12 md:mb-24 last:mb-0">
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
      
      <div className={`flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Timeline Dot */}
        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 border-4 border-[#0f172a] hidden md:block" />
        
        <motion.div 
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`w-full md:w-[45%] glass p-8 rounded-3xl hover:border-primary/30 transition-colors ${isEven ? 'text-right' : 'text-left'}`}
        >
          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
             {item.type === 'Work' ? <Briefcase size={18} className="text-primary" /> : <GraduationCap size={18} className="text-accent" />}
             <span className="text-xs font-bold tracking-widest uppercase text-textSecondary">{item.type}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1 font-display">{item.role}</h3>
          <p className="text-primary font-semibold mb-4">{item.company}</p>
          
          <div className={`flex items-center gap-2 text-textSecondary mb-6 ${isEven ? 'justify-end' : 'justify-start'}`}>
            <Calendar size={14} />
            <span className="text-sm">{item.duration}</span>
          </div>
          
          <ul className="space-y-2">
            {item.description.map((desc: string, i: number) => (
              <li key={i} className={`text-textSecondary leading-relaxed text-sm ${isEven ? 'flex flex-row-reverse gap-2' : 'flex gap-2'}`}>
                <span className="text-primary">•</span>
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <div className="hidden md:block md:w-[45%]" />
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="My Journey" 
          subtitle="A timeline of my professional growth, educational milestones, and key achievements." 
        />
        
        <div className="mt-20">
          {JOURNEY.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
