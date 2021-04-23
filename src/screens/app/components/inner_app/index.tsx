import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import InitialLoad from '@screens/initial_load';
import dayjs from '@utils/dayjs';
import {
  useSettingsContext,
  useChainContext,
  useNetworksContext,
} from '@contexts';
import { ThemeProvider } from '@material-ui/core/styles';
import { chainConfig } from '@src/chain_config';

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

  console.log(dayjs.utc().format('YYYY-MM-DDTHH:mm:ss'), 'what is this');
  console.log(chainConfig.genesis.time, 'genesis time');
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
