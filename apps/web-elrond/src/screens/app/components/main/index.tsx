import InitialLoad from '@/screens/initial_load';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
// import { useSettingsRecoil } from '@/recoil/settings';
import { useBigDipperNetworksRecoil } from '@/recoil/big_dipper_networks';
import { useMarketRecoil } from '@/recoil/market';
// import { useValidatorRecoil } from '@/recoil/validators';
import InnerApp from '@/screens/app/components/inner_app';
import { useTheme } from '@/screens/app/components/main/hooks';
import createEmotionCache from '@/styles/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import { useEffect } from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MainProps<T = object> extends AppProps<T> {
  emotionCache?: EmotionCache;
}

const Main = (props: MainProps) => {
  const { emotionCache = clientSideEmotionCache } = props;

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

  /* Adding a class to the document element to indicate the dark mode. */
  useEffect(() => {
    if (typeof document !== 'undefined' && document?.documentElement) {
      document.documentElement.classList.toggle('mode-dark', muiTheme.palette.mode === 'dark');
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', muiTheme.palette.primary.main);
    }
  }, [muiTheme]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
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
    </CacheProvider>
  );
};

export default Main;
