import Footer from '@/components/Footer';
import CoursesSection from '@/components/CoursesSection';

export const metadata = {
  title: 'Certification Paths | CredPath',
  description: 'Explore our comprehensive certification paths in AI, ML, Cloud Computing, DevOps, IoT, and Cryptography.',
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--text-primary)]">
            All Certification <span className="text-[var(--accent-primary)]">Paths</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Choose from our industry-designed certification paths and start your journey today.
          </p>
        </div>
      </div>
      <CoursesSection />
      <Footer />
    </main>
  );
}
