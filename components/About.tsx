
import React from 'react';
import { motion } from 'framer-motion';
import { Download, Coffee, Code, Award, GraduationCap, Github, Linkedin, Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PERSONAL_INFO } from '../constants';

const StatCard = ({ icon: Icon, label, value, delay, color }: { icon: any, label: string, value: string, delay: number, color: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    viewport={{ once: true }}
    className="glass-card p-6 rounded-2xl text-center group hover:border-primary transition-all"
  >
    <div className={`w-12 h-12 bg-${color}/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-${color} group-hover:scale-110 transition-transform`}>
      <Icon size={24} />
    </div>
    <div className="text-2xl font-bold mb-1 font-display text-white">{value}</div>
    <div className="text-textSecondary text-[10px] uppercase font-bold tracking-[0.2em]">{label}</div>
  </motion.div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="About Me" 
          subtitle="Combining analytical thinking with creative problem-solving." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-square max-w-md mx-auto shadow-2xl shadow-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                alt="Shweta Sahu" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-backgroundDark/60 to-transparent" />
            </div>
            {/* Decoration */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary/40 rounded-tl-[3rem] z-0" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-secondary/40 rounded-br-[3rem] z-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white font-display leading-tight">
              A Final Year CSE Enthusiast <br />at <span className="text-primary">VIT University</span>
            </h3>
            <div className="space-y-6 text-textSecondary text-lg mb-12 leading-relaxed font-medium">
              <p>
                As a Computer Science Engineering student, I thrive on the challenge of building robust digital experiences. My core expertise lies in <span className="text-white font-bold">Data Structures & Algorithms</span>, evidenced by my high rankings and 500+ problems solved on LeetCode.
              </p>
              <p>
                I'm not just about logic; I love creating fluid, user-centric interfaces using the <span className="text-white font-bold">MERN Stack</span> and Next.js. I believe code should not only work efficiently but also look beautiful.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              <StatCard icon={Code} label="DSA Pro" value="500+" delay={0.1} color="primary" />
              <StatCard icon={Award} label="Badges" value="15+" delay={0.2} color="secondary" />
              <StatCard icon={Coffee} label="Daily Logic" value="100%" delay={0.3} color="accent" />
              <StatCard icon={GraduationCap} label="CGPA" value="9.2" delay={0.4} color="primary" />
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-primary text-white rounded-full font-bold transition-all shadow-lg shadow-primary/20 group"
              >
                <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                Resume
              </a>
              <div className="flex gap-3">
                <a href={PERSONAL_INFO.links.leetCode} target="_blank" className="w-14 h-14 glass rounded-full flex items-center justify-center text-textSecondary hover:text-white hover:bg-orange-500/20 transition-all border border-white/5"><Code2 size={24} /></a>
                <a href={PERSONAL_INFO.links.linkedIn} target="_blank" className="w-14 h-14 glass rounded-full flex items-center justify-center text-textSecondary hover:text-white hover:bg-blue-600/20 transition-all border border-white/5"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
