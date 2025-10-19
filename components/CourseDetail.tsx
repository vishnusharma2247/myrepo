'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { RiCheckDoubleLine, RiTeamLine, RiTimeLine, RiAwardLine, RiBookOpenLine, RiArrowRightLine } from 'react-icons/ri'

interface CourseDetailProps {
  id: string
  title: string
  icon: string
}

const courseDetails: Record<string, any> = {
  ml: {
    title: 'Machine Learning',
    description: 'Master machine learning algorithms, data preprocessing, and model optimization through hands-on projects.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    learners: '2.5K+',
    rating: 4.8,
    reviews: 324,
    whatYouLearn: [
      'Supervised learning algorithms (linear regression, logistic regression, SVM)',
      'Unsupervised learning and clustering techniques',
      'Feature engineering and selection',
      'Model evaluation and validation',
      'Deep learning fundamentals',
      'Real-world ML project implementation',
    ],
    curriculum: [
      {
        week: '1-2',
        title: 'Foundations of ML',
        topics: ['Python basics for ML', 'Libraries: NumPy, Pandas', 'Data loading and exploration'],
      },
      {
        week: '3-4',
        title: 'Supervised Learning',
        topics: ['Linear & Logistic Regression', 'Decision Trees', 'Ensemble Methods'],
      },
      {
        week: '5-6',
        title: 'Unsupervised Learning & Evaluation',
        topics: ['Clustering algorithms', 'Dimensionality reduction', 'Model metrics'],
      },
      {
        week: '7-8',
        title: 'Capstone Project',
        topics: ['End-to-end ML pipeline', 'Deployment', 'Final certification'],
      },
    ],
    tools: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'Matplotlib', 'Jupyter'],
  },
  ai: {
    title: 'AI & Deep Learning',
    description: 'Deep dive into neural networks, NLP, and advanced AI applications.',
    level: 'Advanced',
    duration: '8-10 Weeks',
    learners: '1.8K+',
    rating: 4.9,
    reviews: 287,
    whatYouLearn: [
      'Neural network architectures',
      'Convolutional Neural Networks (CNN)',
      'Recurrent Neural Networks (RNN)',
      'Natural Language Processing',
      'Transformers and attention mechanisms',
      'Advanced AI applications',
    ],
    curriculum: [
      {
        week: '1-2',
        title: 'Neural Network Basics',
        topics: ['Perceptrons', 'Backpropagation', 'Activation functions'],
      },
      {
        week: '3-4',
        title: 'Advanced Architectures',
        topics: ['CNNs', 'RNNs', 'LSTMs'],
      },
      {
        week: '5-7',
        title: 'NLP & Transformers',
        topics: ['BERT', 'GPT', 'Attention mechanisms'],
      },
      {
        week: '8-10',
        title: 'Capstone & Deployment',
        topics: ['Production AI', 'Model optimization', 'Certification'],
      },
    ],
    tools: ['Python', 'PyTorch', 'TensorFlow', 'OpenAI API', 'Hugging Face'],
  },
  cloud: {
    title: 'Cloud Computing',
    description: 'AWS, Azure, and GCP mastery with hands-on deployment and infrastructure automation.',
    level: 'Intermediate',
    duration: '6-8 Weeks',
    learners: '3.2K+',
    rating: 4.7,
    reviews: 412,
    whatYouLearn: [
      'Cloud architecture and design principles',
      'AWS, Azure, and GCP fundamentals',
      'Virtual machines and containers',
      'Serverless computing',
      'Database management in cloud',
      'Cost optimization and monitoring',
    ],
    curriculum: [
      {
        week: '1-2',
        title: 'Cloud Fundamentals',
        topics: ['Cloud concepts', 'AWS basics', 'Regions and availability zones'],
      },
      {
        week: '3-4',
        title: 'Compute and Networking',
        topics: ['EC2', 'Load balancing', 'VPC configuration'],
      },
      {
        week: '5-6',
        title: 'Storage and Databases',
        topics: ['S3', 'RDS', 'DynamoDB'],
      },
      {
        week: '7-8',
        title: 'Advanced Topics',
        topics: ['Auto-scaling', 'Microservices', 'Infrastructure as Code'],
      },
    ],
    tools: ['AWS', 'Azure', 'GCP', 'Terraform', 'CloudFormation'],
  },
  devops: {
    title: 'DevOps Engineering',
    description: 'CI/CD pipelines, containerization, Kubernetes, and enterprise deployment.',
    level: 'Advanced',
    duration: '8-10 Weeks',
    learners: '1.2K+',
    rating: 4.6,
    reviews: 156,
    whatYouLearn: [
      'CI/CD pipelines and automation',
      'Docker containerization',
      'Kubernetes orchestration',
      'Infrastructure as Code',
      'Monitoring and logging',
      'DevOps best practices',
    ],
    curriculum: [
      {
        week: '1-2',
        title: 'DevOps Fundamentals',
        topics: ['DevOps philosophy', 'Git workflows', 'Automation basics'],
      },
      {
        week: '3-4',
        title: 'Containerization',
        topics: ['Docker basics', 'Docker Compose', 'Image optimization'],
      },
      {
        week: '5-7',
        title: 'Orchestration & CI/CD',
        topics: ['Kubernetes', 'Jenkins', 'GitLab CI'],
      },
      {
        week: '8-10',
        title: 'Advanced Deployment',
        topics: ['Service mesh', 'Monitoring', 'Scaling strategies'],
      },
    ],
    tools: ['Docker', 'Kubernetes', 'Jenkins', 'Git', 'Prometheus'],
  },
  iot: {
    title: 'IoT Systems',
    description: 'Embedded systems, sensor networks, IoT protocols, and real-time processing.',
    level: 'Intermediate',
    duration: '7-9 Weeks',
    learners: '900+',
    rating: 4.5,
    reviews: 98,
    whatYouLearn: [
      'Embedded systems programming',
      'Microcontroller programming',
      'Sensor interfacing',
      'IoT protocols (MQTT, CoAP)',
      'Edge computing',
      'IoT security and privacy',
    ],
    curriculum: [
      {
        week: '1-2',
        title: 'IoT Fundamentals',
        topics: ['IoT architecture', 'Hardware basics', 'Sensors and actuators'],
      },
      {
        week: '3-4',
        title: 'Embedded Programming',
        topics: ['Arduino', 'Raspberry Pi', 'C++ for IoT'],
      },
      {
        week: '5-7',
        title: 'Communication & Cloud',
        topics: ['MQTT', 'WiFi connectivity', 'Cloud integration'],
      },
      {
        week: '8-9',
        title: 'Real-world Projects',
        topics: ['Smart home', 'Data collection', 'Certification'],
      },
    ],
    tools: ['Arduino', 'Raspberry Pi', 'Python', 'MQTT', 'AWS IoT'],
  },
  crypto: {
    title: 'Cybersecurity',
    description: 'Encryption, blockchain, secure system design, and cryptographic protocols.',
    level: 'Advanced',
    duration: '8-10 Weeks',
    learners: '1.5K+',
    rating: 4.8,
    reviews: 223,
    whatYouLearn: [
      'Encryption algorithms',
      'Blockchain fundamentals',
      'Secure system design',
      'Cryptographic protocols',
      'Penetration testing basics',
      'Security compliance',
    ],
    curriculum: [
      {
        week: '1-2',
        title: 'Cryptography Basics',
        topics: ['Symmetric encryption', 'Asymmetric encryption', 'Hash functions'],
      },
      {
        week: '3-4',
        title: 'Blockchain & Web3',
        topics: ['Blockchain technology', 'Smart contracts', 'DeFi basics'],
      },
      {
        week: '5-7',
        title: 'Security Implementation',
        topics: ['PKI', 'SSL/TLS', 'Security protocols'],
      },
      {
        week: '8-10',
        title: 'Advanced Topics',
        topics: ['Penetration testing', 'Compliance', 'Incident response'],
      },
    ],
    tools: ['Python', 'Solidity', 'OpenSSL', 'Ethereum', 'Burp Suite'],
  },
}

