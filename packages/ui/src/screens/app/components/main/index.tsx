import { useChainIdQuery } from '@/graphql/types/general_types';
import { useBigDipperNetworksRecoil } from '@/recoil/big_dipper_networks';
import { useMarketRecoil } from '@/recoil/market';
import { useSettingsRecoil } from '@/recoil/settings';
import { useValidatorRecoil } from '@/recoil/validators/hooks';
import InnerApp from '@/screens/app/components/inner_app';
import { useGenesis, useTheme } from '@/screens/app/components/main/hooks';
import Countdown from '@/screens/countdown';
import InitialLoad from '@/screens/initial_load';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

const Main = (props: AppProps) => {
  // =====================================
  // init recoil values
  // =====================================
  useSettingsRecoil();
  useBigDipperNetworksRecoil(useChainIdQuery);
  useMarketRecoil();
  const { loading } = useValidatorRecoil();

  // =====================================
  // general setup
  // =====================================
  const { muiTheme } = useTheme();
  const { genesisStarted, startGenesis } = useGenesis();

  let Component = null;

  if (!genesisStarted) {
    Component = <Countdown startGenesis={startGenesis} />;
  } else {
    Component = (
      <>
        {loading && <InitialLoad {...props.pageProps} />}
        <InnerApp {...props} />
      </>
    );
  }

  /* Adding a class to the document element to indicate the dark mode. */
  useEffect(() => {
    if (typeof document !== 'undefined' && document?.documentElement) {
      document.documentElement.classList.toggle('mode-dark', muiTheme.palette.type === 'dark');
    }
  }, [muiTheme]);

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
