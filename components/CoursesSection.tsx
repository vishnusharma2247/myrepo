'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  RiArrowRightLine, 
  RiTimeLine, 
  RiBrainLine, 
  RiCodeLine, 
  RiSmartphoneLine, 
  RiBarChartBoxLine,
  RiLayoutLine,
  RiTerminalBoxLine,
  RiGlobalLine,
  RiAppStoreLine
} from 'react-icons/ri';

const courses = [
  // AI & Data
  { id: 'ai', title: 'Artificial Intelligence', category: 'AI & Data', duration: '8-10 Weeks', level: 'Advanced', icon: RiBrainLine },
  { id: 'ml', title: 'Machine Learning', category: 'AI & Data', duration: '6-8 Weeks', level: 'Intermediate', icon: RiBrainLine },
  { id: 'data-science', title: 'Data Science', category: 'AI & Data', duration: '8-10 Weeks', level: 'Intermediate', icon: RiBarChartBoxLine },
  // Web Development
  { id: 'web-dev', title: 'Web Development', category: 'Web', duration: '6-8 Weeks', level: 'Beginner', icon: RiGlobalLine },
  { id: 'reactjs', title: 'ReactJS Developer', category: 'Web', duration: '6-8 Weeks', level: 'Intermediate', icon: RiCodeLine },
  { id: 'javascript', title: 'JavaScript Developer', category: 'Web', duration: '4-6 Weeks', level: 'Beginner', icon: RiTerminalBoxLine },
  // Mobile Development
  { id: 'android', title: 'Android Development', category: 'Mobile', duration: '8-10 Weeks', level: 'Intermediate', icon: RiSmartphoneLine },
  { id: 'flutter', title: 'Flutter Developer', category: 'Mobile', duration: '6-8 Weeks', level: 'Intermediate', icon: RiAppStoreLine },
  // Programming Languages
  { id: 'python', title: 'Python Programming', category: 'Languages', duration: '4-6 Weeks', level: 'Beginner', icon: RiTerminalBoxLine },
  { id: 'java', title: 'Java Programming', category: 'Languages', duration: '6-8 Weeks', level: 'Intermediate', icon: RiCodeLine },
  { id: 'cpp', title: 'C++ Programming', category: 'Languages', duration: '6-8 Weeks', level: 'Intermediate', icon: RiTerminalBoxLine },
  // Design
  { id: 'uiux', title: 'UI/UX Design', category: 'Design', duration: '4-6 Weeks', level: 'Beginner', icon: RiLayoutLine },
];

const categories = ['All', 'AI & Data', 'Web', 'Mobile', 'Languages', 'Design'];

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredCourses = activeCategory === 'All' ? courses : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="w-full section-spacing bg-[var(--bg-primary)] px-4 sm:px-6 lg:px-8">
      <div className="max-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center section-header"
        >
          <h2 className="section-title">Certification Paths</h2>
          <p className="section-desc mx-auto">Industry-designed paths with real projects</p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-6 sm:mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-primary)]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
          >
            {filteredCourses.map((course, idx) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                >
                  <Link href={`/courses/${course.id}`}>
                    <div className="card-standard h-full flex flex-col cursor-pointer hover:shadow-md">
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="icon-box">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-primary)]" />
                        </div>
                        <span className="text-xs px-2 py-0.5 sm:py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                          {course.level}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-semibold text-[var(--text-primary)] mb-1 sm:mb-2">{course.title}</h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-secondary)] mb-3 sm:mb-4">
                        <RiTimeLine className="w-3 h-3" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="mt-auto flex items-center gap-1 text-xs sm:text-sm text-[var(--accent-primary)] font-medium">
                        <span>View Details</span>
                        <RiArrowRightLine className="w-3 h-3 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CoursesSection;
