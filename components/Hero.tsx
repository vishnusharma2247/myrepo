'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiArrowRightLine, RiShiningLine } from 'react-icons/ri';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="w-full min-h-screen bg-[var(--bg-primary)] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="badge-accent gap-2 px-4 py-2">
              <RiShiningLine className="w-4 h-4 flex-shrink-0" />
              <span className="text-sm">Industry-Recognized Certifications</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="w-full text-center mb-10 md:mb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[var(--text-primary)]">
              Build Your{' '}
              <span className="text-[var(--accent-primary)]">Engineering Career</span>
              {' '}with Certified Learning
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.div variants={itemVariants} className="w-full max-w-2xl mx-auto text-center mb-12">
            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
              Master industry-relevant skills through real-world projects, expert mentorship, and recognized certifications designed to launch your tech career.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div variants={itemVariants} className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-14">
            {[
              { title: 'Real-World Projects', desc: 'Build practical solutions' },
              { title: 'Expert Guidance', desc: 'Learn from industry pros' },
              { title: 'Verified Credentials', desc: 'Recognized by companies' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6 rounded-lg bg-[var(--bg-secondary)] hover:shadow-md transition-shadow duration-300">
                <h4 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-2">{item.title}</h4>
                <p className="text-sm sm:text-base text-[var(--text-secondary)]">{item.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20">
            <Link href="/courses">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-3.5 text-base font-medium flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore Learning Paths</span>
                <RiArrowRightLine className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="/mentorship">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline px-8 py-3.5 text-base font-medium whitespace-nowrap"
              >
                Connect with Mentors
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="w-full border-t border-b border-[var(--border-color)] py-12">
            <div className="grid grid-cols-3 gap-6 md:gap-12">
              {[
                { number: '50+', label: 'Certification Paths', subtext: 'covering all domains' },
                { number: '200+', label: 'Expert Mentors', subtext: 'from top tech companies' },
                { number: '10K+', label: 'Active Learners', subtext: 'worldwide community' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--accent-primary)] mb-1">{stat.number}</div>
                  <div className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-1">{stat.label}</div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)]">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
