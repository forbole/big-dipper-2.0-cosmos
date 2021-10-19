import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { AppProps } from 'next/app';
import { useMain } from './hooks';

const Main = (props: AppProps) => {
  const { muiTheme } = useMain();
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <div>hello</div>
    </ThemeProvider>
  );
};

export default Main;
