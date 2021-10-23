import React from 'react';
import { AppProps } from 'next/app';
import InitialLoad from '@screens/initial_load';
import {
  useChainContext,
} from '@contexts';
import { useChainHealthCheck } from './hooks';

function InnerApp({
  Component, pageProps,
}: AppProps) {
  useChainHealthCheck();
  const chainContext = useChainContext();
  const isLoading = chainContext.loading;

  return (
    <>
      {
      isLoading ? (
        <InitialLoad {...pageProps} />
      ) : (
        <Component {...pageProps} />
      )
    }
    </>
  );
}

export default InnerApp;
