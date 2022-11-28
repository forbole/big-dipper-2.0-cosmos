import { useChainHealthCheck } from '@/screens/app/components/inner_app/hooks';
import { AppProps } from 'next/app';
import React from 'react';

function InnerApp({ Component, pageProps }: AppProps) {
  useChainHealthCheck();
  const ComponentFC = Component as React.FC;
  return <ComponentFC {...pageProps} />;
}

export default InnerApp;
