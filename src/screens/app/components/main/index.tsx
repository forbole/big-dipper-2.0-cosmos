import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import { AppProps } from 'next/app';
import Countdown from '@screens/countdown';
import { useSettingsRecoil } from '@recoil/settings';
import { useBigDipperNetworksRecoil } from '@recoil/big_dipper_networks';
import {
  ChainProvider,
} from '@contexts';
import { InnerApp } from '..';
import {
  useTheme,
  useGenesis,
} from './hooks';

const Main = (props: AppProps) => {
  useSettingsRecoil();
  useBigDipperNetworksRecoil();
  const { muiTheme } = useTheme();
  const {
    genesisStarted,
    startGenesis,
  } = useGenesis();

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
      {
        genesisStarted ? (
          <ChainProvider>
            <InnerApp {...props} />
          </ChainProvider>
        ) : (
          <Countdown startGenesis={startGenesis} />
        )
    }
    </ThemeProvider>
  );
};

export default Main;
