import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VOLIMFIT',
  description: 'Фитнес-клуб, где каждая деталь продумана до мелочей',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        {' '}
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
