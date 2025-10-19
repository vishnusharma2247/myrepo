'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  RiArrowRightLine,
  RiTimeLine,
  RiUserLine,
  RiBrainLine,
  RiCloudLine,
  RiSettings5Line,
  RiWifiLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

const courses = [
  {
    id: 'ml',
    title: 'Machine Learning',
    category: 'AI',
    duration: '6-8 Weeks',
    level: 'Intermediate',
    students: '2.5K+',
    description: 'Master ML algorithms, data preprocessing, feature engineering, and model optimization.',
    icon: RiBrainLine,
  },
  {
    id: 'ai',
    title: 'AI & Deep Learning',
    category: 'AI',
    duration: '8-10 Weeks',
    level: 'Advanced',
    students: '1.8K+',
    description: 'Neural networks, NLP, computer vision, and production-grade AI applications.',
    icon: RiBrainLine,
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    category: 'Cloud',
    duration: '6-8 Weeks',
    level: 'Intermediate',
    students: '3.2K+',
    description: 'AWS, Azure, GCP mastery with hands-on deployment and infrastructure automation.',
    icon: RiCloudLine,
  },
  {
    id: 'devops',
    title: 'DevOps Engineering',
    category: 'DevOps',
    duration: '8-10 Weeks',
    level: 'Advanced',
    students: '1.2K+',
    description: 'CI/CD pipelines, containerization, Kubernetes, and enterprise deployment.',
    icon: RiSettings5Line,
  },
  {
    id: 'iot',
    title: 'IoT Systems',
    category: 'IoT',
    duration: '7-9 Weeks',
    level: 'Intermediate',
    students: '900+',
    description: 'Embedded systems, sensor networks, IoT protocols, and real-time processing.',
    icon: RiWifiLine,
  },
  {
    id: 'crypto',
    title: 'Cybersecurity',
    category: 'Security',
    duration: '8-10 Weeks',
    level: 'Advanced',
    students: '1.5K+',
    description: 'Encryption, blockchain, secure system design, and cryptographic protocols.',
    icon: RiShieldCheckLine,
  },
];

const categories = ['All', 'AI', 'Cloud', 'DevOps', 'IoT', 'Security'];

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCourses = activeCategory === 'All'
    ? courses
    : courses.filter((course) => course.category === activeCategory);

  return (
    <section className="w-full py-20 md:py-28 bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-14 md:mb-18"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-5">
            Certification Paths
          </h2>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Choose from industry-designed learning paths with real-world projects and mentorship
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-wrap gap-2 md:gap-3 justify-center mb-14 md:mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 md:px-7 py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeCategory === category
                  ? 'bg-[var(--accent-primary)] text-white shadow-lg'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] border border-[var(--border-color)]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredCourses.map((course, idx) => {
                const IconComponent = course.icon;
                return (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    whileHover={{ y: -6 }}
                  >
                    <Link href={`/courses/${course.id}`}>
                      <div className="h-full p-7 md:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)] hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer">
                        {/* Top Section */}
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div className="w-14 h-14 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-7 h-7 text-[var(--accent-primary)]" />
                          </div>
                          <span className="badge-accent text-xs px-3 py-1">
                            {course.level}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-4 line-clamp-2">
                          {course.title}
                        </h3>

                        {/* Meta Info */}
                        <div className="flex flex-col gap-2 text-sm text-[var(--text-secondary)] mb-5 pb-5 border-b border-[var(--border-color)]">
                          <div className="flex items-center gap-2">
                            <RiTimeLine className="w-4 h-4 flex-shrink-0 text-[var(--accent-primary)]" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <RiUserLine className="w-4 h-4 flex-shrink-0 text-[var(--accent-primary)]" />
                            <span>{course.students} learners</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-base text-[var(--text-secondary)] leading-relaxed flex-grow mb-5">
                          {course.description}
                        </p>

                        {/* CTA Link */}
                        <div className="flex items-center gap-2 text-[var(--accent-primary)] font-semibold hover:gap-3 transition-all duration-300">
                          <span>Explore Path</span>
                          <RiArrowRightLine className="w-5 h-5" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
