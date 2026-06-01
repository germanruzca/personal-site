import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Germán Ruiz — Software Engineer',
    template: '%s | Germán Ruiz',
  },
  description: 'Full Stack Software Engineer with 4+ years building scalable SaaS products. TypeScript, React, Node.js, GraphQL.',
  keywords: ['software engineer', 'full stack', 'TypeScript', 'React', 'Node.js', 'GraphQL', 'SaaS', 'portfolio'],
  authors: [{ name: 'Germán Ruiz' }],
  creator: 'Germán Ruiz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Germán Ruiz',
    title: 'Germán Ruiz — Full Stack Software Engineer',
    description: 'Full Stack Software Engineer with 4+ years building scalable SaaS products. TypeScript, React, Node.js, GraphQL.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Germán Ruiz — Full Stack Software Engineer',
    description: 'Full Stack Software Engineer with 4+ years building scalable SaaS products.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
