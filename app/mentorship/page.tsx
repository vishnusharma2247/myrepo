import Footer from '@/components/Footer';
import MentorshipSection from '@/components/MentorshipSection';

export const metadata = {
  title: 'Expert Mentors | CredPath',
  description: 'Connect with experienced engineers and get personalized guidance on your learning journey.',
};

export default function MentorshipPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <div className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[var(--text-primary)]">
            Mentorship <span className="text-[var(--accent-primary)]">Network</span>
          </h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Learn directly from industry experts and accelerate your engineering career.
          </p>
        </div>
      </div>
      <MentorshipSection />
      <Footer />
    </main>
  );
}
