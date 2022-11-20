import React from 'react';
import { AppProps } from 'next/app';
import { useChainHealthCheck } from './hooks';

function InnerApp({ Component, pageProps }: AppProps) {
  useChainHealthCheck();
  const ComponentFC = Component as React.FC;
  return <ComponentFC {...pageProps} />;
}

export default InnerApp;
