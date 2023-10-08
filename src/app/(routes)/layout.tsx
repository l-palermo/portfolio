import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';


import { Layout } from '../_/components/home-page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luigi Palermo Portfolio',
  description: 'I build accessible, inclusive products for the web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
        <Analytics />
      </body>
    </html>
  );
}
