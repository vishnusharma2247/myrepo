import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import CoursesSection from '@/components/CoursesSection';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[var(--bg-primary)]">
      <Hero />
      <FeaturesSection />
      <CoursesSection />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <Footer />
    </main>
  );
}
