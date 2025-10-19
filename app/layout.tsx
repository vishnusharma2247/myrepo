import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ClientProviders from '@/components/ClientProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'CredPath - Build Your Engineering Career',
  description: 'Master industry-relevant skills through real-world projects, expert mentorship, and recognized certifications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        <ClientProviders>
          <Navbar />
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
