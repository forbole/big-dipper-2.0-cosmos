import React from 'react';
import { AppProps } from 'next/app';
// import InitialLoad from '@screens/initial_load';
import { useChainHealthCheck } from './hooks';

function InnerApp({
  Component, pageProps,
}: AppProps) {
  useChainHealthCheck();
  return (
    <Component {...pageProps} />
  );
  // return (
  //   <>
  //     {
  //     isLoading ? (
  //       <InitialLoad {...pageProps} />
  //     ) : (
  //       <Component {...pageProps} />
  //     )
  //   }
  //   </>
  // );
}

export default InnerApp;
