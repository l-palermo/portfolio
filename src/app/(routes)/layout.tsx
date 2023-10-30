import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import { Layout } from '../_/pages/home-page';

const inter = Inter({ subsets: ['latin'] });

const title = 'Luigi Palermo Portfolio';
const description = 'I build accessible, inclusive products for the web';
const imageUrl =
  'https://images.ctfassets.net/66i3mz6tlbxo/6KE4OKYbb1VUALNiO6M417/36139a3d69e08d5ef97f1f19ccdb258d/Screenshot_2023-10-29_at_21.30.30.png';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: 'https://luigipalermo.com',
    title,
    description,
    siteName: 'Luigi Palermo - Portfolio',
    images: [{ url: imageUrl }],
  },
  twitter: { card: 'summary_large_image', site: '@site', creator: '@creator', images: imageUrl },
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
