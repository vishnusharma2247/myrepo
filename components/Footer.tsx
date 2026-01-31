'use client';

import Link from 'next/link';
import { RiLinkedinBoxLine, RiInstagramLine, RiTwitterLine, RiYoutubeLine } from 'react-icons/ri';

const footerLinks = {
  Product: [
    { label: 'Courses', href: '/courses' },
    { label: 'Mentorship', href: '/mentorship' },
    { label: 'How It Works', href: '/how-it-works' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

const socialLinks = [
  { icon: RiLinkedinBoxLine, href: '#', label: 'LinkedIn' },
  { icon: RiInstagramLine, href: '#', label: 'Instagram' },
  { icon: RiTwitterLine, href: '#', label: 'Twitter' },
  { icon: RiYoutubeLine, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-container py-8 sm:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 md:col-span-2">
            <Link href="/" className="font-bold text-base sm:text-lg text-[var(--accent-primary)]">CredPath</Link>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-2 max-w-xs">
              Empowering engineers through certification paths and mentorship.
            </p>
            <div className="flex gap-2 mt-3 sm:mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-1.5 sm:p-2 bg-[var(--bg-secondary)] hover:bg-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-white rounded-lg transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-[var(--text-primary)] text-xs sm:text-sm mb-2 sm:mb-3">{title}</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs sm:text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-4 sm:pt-6 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[var(--text-muted)]">&copy; {currentYear} CredPath. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)]">Privacy</Link>
            <Link href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
