# CredPath - EdTech Learning Platform

A modern, multi-page EdTech web application designed to launch and accelerate engineering careers through interactive projects, industry-relevant tasks, and mentor-driven guidance.

## 🌟 Platform Overview

CredPath is a professional learning platform that doesn't market itself as a "virtual internship" directly but is structured like one, giving learners project-based experiences that add weight to their resumes, build confidence, and open doors to career opportunities.

### Key Features

- **Certification Paths**: 6+ industry-designed learning paths (ML, AI, Cloud, DevOps, IoT, Cryptography)
- **Task-Based Learning**: Real-world challenges that mirror industry work
- **Expert Mentorship**: Direct access to experienced engineers for personalized guidance
- **Recognized Certifications**: Industry-recognized credentials upon completion
- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Dark Mode Support**: Fully supported across all pages
- **Responsive Design**: Works seamlessly on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion + Aceternity UI
- **State Management**: Zustand / Context API (ready)
- **Forms**: React Hook Form + Zod
- **Theme Management**: next-themes
- **Icons**: Lucide React

## 📁 Project Structure

```
CredPath/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── courses/
│   │   ├── page.tsx              # All courses page
│   │   └── [id]/
│   │       └── page.tsx          # Course detail page
│   ├── mentorship/
│   │   └── page.tsx              # Mentorship page
│   ├── how-it-works/
│   │   └── page.tsx              # How it works page
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   └── globals.css               # Global styles
├── components/
│   ├── Navbar.tsx                # Navigation bar
│   ├── Hero.tsx                  # Hero section
│   ├── FeaturesSection.tsx       # Why Choose CredPath section
│   ├── CoursesSection.tsx        # Certification paths section
│   ├── HowItWorks.tsx            # How it works section
│   ├── Testimonials.tsx          # Success stories section
│   ├── MentorshipSection.tsx     # Mentorship network section
│   ├── CourseDetail.tsx          # Course detail component
│   └── Footer.tsx                # Footer
├── lib/
│   └── theme-provider.tsx        # Theme provider component
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm or yarn package manager

### Installation

1. **Navigate to project directory**:
   ```bash
   cd CredPath
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📄 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, features, courses, mentorship |
| Courses | `/courses` | Filterable catalog of all certification paths |
| Course Detail | `/courses/[id]` | Detailed view of individual courses |
| Mentorship | `/mentorship` | Mentor network and connection options |
| How It Works | `/how-it-works` | Platform overview and process explanation |
| About | `/about` | Company mission, vision, and values |
| Contact | `/contact` | Contact form and support information |

## 🎨 Design Features

### Color Scheme

- **Primary**: Blue (`#0ea5e9` to `#0369a1`)
- **Secondary**: Purple (`#a855f7` to `#7e22ce`)
- **Background**: White/Dark Gray (dark mode support)

### Typography

- **Font**: Inter (Google Fonts)
- **Sizes**: Responsive with Tailwind breakpoints

### Animations

- Smooth fade-in transitions
- Hover effects with scale/lift animations
- Scroll-triggered reveal animations
- Gradient text effects
- Glow effects on CTAs

## ✨ Key Components

### Navbar
- Sticky header with logo and navigation
- Theme toggle (light/dark mode)
- Mobile-responsive hamburger menu
- Sign-in button

### Hero Section
- Animated gradient background
- Large headline with gradient text
- Subheading and CTA buttons
- Statistics showcase

### Features Section
- 4 value cards with icons
- Hover animations
- Gradient backgrounds

### Courses Section
- Filterable grid (6 courses × 6 categories)
- Course cards with metadata
- Filter tabs for categories
- Explore button linking to detail pages

### Testimonials
- 6 success stories
- Star ratings
- Author information

### Mentorship Section
- 6 mentor profiles
- Experience and expertise badges
- Connect buttons
- Mentor recruitment CTA

### How It Works
- 4-step visual flow
- Connected with gradient lines
- Detailed descriptions

## 🔒 Dark Mode

The entire application supports dark mode with automatic theme detection based on system preferences. Users can toggle between light and dark themes using the sun/moon icon in the navbar.

## 📱 Responsive Design

All pages are fully responsive and optimized for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up

## 🔗 Navigation Links

All navigation is implemented with Next.js Link components for optimal performance and SEO.

## 📝 Forms

The contact form includes:
- Name and email fields
- Subject dropdown selector
- Message textarea
- Validation feedback
- Success message on submission

## 🌐 SEO Optimization

- Semantic HTML structure
- Meta tags and descriptions
- Open Graph support
- Structured data ready
- Dynamic metadata for course pages

## 🎯 Future Enhancements

- User authentication system
- Learning dashboard
- Progress tracking
- Certification generation
- Payment integration
- API backend
- Email notifications
- Live chat support
- Analytics integration

## 📄 License

This project is private and belongs to CredPath.

## 👥 Credits

Built with modern web technologies and design best practices inspired by:
- Notion (clean flow)
- Linear (calm but powerful UI)
- Vercel (professional tech aesthetic)

---

**Ready to accelerate your engineering career? Start learning with CredPath today!** 🚀
