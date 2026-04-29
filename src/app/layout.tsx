import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyles from '@/styles/GlobalStyles';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Germán Ruiz — Software Engineer',
    template: '%s | Germán Ruiz',
  },
  description: 'Software Engineer building products that scale and make sense.',
  keywords: ['software engineer', 'developer', 'portfolio', 'blog'],
  authors: [{ name: 'Germán Ruiz' }],
  creator: 'Germán Ruiz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Germán Ruiz',
    title: 'Germán Ruiz — Software Engineer',
    description: 'Software Engineer building products that scale and make sense.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Germán Ruiz — Software Engineer',
    description: 'Software Engineer building products that scale and make sense.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