const CourseDetail = ({ id }: CourseDetailProps) => {
  const course = courseDetails[id] || courseDetails.ml
  const [enrolled, setEnrolled] = useState(false)

  return (
    <div className="w-full bg-[var(--bg-primary)]">
      {/* Hero Section with Enroll Button */}
      <section className="w-full py-12 sm:py-20 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
        <div className="max-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="badge-accent mb-4 w-fit">
                <RiBookOpenLine className="w-4 h-4" />
                <span className="text-xs sm:text-sm">{course.level} Level</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
                {course.title}
              </h1>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <RiTimeLine className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span className="text-sm sm:text-base text-[var(--text-secondary)]">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiTeamLine className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span className="text-sm sm:text-base text-[var(--text-secondary)]">{course.learners} learners</span>
                </div>
                <div className="flex items-center gap-2">
                  <RiAwardLine className="w-5 h-5 text-[var(--accent-primary)]" />
                  <span className="text-sm sm:text-base text-[var(--text-secondary)]">Certificate included</span>
                </div>
              </div>
            </motion.div>

            {/* Right - Enroll Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24 lg:top-32"
            >
              <div className="card bg-white dark:bg-[var(--bg-secondary)] border-2 border-[var(--accent-primary)]">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-[var(--accent-primary)]">Free</span>
                    <span className="badge text-xs">100% Verified</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Get full access to all materials and mentorship
                  </p>
                </div>

                {/* Enroll Button */}
                <motion.button
                  onClick={() => setEnrolled(!enrolled)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full mb-4 flex items-center justify-center gap-2"
                >
                  <span>{enrolled ? '✓ Enrolled' : 'Enroll Now'}</span>
                  {!enrolled && <RiArrowRightLine className="w-4 h-4" />}
                </motion.button>

                {/* Features */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <RiCheckDoubleLine className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <RiCheckDoubleLine className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Expert mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <RiCheckDoubleLine className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Industry certification</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <RiCheckDoubleLine className="w-4 h-4 text-[var(--accent-primary)]" />
                    <span>Job placement support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="w-full py-16 sm:py-24 bg-[var(--bg-primary)]">
        <div className="max-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-[var(--text-primary)]"
          >
            What You'll Learn
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {course.whatYouLearn.map((item: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true, margin: '-100px' }}
                className="flex gap-3"
              >
                <RiCheckDoubleLine className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-0.5" />
                <p className="text-base text-[var(--text-secondary)]">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="w-full py-16 sm:py-24 bg-[var(--bg-secondary)]">
        <div className="max-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-[var(--text-primary)]"
          >
            Course Curriculum
          </motion.h2>

          <div className="space-y-4 sm:space-y-6">
            {course.curriculum.map((section: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
                className="card"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className="badge-accent text-xs px-3 py-1">
                    Week {section.week}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.topics.map((topic: string, topicIndex: number) => (
                    <li key={topicIndex} className="flex items-center gap-2 text-sm sm:text-base text-[var(--text-secondary)]">
                      <span className="text-[var(--accent-primary)]">→</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="w-full py-16 sm:py-24 bg-[var(--bg-primary)]">
        <div className="max-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-[var(--text-primary)]"
          >
            Tools & Technologies
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {course.tools.map((tool: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true, margin: '-100px' }}
                className="card text-center"
              >
                <p className="font-semibold text-sm sm:text-base text-[var(--text-primary)]">{tool}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail
