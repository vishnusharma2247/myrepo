'use client';

import { motion } from 'framer-motion';
import {
  RiBookOpenLine,
  RiBriefcaseLine,
  RiTeamLine,
  RiAwardLine,
} from 'react-icons/ri';

const FeaturesSection = () => {
  const features = [
    {
      icon: RiBookOpenLine,
      title: 'Structured Learning',
      description: 'Comprehensive modules with lifetime access to all course materials and updates.',
    },
    {
      icon: RiBriefcaseLine,
      title: 'Industry Projects',
      description: 'Real-world challenges that build a professional portfolio employers value.',
    },
    {
      icon: RiTeamLine,
      title: 'Mentorship',
      description: 'One-on-one guidance from experienced professionals in top tech companies.',
    },
    {
      icon: RiAwardLine,
      title: 'Certifications',
      description: 'Industry-recognized credentials that boost your career prospects.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="w-full py-20 md:py-28 bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5">
            Why Choose CredPath?
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Everything you need to advance your engineering career
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <div className="h-full p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] hover:shadow-lg transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-[var(--accent-primary)]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
