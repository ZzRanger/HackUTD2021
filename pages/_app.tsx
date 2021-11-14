import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import initFirebase from '../firebase/initFirebase';

initFirebase();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>UTD Lost & Found</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
