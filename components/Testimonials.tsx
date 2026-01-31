'use client';

import { motion } from 'framer-motion';
import { RiStarFill, RiDoubleQuotesL } from 'react-icons/ri';

const testimonials = [
  { 
    name: 'Alex Johnson', 
    role: 'Senior Cloud Engineer',
    path: 'Cloud Computing', 
    company: 'Amazon', 
    quote: 'The task-based approach was exactly what I needed. Instead of just watching videos, I was actually building real infrastructure. Landed a senior role at AWS with a 40% salary increase.', 
    initials: 'AJ',
    salary: '+40%'
  },
  { 
    name: 'Maria Garcia', 
    role: 'ML Engineer',
    path: 'Machine Learning', 
    company: 'Google', 
    quote: 'CredPath helped me transition from data analyst to ML Engineer. The mentorship was incredible - my mentor reviewed every project and gave detailed feedback.', 
    initials: 'MG',
    salary: '+55%'
  },
  { 
    name: 'Rajesh Kumar', 
    role: 'DevOps Lead',
    path: 'DevOps Engineering', 
    company: 'Microsoft', 
    quote: 'Coming from a traditional IT background, the hands-on tasks and direct mentor access made all the difference. Now leading a DevOps team of 8 at Microsoft.', 
    initials: 'RK',
    salary: '+65%'
  },
];

const Testimonials = () => {
  return (
    <section className="section-spacing bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
      <div className="max-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center section-header"
        >
          <h2 className="section-title">Success Stories</h2>
          <p className="section-desc mx-auto">Real engineers who transformed their careers</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="card-standard flex flex-col"
            >
              {/* Quote Icon & Stars */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <RiDoubleQuotesL className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--accent-primary)] opacity-30" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <RiStarFill key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4 sm:mb-6 flex-grow line-clamp-4 sm:line-clamp-none">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-[var(--border-color)]">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-semibold flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary)' }}>
                  {t.initials}
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] truncate">{t.name}</p>
                  <p className="text-xs text-[var(--text-secondary)] truncate">{t.role} at {t.company}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-base sm:text-lg font-bold text-green-500">{t.salary}</div>
                  <div className="text-xs text-[var(--text-muted)]">Salary</div>
                </div>
              </div>

              {/* Path Badge */}
              <div className="mt-3 sm:mt-4">
                <span className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-[var(--bg-secondary)] text-[var(--accent-primary)] border border-[var(--border-color)]">
                  {t.path}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
