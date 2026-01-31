'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiSendPlaneLine, RiTimeLine, RiQuestionLine, RiTeamLine } from 'react-icons/ri';
import { useState } from 'react';

const contactInfo = [
  { icon: RiMailLine, title: 'Email Us', value: 'hello@credpath.com', desc: 'We respond within 24 hours' },
  { icon: RiPhoneLine, title: 'Call Us', value: '+1 (800) CREDPATH', desc: 'Mon-Fri, 9 AM - 6 PM EST' },
  { icon: RiMapPinLine, title: 'Visit Us', value: 'San Francisco, CA', desc: 'Tech Hub, Bay Area' },
];

const faqs = [
  { q: 'How long do internships take?', a: 'Most programs are 4-10 weeks depending on the domain.' },
  { q: 'Is there any fee?', a: 'All our task-based internships are completely free.' },
  { q: 'Will I get a certificate?', a: 'Yes, you receive a verified certificate upon completion.' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
                We&apos;re Here to Help
              </span>
              <h1 className="page-title">Get in <span className="text-[var(--accent-primary)]">Touch</span></h1>
              <p className="page-desc max-w-lg mx-auto lg:mx-0 mb-4 sm:mb-6">
                Have questions about our programs? Our team is here to help you 
                navigate your learning journey.
              </p>
              
              {/* Response Time */}
              <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                  <RiTimeLine className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-primary)]" />
                </div>
                <div className="text-left">
                  <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">Average Response Time</div>
                  <div className="text-xs text-[var(--text-secondary)]">Less than 4 hours during business hours</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <div className="illustration-container">
                <Image src="/illustrations/contact.svg" alt="Contact Us" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-spacing-sm bg-[var(--bg-secondary)] px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="card-standard text-center"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--accent-primary)]" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-1">{info.title}</h3>
                  <p className="text-sm sm:text-base font-medium text-[var(--accent-primary)] mb-1">{info.value}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{info.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + FAQ */}
      <section className="section-spacing px-4 sm:px-6 lg:px-8">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-primary)] mb-1">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-primary)] mb-1">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--text-primary)] mb-1">Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} required className="input-field">
                    <option value="">Select a subject</option>
                    <option value="internship">Internship Inquiry</option>
                    <option value="mentorship">Mentorship</option>
                    <option value="certificate">Certificate Issue</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[var(--text-primary)] mb-1">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="input-field" placeholder="How can we help you?" />
                </div>
                <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                  {submitted ? 'Message Sent!' : 'Send Message'}
                  <RiSendPlaneLine className="w-4 h-4" />
                </button>
                {submitted && (
                  <div className="p-3 border rounded-lg text-xs sm:text-sm text-green-600" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgb(16, 185, 129)' }}>
                    Thank you! We&apos;ll respond within 24 hours.
                  </div>
                )}
              </form>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">Quick Answers</h2>
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="card-standard">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <RiQuestionLine className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-1">{faq.q}</h3>
                        <p className="text-xs sm:text-sm text-[var(--text-secondary)]">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support Team */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl border-2 border-[var(--accent-primary)]" style={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent-primary)' }}>
                    <RiTeamLine className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">Need Immediate Help?</h3>
                    <p className="text-xs text-[var(--text-secondary)]">Our support team is available 24/7 for urgent queries.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
