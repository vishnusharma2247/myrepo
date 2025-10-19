'use client';

import { motion } from 'framer-motion';
import { RiStarFill } from 'react-icons/ri';

const testimonials = [
  {
    name: 'Alex Johnson',
    path: 'Cloud Computing',
    company: 'Amazon',
    quote:
      'CredPath transformed my career completely. The hands-on projects and expert mentorship gave me the confidence to land a senior engineer role at Amazon with a 40% salary increase.',
    initials: 'AJ',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    path: 'Machine Learning',
    company: 'Google',
    quote:
      'The industry-grade tasks were incredibly challenging and rewarding. Within 3 months of completing the ML path, I secured my dream role as an ML Engineer at Google.',
    initials: 'MG',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    path: 'DevOps Engineering',
    company: 'Microsoft',
    quote:
      'The mentor network at CredPath is unmatched. My mentor provided invaluable guidance throughout and helped me transition into DevOps at Microsoft.',
    initials: 'RK',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    path: 'AI & Deep Learning',
    company: 'OpenAI',
    quote:
      'The structured learning path and hands-on AI projects gave me the edge I needed. Now I work on cutting-edge AI projects at OpenAI.',
    initials: 'SC',
    rating: 5,
  },
  {
    name: 'Michael O\'Brien',
    path: 'IoT Systems',
    company: 'Tesla',
    quote: 'CredPath made complex IoT concepts accessible and practical. The certification became a key highlight on my resume when I joined Tesla.',
    initials: 'MO',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    path: 'Cryptography',
    company: 'Meta',
    quote:
      'The security-focused curriculum and real-world challenges prepared me perfectly. I landed my role at Meta as a Security Engineer right after completion.',
    initials: 'PP',
    rating: 5,
  },
];

const Testimonials = () => {
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
            Success Stories
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Real transformations from engineers who've launched their careers with CredPath
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="h-full p-7 md:p-8 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <RiStarFill key={i} className="w-5 h-5 text-yellow-500" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-[var(--accent-primary)]">{testimonial.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-[var(--text-primary)] text-sm">{testimonial.name}</p>
                    <p className="text-xs text-[var(--accent-primary)]">{testimonial.path}</p>
                    <p className="text-xs text-[var(--text-secondary)]">at {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
