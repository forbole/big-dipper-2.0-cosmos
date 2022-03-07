import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';
import Countdown from '@screens/countdown';
import InitialLoad from '@screens/initial_load';
import { useSettingsRecoil } from '@recoil/settings';
import { useBigDipperNetworksRecoil } from '@recoil/big_dipper_networks';
import { useMarketRecoil } from '@recoil/market';
import { useValidatorRecoil } from '@recoil/validators';
import { InnerApp } from '..';
import {
  useTheme,
  useGenesis,
} from './hooks';

const Main = (props: AppProps) => {
  // =====================================
  // init recoil values
  // =====================================
  useSettingsRecoil();
  useBigDipperNetworksRecoil();
  useMarketRecoil();
  const { loading } = useValidatorRecoil();

  // =====================================
  // general setup
  // =====================================
  const { muiTheme } = useTheme();
  const {
    genesisStarted,
    startGenesis,
  } = useGenesis();

  let Component = null;

  if (!genesisStarted) {
    Component = (
      <Countdown startGenesis={startGenesis} />
    );
  } else if (loading) {
    Component = <InitialLoad {...props.pageProps} />;
  } else {
    Component = (
      <InnerApp {...props} />
    );
  }

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        hideProgressBar
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {Component}
    </ThemeProvider>
  );
};

export default Main;
