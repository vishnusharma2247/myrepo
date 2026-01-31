'use client';

import { motion } from 'framer-motion';
import { RiArrowRightLine } from 'react-icons/ri';
import Link from 'next/link';

const steps = [
  { number: '01', title: 'Choose Path', desc: 'Browse 50+ programs', color: 'bg-blue-500' },
  { number: '02', title: 'Build Projects', desc: 'Real-world challenges', color: 'bg-green-500' },
  { number: '03', title: 'Get Certified', desc: 'Earn credentials', color: 'bg-amber-500' },
  { number: '04', title: 'Launch Career', desc: 'Find opportunities', color: 'bg-purple-500' },
];

const HowItWorks = () => {
  return (
    <section className="w-full section-spacing bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
      <div className="max-container">
        {/* Steps */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="card-standard"
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${step.color} text-white text-xs sm:text-sm font-bold flex items-center justify-center mb-2 sm:mb-3`}>
                {step.number}
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-1">{step.title}</h3>
              <p className="text-xs text-[var(--text-secondary)] hidden sm:block">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-4 sm:p-6 rounded-xl text-center" 
          style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.3)' }}
        >
          <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-1 sm:mb-2">Ready to Start?</h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mb-3 sm:mb-4">Begin your journey today</p>
          <Link href="/courses">
            <button className="btn-primary inline-flex items-center gap-2">
              Explore Paths
              <RiArrowRightLine className="w-4 h-4" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
