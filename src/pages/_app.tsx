import '@/app/globals.css';
import { Providers } from '@/app/providers';
import type { AppProps } from 'next/app';
import { Montserrat } from 'next/font/google';


const inter = Montserrat({ subsets: ['latin'] });



export default function App({ Component, pageProps }: AppProps) {
  return <Providers> <Component {...pageProps} /> </Providers>
}