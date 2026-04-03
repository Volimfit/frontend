import '@/app/globals.css';
import { Providers } from '@/app/providers';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';


const inter = Montserrat({ subsets: ['latin'] });



export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const originalConsoleError = console.error;
    console.error = (...args: unknown[]) => {
      const firstArg = args[0];
      if (
        typeof firstArg === 'string' &&
        firstArg.includes('Support for defaultProps will be removed from function components')
      ) {
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return <Providers>
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Component {...pageProps} /> </Providers>
}
