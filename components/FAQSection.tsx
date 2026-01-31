'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';

const faqItems = [
  { id: 1, question: 'What are the prerequisites?', answer: 'Basic programming knowledge is helpful but not required. We provide foundational modules.' },
  { id: 2, question: 'How long are the certification paths?', answer: '6-10 weeks at 10-15 hours per week. Learn at your own pace with lifetime access.' },
  { id: 3, question: 'Are certifications recognized?', answer: 'Yes! Industry-recognized and designed with leading tech companies.' },
  { id: 4, question: 'Is job placement assistance provided?', answer: 'Yes! Resume review, interview prep, and connections to partner companies.' },
];

const FAQSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

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
          <h2 className="section-title">FAQ</h2>
          <p className="section-desc mx-auto">Common questions about our platform</p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-2 sm:space-y-3">
          {faqItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                className="w-full text-left card-standard"
              >
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                  <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">{item.question}</h3>
                  {expandedId === item.id ? (
                    <RiSubtractLine className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
                  ) : (
                    <RiAddLine className="w-4 h-4 text-[var(--text-secondary)] flex-shrink-0" />
                  )}
                </div>
                <AnimatePresence>
                  {expandedId === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-[var(--border-color)]"
                    >
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
