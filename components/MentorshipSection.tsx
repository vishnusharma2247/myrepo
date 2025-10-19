'use client';

import { motion } from 'framer-motion';
import { RiStarFill, RiMessageLine } from 'react-icons/ri';

const mentors = [
  {
    name: 'Dr. Priya Sharma',
    expertise: 'AI/ML',
    experience: '8 years',
    initials: 'PS',
    bio: 'ML Engineer at Leading Tech Corp',
    rating: 4.9,
  },
  {
    name: 'John Davidson',
    expertise: 'Cloud Architecture',
    experience: '10 years',
    initials: 'JD',
    bio: 'Senior Cloud Architect, AWS',
    rating: 4.8,
  },
  {
    name: 'Aisha Patel',
    expertise: 'DevOps Engineering',
    experience: '7 years',
    initials: 'AP',
    bio: 'DevOps Lead at Fortune 500',
    rating: 4.9,
  },
  {
    name: 'Marcus Chen',
    expertise: 'Cryptography',
    experience: '12 years',
    initials: 'MC',
    bio: 'Security Expert, Blockchain Specialist',
    rating: 5.0,
  },
  {
    name: 'Elena Rodriguez',
    expertise: 'IoT Systems',
    experience: '9 years',
    initials: 'ER',
    bio: 'IoT Engineer, Smart Systems',
    rating: 4.9,
  },
  {
    name: 'David Kim',
    expertise: 'Full-Stack Development',
    experience: '11 years',
    initials: 'DK',
    bio: 'Full-Stack Lead, Startup Founder',
    rating: 5.0,
  },
];

const MentorshipSection = () => {
  return (
    <section className="py-20 bg-[var(--bg-primary)]">
      <div className="max-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">Meet Your Mentors</h2>
          <p className="section-subtitle">
            Learn directly from industry veterans with years of hands-on experience at leading technology companies.
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid-responsive">
          {mentors.map((mentor, idx) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Mentor Card */}
              <div className="card h-full flex flex-col">
                {/* Avatar and Rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10 flex items-center justify-center">
                    <span className="font-semibold text-[var(--accent-primary)]">{mentor.initials}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <RiStarFill
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(mentor.rating) ? 'text-yellow-500' : 'text-[var(--border-color)]'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{mentor.name}</h3>
                <p className="text-[var(--accent-primary)] text-sm font-medium mb-2">{mentor.expertise}</p>

                {/* Bio */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 flex-grow">{mentor.bio}</p>

                {/* Experience */}
                <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm mb-4 pb-4 border-b border-[var(--border-color)]">
                  <span className="font-medium">{mentor.experience} experience</span>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-dark)] font-medium transition-colors"
                >
                  <RiMessageLine className="w-4 h-4" />
                  <span>Connect</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
