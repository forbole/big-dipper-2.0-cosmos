import React from 'react';
import { AppProps } from 'next/app';
import { useLatestBlockTimestampLazyQuery } from '@src/graphql/types/general_types';
import { useChainHealthCheck, UseLatestBlockTimestampLazyQuery } from './hooks';

function InnerApp<TData, TVariables>({ Component, pageProps }: AppProps) {
  useChainHealthCheck(useLatestBlockTimestampLazyQuery);
  const ComponentFC = Component as React.FC;
  return <ComponentFC {...pageProps} />;
}

export default InnerApp;
