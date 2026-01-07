
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Flame, Award, ExternalLink, Zap } from 'lucide-react';
import { CODING_STATS, PERSONAL_INFO } from '../constants';
import SectionHeading from './SectionHeading';

const AchievementCard = ({ title, value, icon: Icon, platform, color }: { title: string, value: string, icon: any, platform: string, color: string }) => (
  <motion.div
    whileHover={{ scale: 1.05, translateY: -5 }}
    className="glass-card p-6 rounded-2xl relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}/10 rounded-bl-full -mr-8 -mt-8 group-hover:bg-${color}/20 transition-colors`} />
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-${color} bg-${color}/10`}>
      <Icon size={24} />
    </div>
    <p className="text-xs text-textSecondary uppercase tracking-widest mb-1">{platform}</p>
    <h4 className="text-2xl font-bold text-white mb-1">{value}</h4>
    <p className="text-sm text-textSecondary">{title}</p>
  </motion.div>
);

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 px-4 bg-[#0a0118]/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Competitive Excellence" 
          subtitle="Showcasing my journey and consistency in problem-solving across leading platforms." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <AchievementCard 
            platform="LeetCode" 
            title="Problems Solved" 
            value={CODING_STATS.leetCode.totalSolved} 
            icon={Code2} 
            color="primary"
          />
          <AchievementCard 
            platform="LeetCode" 
            title="Problem Solving Rank" 
            value={CODING_STATS.leetCode.rank} 
            icon={Trophy} 
            color="secondary"
          />
          <AchievementCard 
            platform="GeeksforGeeks" 
            title="Problems Solved" 
            value={CODING_STATS.gfg.problemsSolved} 
            icon={Zap} 
            color="accent"
          />
          <AchievementCard 
            platform="Platform Sync" 
            title="Active Streak" 
            value={CODING_STATS.leetCode.streak} 
            icon={Flame} 
            color="orange-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award className="text-primary" />
              Coding Profiles
            </h3>
            <div className="space-y-4">
              <a href={PERSONAL_INFO.links.leetCode} target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500">
                    <Code2 size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">LeetCode Profile</p>
                    <p className="text-xs text-textSecondary">500+ Problems | Knight Rank</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-textSecondary group-hover:text-white transition-colors" />
              </a>
              <a href={PERSONAL_INFO.links.gfg} target="_blank" className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">GeeksforGeeks</p>
                    <p className="text-xs text-textSecondary">Coding Score: 1200+</p>
                  </div>
                </div>
                <ExternalLink size={18} className="text-textSecondary group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Proficiency Graph */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Trophy className="text-secondary" />
              DSA Mastery
            </h3>
            <div className="space-y-6">
              {CODING_STATS.leetCode.categories.map((cat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-textSecondary">{cat.name}</span>
                    <span className="text-white font-mono">{cat.value}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.value}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
