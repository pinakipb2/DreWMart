import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store);
  return (
    <>
      <Head>
        <title>DreWMart</title>
        <meta name="description" content="DreWMart" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Provider store={store}>
        <NextNProgress color="#02A3fA" options={{ showSpinner: false }} />
        <Toaster position="bottom-right" reverseOrder={false} toastOptions={{ duration: 5000 }} />
        <PersistGate persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
