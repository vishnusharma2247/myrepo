import Footer from '@/components/Footer'
import HowItWorks from '@/components/HowItWorks'
import Testimonials from '@/components/Testimonials'

export const metadata = {
  title: 'How It Works | CredPath',
  description: 'Learn how CredPath works and how we help you accelerate your engineering career.',
}

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <div className="page-hero">
        <div className="max-container text-center">
          <h1 className="page-title">How <span className="text-[var(--accent-primary)]">CredPath</span> Works</h1>
          <p className="page-desc mx-auto max-w-lg">A step-by-step guide to your engineering career.</p>
        </div>
      </div>
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  )
}
