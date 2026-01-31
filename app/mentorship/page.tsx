'use client';

import Footer from '@/components/Footer';
import MentorshipSection from '@/components/MentorshipSection';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiUserStarLine, RiCalendarLine, RiMessage2Line } from 'react-icons/ri';

const benefits = [
  { icon: RiUserStarLine, text: 'Industry experts from top companies' },
  { icon: RiCalendarLine, text: 'Flexible scheduling that fits your time' },
  { icon: RiMessage2Line, text: 'Direct feedback on your projects' },
];

export default function MentorshipPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="page-hero pb-6 sm:pb-8">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent-primary)] text-white mb-3 sm:mb-4">
                1-on-1 Guidance
              </span>
              <h1 className="page-title">Mentorship <span className="text-[var(--accent-primary)]">Network</span></h1>
              <p className="page-desc max-w-lg mx-auto lg:mx-0 mb-4 sm:mb-6">
                Get personalized guidance from industry experts at Google, Amazon, Microsoft, and more. 
              </p>
              
              {/* Benefits */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[var(--text-secondary)] justify-center lg:justify-start">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--accent-primary)]" />
                      </div>
                      <span>{benefit.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="flex gap-4 sm:gap-6 justify-center lg:justify-start">
                {[
                  { value: '200+', label: 'Mentors' },
                  { value: '15K+', label: 'Sessions' },
                  { value: '4.9', label: 'Rating' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-bold text-[var(--accent-primary)]">{stat.value}</div>
                    <div className="text-xs text-[var(--text-secondary)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="illustration-container">
                <Image src="/illustrations/mentorship.svg" alt="Mentorship" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How Mentorship Works */}
      <section className="section-spacing-sm bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <h2 className="section-title text-center mb-6 sm:mb-8">How Mentorship Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {[
              { num: '1', title: 'Choose Your Mentor', desc: 'Browse profiles and select a mentor matching your goals.' },
              { num: '2', title: 'Schedule Sessions', desc: 'Book 1-on-1 video calls at times that work for you.' },
              { num: '3', title: 'Grow & Succeed', desc: 'Get feedback and support as you advance your career.' },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card-standard text-center"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[var(--accent-primary)] text-white flex items-center justify-center mx-auto mb-2 sm:mb-4 text-xs sm:text-sm font-bold">{step.num}</div>
                <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-1 sm:mb-2">{step.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] hidden sm:block">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <MentorshipSection />
      <Footer />
    </main>
  );
}
