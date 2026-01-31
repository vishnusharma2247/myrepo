'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { RiArrowRightLine } from 'react-icons/ri';

const Hero = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="w-full bg-[var(--bg-primary)] page-hero">
      <div className="max-container">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
          {/* Left - Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] leading-tight mb-3 sm:mb-4"
            >
              Build Your{' '}
              <span className="text-[var(--accent-primary)]">Engineering Career</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-5 sm:mb-6 max-w-md mx-auto lg:mx-0">
              Master skills through real-world projects, expert mentorship, and industry certifications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/courses">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  Explore Courses
                  <RiArrowRightLine className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/mentorship">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-outline w-full sm:w-auto"
                >
                  Find a Mentor
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="illustration-container"
            >
              <Image
                src="/illustrations/learning.svg"
                alt="Engineering Learning"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { number: '50+', label: 'Paths' },
            { number: '200+', label: 'Mentors' },
            { number: '10K+', label: 'Learners' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-4 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center"
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
