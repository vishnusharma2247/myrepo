'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

const faqItems = [
  {
    id: 1,
    question: 'What are the prerequisites for enrolling in CredPath courses?',
    answer:
      'Most of our courses are designed for beginners and intermediate learners. Basic knowledge of programming is helpful but not required for most paths. We provide foundational modules to get you started.',
  },
  {
    id: 2,
    question: 'How long do the certification paths take to complete?',
    answer:
      'Each certification path is designed to be completed in 6-10 weeks with 10-15 hours per week of commitment. However, you can learn at your own pace and take as long as you need. Lifetime access ensures you can revisit materials anytime.',
  },
  {
    id: 3,
    question: 'Are the certifications recognized by employers?',
    answer:
      'Yes! Our certifications are industry-recognized and designed in partnership with leading tech companies. They demonstrate hands-on expertise and are valued by employers across the industry.',
  },
  {
    id: 4,
    question: 'Do you provide job placement assistance after completion?',
    answer:
      'Absolutely! We offer resume review, interview preparation, and connections to our partner companies. Many of our graduates have successfully landed roles at top tech companies.',
  },
  {
    id: 5,
    question: 'Can I get a refund if I change my mind?',
    answer:
      'Since all our courses are completely free, there are no refunds needed. You can start, pause, or resume whenever you want with full access to all materials.',
  },
  {
    id: 6,
    question: 'How often are new courses added?',
    answer:
      'We regularly add new certification paths and update existing ones based on industry trends. Check back frequently for new courses aligned with emerging technologies and skills.',
  },
];

const FAQSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="w-full py-16 sm:py-24 bg-[var(--bg-primary)]">
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
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Find answers to common questions about our certification paths and learning platform.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <motion.button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full text-left"
              >
                <div className="card hover:border-[var(--accent-primary)] transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] leading-relaxed">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 mt-1">
                      {expandedId === item.id ? (
                        <RiSubtractLine className="w-5 h-5 text-[var(--accent-primary)]" />
                      ) : (
                        <RiAddLine className="w-5 h-5 text-[var(--text-secondary)]" />
                      )}
                    </div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-[var(--border-color)]"
                      >
                        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
