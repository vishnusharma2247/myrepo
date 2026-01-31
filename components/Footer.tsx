'use client';

import Link from 'next/link';
import { RiLinkedinBoxLine, RiInstagramLine, RiTwitterLine, RiYoutubeLine, RiMailLine, RiMapPinLine, RiArrowRightLine } from 'react-icons/ri';

const footerLinks = {
  Programs: [
    { label: 'AI & Machine Learning', href: '/courses/ai' },
    { label: 'Web Development', href: '/courses/web-dev' },
    { label: 'Mobile Development', href: '/courses/android' },
    { label: 'Data Science', href: '/courses/data-science' },
  ],
  Resources: [
    { label: 'All Courses', href: '/courses' },
    { label: 'Mentorship', href: '/mentorship' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'FAQ', href: '/how-it-works#faq' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/contact' },
    { label: 'Blog', href: '/contact' },
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
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)]">
      {/* Main Footer */}
      <div className="max-container py-10 sm:py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 sm:gap-10">
          {/* Brand Section */}
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <span className="font-bold text-xl sm:text-2xl text-[var(--accent-primary)]">CredPath</span>
            </Link>
            <p className="text-sm text-[var(--text-secondary)] mt-3 mb-4 max-w-xs leading-relaxed">
              Transform your career with task-based internships, expert mentorship, and industry-recognized certifications.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <RiMailLine className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>hello@credpath.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <RiMapPinLine className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 flex items-center justify-center bg-[var(--bg-primary)] hover:bg-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-white rounded-lg transition-all duration-200 border border-[var(--border-color)] hover:border-[var(--accent-primary)]"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <RiArrowRightLine className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-4">Stay Updated</h4>
            <p className="text-sm text-[var(--text-secondary)] mb-3">Get the latest updates on new courses and programs.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 text-sm bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg focus:outline-none focus:border-[var(--accent-primary)] text-[var(--text-primary)] placeholder-[var(--text-muted)]"
              />
              <button className="px-3 py-2 bg-[var(--accent-primary)] text-white rounded-lg hover:bg-[var(--accent-dark)] transition-colors">
                <RiArrowRightLine className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-[var(--border-color)]">
          {[
            { value: '50,000+', label: 'Engineers Trained' },
            { value: '200+', label: 'Expert Mentors' },
            { value: '50+', label: 'Learning Paths' },
            { value: '95%', label: 'Success Rate' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-lg sm:text-xl font-bold text-[var(--accent-primary)]">{stat.value}</div>
              <div className="text-xs text-[var(--text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
        <div className="max-container py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-[var(--text-muted)]">
              &copy; {currentYear} CredPath. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">Terms of Service</Link>
              <Link href="#" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
