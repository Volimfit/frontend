import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import { Providers } from './providers';

const inter = Montserrat({ subsets: ['latin'] });

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
      <body className={inter.className + ' dark text-foreground bg-background'}>
        {' '}
        <Providers>{children} </Providers>
      </body>
    </html>
  );
}
