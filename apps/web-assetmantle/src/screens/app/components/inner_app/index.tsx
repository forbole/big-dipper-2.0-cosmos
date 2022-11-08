import React from 'react';
import { AppProps } from 'next/app';
import { useChainHealthCheck } from './hooks';

function InnerApp({ Component, pageProps }: AppProps) {
  useChainHealthCheck();
  return <Component {...pageProps} />;
}

export default InnerApp;
