'use client';

import Footer from '@/components/Footer';
import CoursesSection from '@/components/CoursesSection';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      {/*<section className="page-hero">*/}
      {/*  <div className="max-container">*/}
      {/*    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">*/}
      {/*      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>*/}
      {/*        <h1 className="page-title">Certification <span className="text-[var(--accent-primary)]">Paths</span></h1>*/}
      {/*        <p className="page-desc max-w-md">Industry-designed paths to transform your career.</p>*/}
      {/*      </motion.div>*/}
      {/*      <motion.div*/}
      {/*        initial={{ opacity: 0, x: 20 }}*/}
      {/*        animate={{ opacity: 1, x: 0 }}*/}
      {/*        transition={{ duration: 0.5, delay: 0.2 }}*/}
      {/*        className="hidden lg:block"*/}
      {/*      >*/}
      {/*        <div className="illustration-container">*/}
      {/*          <Image src="/illustrations/courses.svg" alt="Courses" fill className="object-contain" />*/}
      {/*        </div>*/}
      {/*      </motion.div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
      <CoursesSection />
      <Footer />
    </main>
  );
}
