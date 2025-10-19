'use client';

import { motion } from 'framer-motion';
import { RiTeamLine, RiHeartLine, RiTrophyLine, RiGlobalLine } from 'react-icons/ri';

const communityBenefits = [
  {
    icon: RiTeamLine,
    title: 'Learn Together',
    description: 'Join 10,000+ engineers in collaborative learning. Share knowledge, solve problems, and grow together.',
  },
  {
    icon: RiHeartLine,
    title: 'Supportive Network',
    description: 'Get help from mentors and peers. Our community is dedicated to supporting your success.',
  },
  {
    icon: RiTrophyLine,
    title: 'Exclusive Events',
    description: 'Participate in webinars, hackathons, and networking events exclusive to CredPath members.',
  },
  {
    icon: RiGlobalLine,
    title: 'Global Community',
    description: 'Connect with engineers from around the world and expand your professional network globally.',
  },
];

const CommunitySection = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[var(--bg-secondary)]">
      <div className="max-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4">
            Join Our Community
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Be part of a thriving community of engineers, learners, and industry professionals dedicated to growth and mutual success.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {communityBenefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: '-100px' }}
                whileHover={{ y: -8 }}
              >
                <div className="card h-full flex flex-col text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-[var(--accent-primary)]/10 mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
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
          viewport={{ once: true, margin: '-100px' }}
          className="card bg-gradient-to-r from-[var(--accent-primary)]/5 to-[var(--accent-primary)]/10 border-2 border-[var(--accent-primary)] text-center p-8 sm:p-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-3">
            Ready to Join 10,000+ Learners?
          </h3>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
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
