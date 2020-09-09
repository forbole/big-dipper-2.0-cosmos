import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSettingsContext } from '@contexts';
import { ThemeProvider } from '@material-ui/core/styles';

// Separated to use our useSettingsContext hook
function InnerApp({
  Component, pageProps,
}: AppProps) {
  const {
    muiTheme,
  } = useSettingsContext();

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default InnerApp;
