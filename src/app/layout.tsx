import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VOLIMFIT',
  description: 'Фитнес-клуб, где каждая деталь продумана до мелочей',
  keywords: 'фитнес, спортзал, тренировки, Crossfit, Москва',

  openGraph: {
    title: 'VOLIMFIT',
    description: 'Фитнес-клуб, где каждая деталь продумана до мелочей',
    url: 'https://volimfit.ru',
    type: 'website',
    images: 'https://volimfit.ru/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className + ' dark text-foreground bg-background'}>
        {' '}
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
