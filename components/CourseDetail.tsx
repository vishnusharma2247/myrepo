'use client'

import { motion } from 'framer-motion'
import { RiTimeLine, RiAwardLine, RiBookOpenLine, RiExternalLinkLine, RiCheckLine, RiUserStarLine, RiStarFill, RiGroupLine, RiFileList3Line, RiRocketLine, RiBriefcaseLine, RiMailCheckLine } from 'react-icons/ri'

interface CourseDetailProps {
  id: string
  title: string
  icon: string
}

const courseDetails: Record<string, any> = {
  ai: {
    title: 'Artificial Intelligence',
    tagline: 'Master the future of technology',
    description: 'Deep dive into neural networks, NLP, computer vision and advanced AI applications. Build real-world AI solutions and get certified.',
    level: 'Advanced',
    duration: '8-10 Weeks',
    tasks: '15+ Tasks',
    rating: 4.9,
    enrolled: '2,500+',
    highlights: ['Neural Networks & Deep Learning', 'Natural Language Processing', 'Computer Vision & CNNs', 'Model Deployment & MLOps', 'Transformers & Attention', 'Reinforcement Learning Basics'],
    tools: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI API', 'Hugging Face', 'Docker'],
    outcomes: ['Build production-ready AI models', 'Deploy models to cloud platforms', 'Create NLP and CV applications'],
  },
  ml: {
    title: 'Machine Learning',
    tagline: 'Learn to make data-driven decisions',
    description: 'Master ML algorithms, data preprocessing, feature engineering and model optimization. Perfect foundation for AI careers.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    rating: 4.8,
    enrolled: '3,200+',
    highlights: ['Supervised & Unsupervised Learning', 'Feature Engineering', 'Model Evaluation & Tuning', 'Ensemble Methods', 'Dimensionality Reduction', 'Cross-Validation Techniques'],
    tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'Matplotlib'],
    outcomes: ['Build predictive models', 'Analyze complex datasets', 'Optimize model performance'],
  },
  'data-science': {
    title: 'Data Science',
    tagline: 'Turn data into actionable insights',
    description: 'Learn data analysis, visualization, statistical modeling and business intelligence. Become a data-driven decision maker.',
    level: 'Intermediate',
    duration: '8-10 Weeks',
    tasks: '14+ Tasks',
    rating: 4.8,
    enrolled: '4,100+',
    highlights: ['Data Wrangling & Cleaning', 'Statistical Analysis', 'Data Visualization', 'Business Intelligence', 'A/B Testing', 'Predictive Analytics'],
    tools: ['Python', 'Pandas', 'Tableau', 'SQL', 'Power BI', 'Excel'],
    outcomes: ['Create interactive dashboards', 'Perform statistical analysis', 'Present data-driven insights'],
  },
  'web-dev': {
    title: 'Web Development',
    tagline: 'Build the modern web',
    description: 'Build modern, responsive websites with HTML, CSS, JavaScript and popular frameworks. From basics to deployment.',
    level: 'Beginner',
    duration: '6-8 Weeks',
    tasks: '10+ Tasks',
    rating: 4.9,
    enrolled: '5,800+',
    highlights: ['HTML5 & Semantic Web', 'CSS3 & Flexbox/Grid', 'JavaScript ES6+', 'Responsive Design', 'Version Control with Git', 'Deployment & Hosting'],
    tools: ['HTML', 'CSS', 'JavaScript', 'Git', 'VS Code', 'Netlify'],
    outcomes: ['Build responsive websites', 'Deploy to production', 'Work with version control'],
  },
  reactjs: {
    title: 'ReactJS Developer',
    tagline: 'Master modern frontend development',
    description: 'Master React.js, hooks, state management and build production-ready applications. Industry-standard frontend skills.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    rating: 4.9,
    enrolled: '4,500+',
    highlights: ['React Fundamentals & JSX', 'Hooks & Custom Hooks', 'State Management (Redux)', 'API Integration', 'Testing with Jest', 'Next.js Basics'],
    tools: ['React', 'Redux', 'Next.js', 'Jest', 'Tailwind CSS', 'TypeScript'],
    outcomes: ['Build scalable React apps', 'Implement state management', 'Write testable components'],
  },
  javascript: {
    title: 'JavaScript Developer',
    tagline: 'The language of the web',
    description: 'Learn JavaScript from basics to advanced concepts including ES6+, async programming, and modern patterns.',
    level: 'Beginner',
    duration: '4-6 Weeks',
    tasks: '10+ Tasks',
    rating: 4.8,
    enrolled: '6,200+',
    highlights: ['ES6+ Modern Syntax', 'Async/Await & Promises', 'DOM Manipulation', 'Event Handling', 'Error Handling', 'Modules & Bundling'],
    tools: ['JavaScript', 'Node.js', 'VS Code', 'Chrome DevTools', 'npm', 'Webpack'],
    outcomes: ['Write modern JavaScript', 'Handle async operations', 'Build interactive UIs'],
  },
  android: {
    title: 'Android Development',
    tagline: 'Build apps for billions',
    description: 'Build native Android apps with Kotlin, Android Studio and Material Design. From UI to publishing.',
    level: 'Intermediate',
    duration: '8-10 Weeks',
    tasks: '14+ Tasks',
    rating: 4.7,
    enrolled: '2,100+',
    highlights: ['Kotlin Fundamentals', 'Android SDK & APIs', 'Material Design 3', 'Room Database', 'Firebase Integration', 'Play Store Publishing'],
    tools: ['Kotlin', 'Android Studio', 'Firebase', 'Gradle', 'Room', 'Retrofit'],
    outcomes: ['Build native Android apps', 'Integrate with backends', 'Publish to Play Store'],
  },
  flutter: {
    title: 'Flutter Developer',
    tagline: 'One codebase, every platform',
    description: 'Create beautiful cross-platform apps with Flutter and Dart. Build for iOS, Android, and web.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    rating: 4.8,
    enrolled: '2,800+',
    highlights: ['Dart Programming', 'Widget Architecture', 'State Management', 'Animations & UI', 'API Integration', 'Cross-platform Deployment'],
    tools: ['Flutter', 'Dart', 'Firebase', 'Figma', 'Provider', 'Bloc'],
    outcomes: ['Build cross-platform apps', 'Create beautiful UIs', 'Deploy to multiple platforms'],
  },
  python: {
    title: 'Python Programming',
    tagline: 'The most versatile language',
    description: 'Learn Python from scratch - syntax, data structures, OOP and practical applications. Perfect for beginners.',
    level: 'Beginner',
    duration: '4-6 Weeks',
    tasks: '10+ Tasks',
    rating: 4.9,
    enrolled: '7,500+',
    highlights: ['Python Syntax & Basics', 'Data Structures', 'Object-Oriented Programming', 'File I/O & Exceptions', 'Libraries & Packages', 'Automation Scripts'],
    tools: ['Python', 'PyCharm', 'Jupyter', 'pip', 'VS Code', 'Git'],
    outcomes: ['Write clean Python code', 'Build automation scripts', 'Work with libraries'],
  },
  java: {
    title: 'Java Programming',
    tagline: 'Enterprise-grade development',
    description: 'Master Java fundamentals, OOP, collections and enterprise application development basics.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    rating: 4.7,
    enrolled: '3,400+',
    highlights: ['Core Java & OOP', 'Collections Framework', 'Multithreading', 'Exception Handling', 'JDBC & Databases', 'Maven & Build Tools'],
    tools: ['Java', 'IntelliJ IDEA', 'Maven', 'JUnit', 'MySQL', 'Git'],
    outcomes: ['Build Java applications', 'Work with databases', 'Write testable code'],
  },
  cpp: {
    title: 'C++ Programming',
    tagline: 'Performance-critical development',
    description: 'Learn C++ fundamentals, memory management, STL and system-level programming.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    tasks: '12+ Tasks',
    rating: 4.6,
    enrolled: '1,800+',
    highlights: ['C++ Syntax & Basics', 'Pointers & References', 'Memory Management', 'STL Containers', 'OOP in C++', 'File Handling'],
    tools: ['C++', 'Visual Studio', 'GCC', 'CMake', 'GDB', 'Valgrind'],
    outcomes: ['Write efficient C++ code', 'Manage memory properly', 'Build system-level programs'],
  },
  uiux: {
    title: 'UI/UX Design',
    tagline: 'Design experiences that matter',
    description: 'Learn user interface design, user experience principles and industry-standard design tools.',
    level: 'Beginner',
    duration: '4-6 Weeks',
    tasks: '8+ Tasks',
    rating: 4.9,
    enrolled: '2,600+',
    highlights: ['Design Principles', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems'],
    tools: ['Figma', 'Adobe XD', 'Miro', 'Notion', 'Maze', 'Framer'],
    outcomes: ['Create user-centered designs', 'Build interactive prototypes', 'Conduct user research'],
  },
}

