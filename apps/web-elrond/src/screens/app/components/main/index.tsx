import InitialLoad from '@/screens/initial_load';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
// import { useSettingsRecoil } from '@/recoil/settings';
import { useBigDipperNetworksRecoil } from '@/recoil/big_dipper_networks';
import { useMarketRecoil } from '@/recoil/market';
// import { useValidatorRecoil } from '@/recoil/validators';
import InnerApp from '@/screens/app/components/inner_app';
import { useTheme } from '@/screens/app/components/main/hooks';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const Main = (props: AppProps) => {
  // =====================================
  // init recoil values
  // =====================================
  // useSettingsRecoil();
  useBigDipperNetworksRecoil();
  useMarketRecoil();
  // const { loading } = useValidatorRecoil();

  // =====================================
  // general setup
  // =====================================
  const { muiTheme } = useTheme();
  const loading = false;

  return (
    <StyledEngineProvider injectFirst>
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
        {loading && <InitialLoad {...props.pageProps} />}
        <InnerApp {...props} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default Main;
