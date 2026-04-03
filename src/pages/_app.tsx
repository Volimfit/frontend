import '@/app/globals.css';
import { Providers } from '@/app/providers';
import type { AppType } from 'next/app';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';


const inter = Montserrat({ subsets: ['latin'] });



const App: AppType = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Head>
        <link rel='icon' href='/icon.ico' />
      </Head>
      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
