'use client';

import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiSendPlaneLine } from 'react-icons/ri';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: RiMailLine,
      title: 'Email',
      value: 'hello@credpath.com',
      description: 'We reply within 24 hours',
    },
    {
      icon: RiPhoneLine,
      title: 'Phone',
      value: '+1 (800) CREDPATH',
      description: 'Available Mon-Fri, 9 AM-6 PM EST',
    },
    {
      icon: RiMapPinLine,
      title: 'Address',
      value: 'San Francisco, CA',
      description: 'Tech Hub, Bay Area',
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[var(--text-primary)]">Get in Touch</h1>
            <p className="text-xl text-[var(--text-secondary)]">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--bg-secondary)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, idx) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="card text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--accent-primary)]/10">
                      <IconComponent className="w-6 h-6 text-[var(--accent-primary)]" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{info.title}</h3>
                  <p className="font-medium text-[var(--accent-primary)] mb-1">{info.value}</p>
                  <p className="text-sm text-[var(--text-secondary)]">{info.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-field"
              >
                <option value="">Select a subject</option>
                <option value="course">Course Inquiry</option>
                <option value="mentorship">Mentorship</option>
                <option value="partnership">Partnership</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="input-field"
                placeholder="Tell us what you think..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
              <RiSendPlaneLine className="w-4 h-4" />
            </motion.button>

            {/* Success Message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-[var(--success)]/10 border border-[var(--success)] rounded-lg text-[var(--success)]"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
