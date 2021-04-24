import React from 'react';
import { AppProps } from 'next/app';
import InitialLoad from '@screens/initial_load';
import {
  useChainContext,
  useNetworksContext,
} from '@contexts';

// Separated to use our useSettingsContext hook
function InnerApp({
  Component, pageProps,
}: AppProps) {
  const networksContext = useNetworksContext();
  const chainContext = useChainContext();
  const isLoading = chainContext.loading || networksContext.loading;

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
