'use client'

import { motion } from 'framer-motion'
import { RiTimeLine, RiAwardLine, RiBookOpenLine, RiExternalLinkLine, RiCheckLine } from 'react-icons/ri'

interface CourseDetailProps {
  id: string
  title: string
  icon: string
}

const courseDetails: Record<string, any> = {
  ai: {
    title: 'Artificial Intelligence',
    description: 'Deep dive into neural networks, NLP, computer vision and advanced AI applications.',
    level: 'Advanced',
    duration: '8-10 Weeks',
    tasks: '15+ Tasks',
    highlights: ['Neural Networks', 'NLP', 'Computer Vision', 'Model Deployment'],
    tools: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI API'],
  },
  ml: {
    title: 'Machine Learning',
    description: 'Master ML algorithms, data preprocessing, feature engineering and model optimization.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    highlights: ['Supervised Learning', 'Clustering', 'Feature Engineering', 'Model Evaluation'],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Jupyter'],
  },
  'data-science': {
    title: 'Data Science',
    description: 'Learn data analysis, visualization, statistical modeling and business intelligence.',
    level: 'Intermediate',
    duration: '8-10 Weeks',
    tasks: '14+ Tasks',
    highlights: ['Data Wrangling', 'Statistical Analysis', 'Visualization', 'Dashboards'],
    tools: ['Python', 'Pandas', 'Tableau', 'SQL'],
  },
  'web-dev': {
    title: 'Web Development',
    description: 'Build modern websites with HTML, CSS, JavaScript and popular frameworks.',
    level: 'Beginner',
    duration: '6-8 Weeks',
    tasks: '10+ Tasks',
    highlights: ['HTML5 & CSS3', 'JavaScript', 'Responsive Design', 'Deployment'],
    tools: ['HTML', 'CSS', 'JavaScript', 'Git'],
  },
  reactjs: {
    title: 'ReactJS Developer',
    description: 'Master React.js, hooks, state management and build production-ready applications.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    highlights: ['React Hooks', 'State Management', 'API Integration', 'Testing'],
    tools: ['React', 'Redux', 'Next.js', 'Jest'],
  },
  javascript: {
    title: 'JavaScript Developer',
    description: 'Learn JavaScript from basics to advanced concepts including ES6+ and async programming.',
    level: 'Beginner',
    duration: '4-6 Weeks',
    tasks: '10+ Tasks',
    highlights: ['ES6+ Features', 'Async Programming', 'DOM Manipulation', 'Error Handling'],
    tools: ['JavaScript', 'Node.js', 'VS Code'],
  },
  android: {
    title: 'Android Development',
    description: 'Build native Android apps with Kotlin, Android Studio and Material Design.',
    level: 'Intermediate',
    duration: '8-10 Weeks',
    tasks: '14+ Tasks',
    highlights: ['Kotlin', 'Android SDK', 'Material Design', 'App Publishing'],
    tools: ['Kotlin', 'Android Studio', 'Firebase'],
  },
  flutter: {
    title: 'Flutter Developer',
    description: 'Create beautiful cross-platform apps with Flutter and Dart.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    highlights: ['Dart', 'Widgets', 'State Management', 'Cross-platform'],
    tools: ['Flutter', 'Dart', 'Firebase', 'Figma'],
  },
  python: {
    title: 'Python Programming',
    description: 'Learn Python from scratch - syntax, data structures, OOP and practical applications.',
    level: 'Beginner',
    duration: '4-6 Weeks',
    tasks: '10+ Tasks',
    highlights: ['Python Syntax', 'Data Structures', 'OOP', 'File Handling'],
    tools: ['Python', 'PyCharm', 'Jupyter'],
  },
  java: {
    title: 'Java Programming',
    description: 'Master Java fundamentals, OOP, collections and enterprise application development.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    highlights: ['OOP', 'Collections', 'Multithreading', 'Enterprise Basics'],
    tools: ['Java', 'IntelliJ IDEA', 'Maven'],
  },
  cpp: {
    title: 'C++ Programming',
    description: 'Learn C++ fundamentals, memory management, STL and system-level programming.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    highlights: ['Pointers', 'Memory Management', 'STL', 'System Programming'],
    tools: ['C++', 'Visual Studio', 'GCC'],
  },
  uiux: {
    title: 'UI/UX Design',
    description: 'Learn user interface design, user experience principles and design tools.',
    level: 'Beginner',
    duration: '4-6 Weeks',
    tasks: '8+ Tasks',
    highlights: ['Design Principles', 'Wireframing', 'Prototyping', 'User Research'],
    tools: ['Figma', 'Adobe XD', 'Miro'],
  },
}

// Google Form URL - replace with your actual form
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-id'

const CourseDetail = ({ id }: CourseDetailProps) => {
  const course = courseDetails[id] || courseDetails.ai

  return (
    <div className="w-full min-h-screen lg:h-screen bg-[var(--bg-primary)] overflow-auto lg:overflow-hidden flex items-start lg:items-center py-24 sm:py-28 lg:py-0 px-4 sm:px-6 lg:px-8">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start lg:items-center">
          {/* Left - Course Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent-primary)] text-white">
                {course.level}
              </span>
              <span className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full border border-[var(--border-color)] text-[var(--text-secondary)]">
                Task-Based Internship
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--text-primary)] mb-3 sm:mb-4 leading-tight">
              {course.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-4 sm:mb-6 leading-relaxed max-w-lg">
              {course.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <RiTimeLine className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <RiBookOpenLine className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>{course.tasks}</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                <RiAwardLine className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>Certificate</span>
              </div>
            </div>

            {/* What You'll Learn - Compact */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-2 sm:mb-3">What You&apos;ll Learn</h3>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {course.highlights.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <RiCheckLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="mb-6 sm:mb-8 hidden sm:block">
              <h3 className="text-xs sm:text-sm font-semibold text-[var(--text-primary)] mb-2 sm:mb-3">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {course.tools.map((tool: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Apply Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[var(--bg-secondary)] border-2 border-[var(--accent-primary)] shadow-xl">
              {/* Card Header */}
              <div className="text-center mb-4 sm:mb-6">
                <div className="text-2xl sm:text-3xl font-bold text-[var(--accent-primary)] mb-1">Free</div>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)]">Task-Based Internship Program</p>
              </div>

              {/* Features */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {[
                  'Complete real-world tasks',
                  'Get expert feedback',
                  'Earn verified certificate',
                  'Build your portfolio',
                  'Letter of Recommendation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-[var(--text-primary)]">
                    <RiCheckLine className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Apply Button */}
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary py-3 sm:py-4 text-sm sm:text-base font-semibold flex items-center justify-center gap-2"
                >
                  Apply Now
                  <RiExternalLinkLine className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </a>

              {/* Note */}
              <p className="text-xs text-center text-[var(--text-muted)] mt-3 sm:mt-4">
                Limited seats available. Apply now to secure your spot.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