// Google Form URL - replace with your actual form
const GOOGLE_FORM_URL = 'https://forms.google.com/your-form-id'

const CourseDetail = ({ id }: CourseDetailProps) => {
  const course = courseDetails[id] || courseDetails.ai

  return (
    <div className="w-full min-h-screen bg-[var(--bg-primary)] pt-24 sm:pt-28 lg:pt-12 pb-32 lg:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* Left - Main Course Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Header */}
            <div className="mb-4 lg:mb-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[var(--accent-primary)] text-white">
                  {course.level}
                </span>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full border border-[var(--border-color)] text-[var(--text-secondary)]">
                  Task-Based Internship
                </span>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-600">
                  <RiStarFill className="w-3 h-3" />
                  <span className="text-xs font-semibold">{course.rating}</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-primary)] mb-1 leading-tight">
                {course.title}
              </h1>
              <p className="text-sm sm:text-base text-[var(--accent-primary)] font-medium mb-2">
                {course.tagline}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                {course.description}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-2 sm:gap-4 mb-4 lg:mb-6">
              {[
                { icon: RiTimeLine, label: 'Duration', value: course.duration },
                { icon: RiFileList3Line, label: 'Tasks', value: course.tasks },
                { icon: RiGroupLine, label: 'Enrolled', value: course.enrolled },
                { icon: RiAwardLine, label: 'Certificate', value: 'Included' },
              ].map((stat, idx) => {
                const Icon = stat.icon
                return (
                  <div key={idx} className="p-2 sm:p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--accent-primary)] mx-auto mb-1" />
                    <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">{stat.value}</div>
                    <div className="text-xs text-[var(--text-muted)] hidden sm:block">{stat.label}</div>
                  </div>
                )
              })}
            </div>

            {/* What You'll Learn */}
            <div className="mb-4 lg:mb-6">
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2 sm:mb-3 flex items-center gap-2">
                <RiBookOpenLine className="w-4 h-4 text-[var(--accent-primary)]" />
                What You&apos;ll Learn
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                {course.highlights.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <RiCheckLine className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Two Column: Tools & Outcomes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Tools */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <RiRocketLine className="w-4 h-4 text-[var(--accent-primary)]" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {course.tools.map((tool: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <RiBriefcaseLine className="w-4 h-4 text-[var(--accent-primary)]" />
                  Career Outcomes
                </h3>
                <div className="space-y-1.5">
                  {course.outcomes.map((outcome: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                      <RiCheckLine className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Apply Card (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 hidden lg:block"
          >
            <div className="sticky top-24 p-5 rounded-xl bg-[var(--bg-secondary)] border-2 border-[var(--accent-primary)] shadow-lg">
              {/* Card Header */}
              <div className="text-center mb-4 pb-4 border-b border-[var(--border-color)]">
                <div className="text-xl font-bold text-[var(--text-primary)] mb-1">Start Your Journey</div>
                <p className="text-xs text-[var(--text-secondary)]">Task-Based Internship Program</p>
              </div>

              {/* What's Included */}
              <div className="space-y-2.5 mb-5">
                {[
                  { icon: RiFileList3Line, text: 'Complete real-world tasks' },
                  { icon: RiUserStarLine, text: 'Get expert feedback' },
                  { icon: RiAwardLine, text: 'Earn verified certificate' },
                  { icon: RiBriefcaseLine, text: 'Build your portfolio' },
                  { icon: RiMailCheckLine, text: 'Letter of Recommendation' },
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-[var(--text-primary)]">
                      <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                        <Icon className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      </div>
                      <span>{item.text}</span>
                    </div>
                  )
                })}
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
                  className="w-full btn-primary py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
                >
                  Apply Now
                  <RiExternalLinkLine className="w-4 h-4" />
                </motion.button>
              </a>

              {/* Trust Badge */}
              <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-muted)]">
                  <RiGroupLine className="w-4 h-4" />
                  <span><strong className="text-[var(--text-secondary)]">{course.enrolled}</strong> already enrolled</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fixed Bottom Apply Button for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-[var(--bg-primary)] border-t border-[var(--border-color)] p-4 z-40">
        <div className="max-container">
          <div className="flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-[var(--text-primary)] truncate">{course.title}</p>
              <p className="text-xs text-[var(--text-secondary)]">{course.duration} • Certificate Included</p>
            </div>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="btn-primary py-2.5 px-5 text-sm font-semibold flex items-center gap-2 whitespace-nowrap"
              >
                Apply Now
                <RiExternalLinkLine className="w-4 h-4" />
              </motion.button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
