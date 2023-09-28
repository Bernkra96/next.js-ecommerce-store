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
        <a href="/about">About</a>

        {children}

        <h3> Thanks For Shopping </h3>
        <h4> Impressum</h4>
        <p> Musster Inc.</p>
        <p> Mustter Steasse 1 /2 </p>
        <p> 1111 MustterStatt AT </p>
        <p> Tel : 00 43 11 65555 </p>

        <p>E-Mail : office@musster.inc.at </p>
        <p> Webb : musster.inc.at </p>
      </body>
    </html>
  );
}
