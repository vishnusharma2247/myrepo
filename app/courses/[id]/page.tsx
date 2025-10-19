import Footer from '@/components/Footer';
import CourseDetail from '@/components/CourseDetail';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: Promise<{
    id: string;
  }>;
}

const validCourseIds = ['ml', 'ai', 'cloud', 'devops', 'iot', 'crypto'];

export async function generateStaticParams() {
  return validCourseIds.map((id) => ({
    id,
  }));
}

export function generateMetadata() {
  return {
    title: 'CredPath Course | EdTech Platform',
    description: 'Learn with industry experts. Hands-on projects, real-world tasks, and recognized certification.',
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;

  if (!validCourseIds.includes(id)) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <CourseDetail id={id} title="" icon="" />
      <Footer />
    </main>
  );
}
