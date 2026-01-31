'use client';

import { motion } from 'framer-motion';
import { RiStarFill, RiLinkedinBoxFill, RiBriefcaseLine } from 'react-icons/ri';

const mentors = [
  { 
    name: 'Dr. Priya Sharma', 
    role: 'ML Engineering Lead',
    company: 'Google',
    expertise: 'AI/ML', 
    experience: '8 yrs', 
    initials: 'PS', 
    rating: 4.9,
    sessions: 245,
    bio: 'PhD in Machine Learning. Led AI teams building recommendation systems at scale.'
  },
  { 
    name: 'John Davidson', 
    role: 'Principal Architect',
    company: 'AWS',
    expertise: 'Cloud Architecture', 
    experience: '10 yrs', 
    initials: 'JD', 
    rating: 4.8,
    sessions: 312,
    bio: 'AWS certified solutions architect. Designed systems handling millions of requests.'
  },
  { 
    name: 'Aisha Patel', 
    role: 'DevOps Lead',
    company: 'Netflix',
    expertise: 'DevOps & SRE', 
    experience: '7 yrs', 
    initials: 'AP', 
    rating: 4.9,
    sessions: 189,
    bio: 'SRE expert. Built CI/CD pipelines and monitoring systems for streaming platforms.'
  },
];

const MentorshipSection = () => {
  return (
    <section className="section-spacing bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-8">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center section-header"
        >
          <h2 className="section-title">Meet Your Mentors</h2>
          <p className="section-desc mx-auto">Industry veterans from top tech companies</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mentors.map((mentor, idx) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="card-standard"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary)' }}>
                    {mentor.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] truncate">{mentor.name}</h3>
                    <p className="text-xs text-[var(--accent-primary)] truncate">{mentor.role}</p>
                  </div>
                </div>
                <RiLinkedinBoxFill className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--text-muted)] hover:text-[var(--accent-primary)] cursor-pointer flex-shrink-0" />
              </div>

              {/* Company & Rating */}
              <div className="flex items-center justify-between mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                  <RiBriefcaseLine className="w-3 h-3" />
                  <span>{mentor.company}</span>
                  <span className="mx-1 hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{mentor.experience}</span>
                </div>
                <div className="flex items-center gap-1">
                  <RiStarFill className="w-3 h-3 text-yellow-500" />
                  <span className="text-xs font-medium text-[var(--text-primary)]">{mentor.rating}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-xs text-[var(--text-secondary)] mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-none">{mentor.bio}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-[var(--text-muted)]">{mentor.sessions} sessions</span>
                <span className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-[var(--bg-secondary)] text-[var(--accent-primary)] border border-[var(--border-color)]">
                  {mentor.expertise}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
