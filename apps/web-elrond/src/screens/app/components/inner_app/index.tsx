import { useChainHealthCheck } from '@/screens/app/components/inner_app/hooks';
import { AppProps } from 'next/app';
import React from 'react';

function InnerApp({ Component, pageProps }: AppProps) {
  useChainHealthCheck();
  return <Component {...pageProps} />;
}

export default InnerApp;
