import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'How It Works | CredPath',
  description: 'Learn how CredPath works and how we help you accelerate your engineering career.',
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            How <span className="gradient-text">CredPath</span> Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A transparent, step-by-step guide to achieving your engineering career goals.
          </p>
        </div>
      </div>
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  )
}
