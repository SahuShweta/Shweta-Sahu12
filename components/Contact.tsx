
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Code2, Zap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#0a0118]/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Whether you have a question or just want to connect, my inbox is always open." 
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 font-display">Contact Details</h3>
                
                <div className="space-y-8">
                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-textSecondary uppercase tracking-widest font-bold mb-1">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-primary transition-colors text-lg">{PERSONAL_INFO.email}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-textSecondary uppercase tracking-widest font-bold mb-1">Phone</p>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-secondary transition-colors text-lg">{PERSONAL_INFO.phone}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs text-textSecondary uppercase tracking-widest font-bold mb-1">Location</p>
                      <p className="text-white text-lg">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-sm font-bold text-textSecondary uppercase tracking-widest mb-6">Connect with me</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, link: PERSONAL_INFO.links.github, color: 'primary' },
                    { icon: Linkedin, link: PERSONAL_INFO.links.linkedIn, color: 'secondary' },
                    { icon: Code2, link: PERSONAL_INFO.links.leetCode, color: 'accent' },
                    { icon: Zap, link: PERSONAL_INFO.links.gfg, color: 'primary' }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.link}
                      target="_blank"
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center text-textSecondary hover:text-white hover:bg-primary transition-all hover:-translate-y-1"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-10 rounded-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-textSecondary uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-primary transition-colors text-white"
                    placeholder="Enter name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-textSecondary uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-primary transition-colors text-white"
                    placeholder="Enter email"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-bold text-textSecondary uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-primary transition-colors text-white"
                  placeholder="How can I help?"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-textSecondary uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-primary transition-colors text-white resize-none"
                  placeholder="Your message goes here..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-5 bg-gradient-primary disabled:opacity-50 text-white font-black uppercase tracking-widest rounded-xl transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-3 group"
              >
                {isSubmitting ? (
                   <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {isSuccess && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center font-bold">
                  ✓ Message sent! I'll be in touch soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
