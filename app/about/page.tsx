'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiFlagLine, RiHeartLine, RiLightbulbLine, RiTeamLine, RiCheckLine, RiAwardLine, RiGlobalLine, RiRocketLine } from 'react-icons/ri';

const values = [
  { icon: RiFlagLine, title: 'Mission-Driven', desc: 'Practical, industry-relevant learning that impacts careers.' },
  { icon: RiHeartLine, title: 'Community First', desc: '50,000+ engineers supporting each other.' },
  { icon: RiLightbulbLine, title: 'Innovation', desc: 'Constantly evolving curriculum to match industry.' },
  { icon: RiTeamLine, title: 'Expert Mentorship', desc: 'Guidance from top tech company professionals.' },
];

const stats = [
  { value: '50K+', label: 'Engineers' },
  { value: '200+', label: 'Mentors' },
  { value: '95%', label: 'Completion' },
  { value: '4.9/5', label: 'Rating' },
];

const milestones = [
  { year: '2021', title: 'Founded', desc: 'Started with a vision to bridge learning and careers.' },
  { year: '2022', title: '10K Learners', desc: 'Reached our first major milestone.' },
  { year: '2023', title: 'Enterprise', desc: 'Partnered with Fortune 500 companies.' },
  { year: '2024', title: 'Global', desc: 'Expanded to 50+ countries.' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="page-hero pb-6 sm:pb-8">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent-primary)] text-white mb-3 sm:mb-4">
                Our Story
              </span>
              <h1 className="page-title">About <span className="text-[var(--accent-primary)]">CredPath</span></h1>
              <p className="page-desc max-w-lg mx-auto lg:mx-0 mb-4 sm:mb-6">
                We transform how engineers learn through task-based internships, 
                expert mentorship, and industry-recognized certifications.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-2 sm:p-3 rounded-lg bg-[var(--bg-secondary)]">
                    <div className="text-base sm:text-xl font-bold text-[var(--accent-primary)]">{stat.value}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="illustration-container">
                <Image src="/illustrations/about.svg" alt="About CredPath" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-spacing bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center section-header"
          >
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-desc mx-auto">What drives us every day</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="card-standard flex gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent-primary)]" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-1">{value.title}</h3>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)]">{value.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center section-header"
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="section-desc mx-auto">Key milestones in our growth</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card-standard text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-[var(--accent-primary)] mb-1 sm:mb-2">{milestone.year}</div>
                <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-1">{milestone.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] hidden sm:block">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-spacing-sm bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="section-title mb-3 sm:mb-4">What Makes Us Different</h2>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-4 sm:mb-6 max-w-lg mx-auto lg:mx-0">
                Unlike traditional courses, we believe in learning by doing. 
                Every task is a real-world challenge that prepares you for your career.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {['Task-based learning, not passive videos', 'Expert mentors from FAANG', 'Industry-recognized certifications', 'Direct job placement support'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[var(--text-primary)] justify-center lg:justify-start">
                    <RiCheckLine className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {[
                { icon: RiAwardLine, title: 'Certified', desc: 'Industry Recognition' },
                { icon: RiGlobalLine, title: '50+ Countries', desc: 'Global Community' },
                { icon: RiTeamLine, title: '200+ Mentors', desc: 'Expert Network' },
                { icon: RiRocketLine, title: 'Fast Track', desc: 'Career Growth' },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="card-standard text-center">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--accent-primary)] mx-auto mb-1 sm:mb-2" />
                    <div className="text-sm sm:text-base font-bold text-[var(--text-primary)]">{item.title}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{item.desc}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
