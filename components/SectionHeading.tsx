
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-display text-gradient mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-textSecondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1.5 bg-gradient-to-right from-primary to-accent mx-auto mt-6 rounded-full" />
    </motion.div>
  );
};

export default SectionHeading;
