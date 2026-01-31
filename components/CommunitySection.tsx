'use client';

import { motion } from 'framer-motion';
import { RiTeamLine, RiHeartLine, RiTrophyLine, RiGlobalLine } from 'react-icons/ri';

const communityBenefits = [
  {
    icon: RiTeamLine,
    title: 'Learn Together',
    description: 'Join 10,000+ engineers in collaborative learning.',
  },
  {
    icon: RiHeartLine,
    title: 'Supportive Network',
    description: 'Get help from mentors and peers who support you.',
  },
  {
    icon: RiTrophyLine,
    title: 'Exclusive Events',
    description: 'Webinars, hackathons, and networking events.',
  },
  {
    icon: RiGlobalLine,
    title: 'Global Community',
    description: 'Connect with engineers from around the world.',
  },
];

const CommunitySection = () => {
  return (
    <section className="w-full section-spacing bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
      <div className="max-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center section-header"
        >
          <h2 className="section-title">Join Our Community</h2>
          <p className="section-desc mx-auto">
            Be part of a thriving community of engineers and professionals.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12"
        >
          {communityBenefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="card h-full flex flex-col text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg mx-auto mb-2 sm:mb-3" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-1 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed hidden sm:block">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="card border-2 border-[var(--accent-primary)] text-center p-4 sm:p-6 md:p-8" 
          style={{ background: 'linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.1))' }}
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-2 sm:mb-3">
            Ready to Join 10,000+ Learners?
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 max-w-2xl mx-auto">
            Start your learning journey today and become part of a community committed to professional growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary mx-auto"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
