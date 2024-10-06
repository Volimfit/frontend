import '@/app/globals.css';
import { Providers } from '@/app/providers';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';


const inter = Montserrat({ subsets: ['latin'] });



export default function App({ Component, pageProps }: AppProps) {
  return <Providers>
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Component {...pageProps} /> </Providers>
}