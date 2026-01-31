'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { RiBookOpenLine, RiBriefcaseLine, RiTeamLine, RiAwardLine } from 'react-icons/ri';

const features = [
  { icon: RiBookOpenLine, title: 'Structured Learning', desc: 'Lifetime access to all materials' },
  { icon: RiBriefcaseLine, title: 'Industry Projects', desc: 'Build a professional portfolio' },
  { icon: RiTeamLine, title: 'Mentorship', desc: '1-on-1 expert guidance' },
  { icon: RiAwardLine, title: 'Certifications', desc: 'Industry-recognized credentials' },
];

const FeaturesSection = () => {
  return (
    <section className="w-full section-spacing bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="illustration-container"
            >
              <Image src="/illustrations/features.svg" alt="Features" fill className="object-contain" />
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="section-header text-center md:text-left"
            >
              <h2 className="section-title">Why Choose CredPath?</h2>
              <p className="section-desc mx-auto md:mx-0">Everything you need to advance your career</p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="card-feature"
                  >
                    <div className="icon-box mb-2 sm:mb-3">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-primary)]" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-1">{feature.title}</h3>
                    <p className="text-xs text-[var(--text-secondary)] hidden sm:block">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
