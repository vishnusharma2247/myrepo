'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiLinkedinBoxLine, RiInstagramLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Courses', href: '/courses' },
      { label: 'Mentorship', href: '/mentorship' },
      { label: 'How It Works', href: '/how-it-works' },
    ],
    Company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: RiLinkedinBoxLine, href: '#', label: 'LinkedIn' },
    { icon: RiInstagramLine, href: '#', label: 'Instagram' },
    { icon: RiTwitterLine, href: '#', label: 'Twitter' },
    { icon: RiYoutubeLine, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[var(--bg-primary)] text-[var(--text-secondary)] relative overflow-hidden">
      {/* Subtle top border */}
      <div className="h-px bg-[var(--border-color)]" />

      <div className="max-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-bold text-xl text-[var(--accent-primary)]">CredPath</span>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6 max-w-sm">
              Empowering the next generation of engineers through industry-driven certification paths, hands-on projects,
              and expert mentorship. Transform your career today.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 bg-[var(--bg-secondary)] hover:bg-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-white rounded-lg transition-all"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h4 className="font-semibold text-[var(--text-primary)] mb-6 text-sm">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-sm text-[var(--text-muted)]">
            &copy; {currentYear} CredPath. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">
              Terms
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
