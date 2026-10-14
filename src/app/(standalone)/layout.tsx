import '../_/global-style/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], preload: true });

export default function StandaloneLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, height: '100dvh', overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
