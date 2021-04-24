import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import InitialLoad from '@screens/initial_load';
import {
  useSettingsContext,
  useChainContext,
  useNetworksContext,
} from '@contexts';
import { ThemeProvider } from '@material-ui/core/styles';

// Separated to use our useSettingsContext hook
function InnerApp({
  Component, pageProps,
}: AppProps) {
  const {
    muiTheme,
  } = useSettingsContext();
  const networksContext = useNetworksContext();
  const chainContext = useChainContext();
  const isLoading = chainContext.loading || networksContext.loading;

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {
        isLoading ? (
          <InitialLoad {...pageProps} />
        ) : (
          <Component {...pageProps} />
        )
      }
    </ThemeProvider>
  );
}

export default InnerApp;
