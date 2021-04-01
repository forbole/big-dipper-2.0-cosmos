import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '@src/graphql/client';
import {
  SettingsProvider,
  NetworksProvider,
  ChainProvider,
} from '@contexts';
import { InnerApp } from './components';
import { useApp } from './hooks';

function App(props: AppProps) {
  useApp();
  const { pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </Head>
      <ApolloProvider
        client={apolloClient}
      >
        <SettingsProvider>
          <NetworksProvider>
            <ChainProvider>
              <ToastContainer
                position="top-center"
                autoClose={5000}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                hideProgressBar
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <InnerApp {...props} />
            </ChainProvider>
          </NetworksProvider>
        </SettingsProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
