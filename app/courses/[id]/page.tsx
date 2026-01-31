import CourseDetail from '@/components/CourseDetail';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: Promise<{
    id: string;
  }>;
}

const validCourseIds = ['ai', 'ml', 'data-science', 'web-dev', 'reactjs', 'javascript', 'android', 'flutter', 'python', 'java', 'cpp', 'uiux'];

export async function generateStaticParams() {
  return validCourseIds.map((id) => ({
    id,
  }));
}

export function generateMetadata() {
  return {
    title: 'CredPath Course | Task-Based Internship',
    description: 'Complete real-world tasks and earn your certificate. Task-based internship program.',
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;

  if (!validCourseIds.includes(id)) {
    notFound();
  }

  return (
    <main className="h-screen overflow-hidden bg-[var(--bg-primary)]">
      <CourseDetail id={id} title="" icon="" />
    </main>
  );
}
