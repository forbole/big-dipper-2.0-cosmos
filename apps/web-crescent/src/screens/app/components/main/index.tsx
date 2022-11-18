import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';
import Countdown from 'ui/screens/countdown';
import InitialLoad from 'ui/screens/initial_load';
import { useSettingsRecoil } from 'ui/recoil/settings';
import {
  useChainIdQuery,
  useMarketDataQuery,
  useValidatorAddressesQuery,
} from '@graphql/types/general_types';
import { useBigDipperNetworksRecoil } from 'ui/recoil/big_dipper_networks';
import { useMarketRecoil } from '@recoil/market/crescent';
import { useValidatorRecoil } from 'ui/recoil/validators';
import InnerApp from '../inner_app';
import { useTheme, useGenesis } from './hooks';

const Main = (props: AppProps) => {
  // =====================================
  // init recoil values
  // =====================================
  useSettingsRecoil();
  useBigDipperNetworksRecoil(useChainIdQuery);
  useMarketRecoil(useMarketDataQuery);
  const { loading } = useValidatorRecoil(useValidatorAddressesQuery);

  // =====================================
  // general setup
  // =====================================
  const { muiTheme } = useTheme();
  const { genesisStarted, startGenesis } = useGenesis();

  let Component = null;

  if (!genesisStarted) {
    Component = <Countdown startGenesis={startGenesis} />;
  } else if (loading) {
    Component = <InitialLoad {...props.pageProps} />;
  } else {
    Component = <InnerApp {...props} />;
  }

  /* Adding a class to the document element to indicate the dark mode. */
  useEffect(() => {
    if (typeof document !== 'undefined' && document?.documentElement) {
      document.documentElement.classList.toggle('mode-dark', muiTheme.palette.type === 'dark');
    }
  }, [muiTheme.palette.type]);

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
