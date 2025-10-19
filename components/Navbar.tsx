'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMenu3Line, RiCloseLine, RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Mentorship', href: '/mentorship' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-4  -translate-x-1/2 z-50"
      >
        <div className="w-screen flex justify-center px-3 sm:px-4">
          <div className="w-full max-w-6xl bg-[var(--bg-primary)]/90 backdrop-blur-md border border-[var(--border-color)] rounded-2xl px-4 sm:px-6 py-3 shadow-lg">
            <div className="flex items-center justify-between gap-4 sm:gap-6">
              {/* Logo */}
              <Link href="/" className="font-bold text-base sm:text-lg md:text-xl text-[var(--accent-primary)] hover:opacity-80 transition flex-shrink-0 whitespace-nowrap">
                CredPath
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1 flex-wrap">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-secondary)] transition-all text-sm font-medium rounded-lg whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-2 ml-auto flex-shrink-0">
                {/* Theme Toggle */}
                {mounted && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                    className="p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition"
                    aria-label="Toggle theme"
                  >
                    {theme === 'light' ? (
                      <RiMoonLine className="w-5 h-5" />
                    ) : (
                      <RiSunLine className="w-5 h-5" />
                    )}
                  </motion.button>
                )}

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition"
                  aria-label="Toggle mobile menu"
                >
                  {mobileMenuOpen ? (
                    <RiCloseLine className="w-5 h-5" />
                  ) : (
                    <RiMenu3Line className="w-5 h-5" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-3 pt-3 border-t border-[var(--border-color)]"
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-2 text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-lg transition text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Top Padding */}
      <div className="h-24" />
    </>
  );
};

export default Navbar;
