'use client';

import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { RiFlagLine, RiHeartLine, RiLightbulbLine, RiTeamLine } from 'react-icons/ri';

export default function AboutPage() {
  const values = [
    {
      icon: RiFlagLine,
      title: 'Mission-Driven',
      description: 'Empowering engineers through practical, industry-relevant learning experiences.',
    },
    {
      icon: RiHeartLine,
      title: 'Community First',
      description: 'Building a supportive community where engineers grow and succeed together.',
    },
    {
      icon: RiLightbulbLine,
      title: 'Innovation',
      description: 'Constantly evolving our platform to match industry demands and trends.',
    },
    {
      icon: RiTeamLine,
      title: 'Expert Mentorship',
      description: 'Connecting learners with industry professionals for personalized guidance.',
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[var(--text-primary)]">
              About <span className="text-[var(--accent-primary)]">CredPath</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Our mission is to transform how engineers learn and grow their careers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-[var(--text-primary)]">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="card"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--accent-primary)]/10">
                        <IconComponent className="h-6 w-6 text-[var(--accent-primary)]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">{value.title}</h3>
                      <p className="mt-2 text-[var(--text-secondary)]">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-[var(--text-primary)]">Our Story</h2>
          <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
            <p>
              CredPath was founded on a simple observation: many brilliant engineers struggle to bridge the gap between
              learning and career growth. Traditional courses teach concepts, but they don't always translate to
              real-world success.
            </p>
            <p>
              We decided to create a platform that combines hands-on project work, expert mentorship, and industry
              recognition. Every learner deserves guidance from someone who's been there, built that, and succeeded at
              it.
            </p>
            <p>
              Today, thousands of engineers have transformed their careers through CredPath. They've landed roles at
              leading companies, built impressive portfolios, and joined a supportive community of peers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
