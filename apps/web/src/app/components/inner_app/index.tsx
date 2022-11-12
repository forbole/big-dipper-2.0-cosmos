import React from 'react';
import { AppProps } from 'next/app';
import { useChainHealthCheck, UseLatestBlockTimestampLazyQuery } from './hooks';

function InnerApp<TData, TVariables>(
  { Component, pageProps }: AppProps,
  useLatestBlockTimestampLazyQuery: UseLatestBlockTimestampLazyQuery<TData, TVariables>
) {
  useChainHealthCheck(useLatestBlockTimestampLazyQuery);
  const ComponentFC = Component as React.FC;
  return <ComponentFC {...pageProps} />;
}

export default InnerApp;
