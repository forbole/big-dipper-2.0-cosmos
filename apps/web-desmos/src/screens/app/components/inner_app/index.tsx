import React from 'react';
import { AppProps } from 'next/app';
import { useLatestBlockTimestampLazyQuery } from '@graphql/types/general_types';
import { useChainHealthCheck } from './hooks';

function InnerApp({ Component, pageProps }: AppProps) {
  useChainHealthCheck(useLatestBlockTimestampLazyQuery);
  const ComponentFC = Component as React.FC;
  return <ComponentFC {...pageProps} />;
}

export default InnerApp;
