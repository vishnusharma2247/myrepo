'use client';

import { motion } from 'framer-motion';
import { RiCheckDoubleLine, RiArrowRightLine } from 'react-icons/ri';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Choose Your Path',
    description: 'Browse our 50+ certification programs designed by industry experts.',
  },
  {
    number: '02',
    title: 'Complete Projects',
    description: 'Work on real-world challenges with instant feedback and peer support.',
  },
  {
    number: '03',
    title: 'Get Certified',
    description: 'Earn industry-recognized credentials upon successful completion.',
  },
  {
    number: '04',
    title: 'Launch Career',
    description: 'Connect with opportunities and advance your engineering career.',
  },
];

const HowItWorks = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5">
            How CredPath Works
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Four simple steps to transform your engineering career
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="relative"
            >
              {/* Arrow connector for desktop only */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-8 text-[var(--accent-primary)]">
                  <RiArrowRightLine className="w-8 h-8" />
                </div>
              )}

              <div className="h-full p-7 md:p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--accent-primary)] text-white text-2xl font-bold mb-6">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-5 flex-grow">
                  {step.description}
                </p>

                {/* Check mark */}
                <div className="flex items-center gap-2 text-[var(--accent-primary)] font-semibold">
                  <RiCheckDoubleLine className="w-5 h-5" />
                  <span className="text-sm">Ready to start</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-primary)]/10 border-2 border-[var(--accent-primary)] text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Start learning today and take the first step towards your dream engineering role.
          </p>
          <Link href="/courses">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3.5 font-medium inline-flex items-center gap-2"
            >
              <span>Explore All Paths</span>
              <RiArrowRightLine className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
