import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ZSSV6RSJJ9"></Script>
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ZSSV6RSJJ9');`}
      </Script>
    </html>
  );
}
