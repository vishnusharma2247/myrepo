'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { RiMenu3Line, RiCloseLine, RiSunLine, RiMoonLine } from 'react-icons/ri';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

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

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-3 sm:top-4 left-0 right-0 z-50 px-3 sm:px-4"
      >
        <div className="w-full max-w-6xl mx-auto bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-[var(--border-color)] rounded-xl sm:rounded-2xl px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 shadow-lg">
          <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-6">
            {/* Logo */}
            <Link href="/" className="font-bold text-base sm:text-lg text-[var(--accent-primary)] hover:opacity-80 transition flex-shrink-0">
              CredPath
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-0.5 lg:gap-1">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-2.5 lg:px-3 py-1.5 sm:py-2 text-xs lg:text-sm font-medium rounded-lg whitespace-nowrap transition-all duration-200 ${
                      active
                        ? 'bg-[var(--accent-primary)] text-white shadow-sm'
                        : 'text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-secondary)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* Theme Toggle */}
              {mounted && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                  className="p-1.5 sm:p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? (
                    <RiMoonLine className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <RiSunLine className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </motion.button>
              )}

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 hover:bg-[var(--bg-secondary)] rounded-lg transition"
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
              className="md:hidden mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-[var(--border-color)]"
            >
              <div className="flex flex-col gap-1.5 sm:gap-2">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
                        active
                          ? 'bg-[var(--accent-primary)] text-white'
                          : 'text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Top Padding */}
      <div className="h-20 sm:h-24" />
    </>
  );
};

export default Navbar;
