import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';
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
      <Head>
        {/* Устанавливаем мета-теги title и description */}
        <title>{`${metadata.title}`}</title>
        <meta name='description' content={`${metadata.description}`} />
        <meta name='yandex-verification' content='b12d03ac291ea597' />
        {/* Другие мета-теги и элементы head, если необходимо */}
      </Head>
      <body className={inter.className}>
        {' '}
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
