import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'Bernhard Shop', template: '%s ' },
  description: 'Bernhard Shop',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="/">Home</a>
        <a href="about">About</a>

        {children}
      </body>
    </html>
  );
}
