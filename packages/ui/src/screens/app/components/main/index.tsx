import useBigDipperNetworks from '@/hooks/useBigDipperNetworks';
import { useMarketRecoil } from '@/recoil/market';
import { useSettingsRecoil } from '@/recoil/settings';
import { useValidatorRecoil } from '@/recoil/validators/hooks';
import { useUserRecoil } from '@/recoil/user';
import { useWalletRecoil } from '@/recoil/wallet';
import InnerApp from '@/screens/app/components/inner_app';
import { useGenesis, useTheme } from '@/screens/app/components/main/hooks';
import Countdown from '@/screens/countdown';
import InitialLoad from '@/screens/initial_load';
import createEmotionCache from '@/styles/createEmotionCache';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { Hind_Madurai } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

const hindMadurai = Hind_Madurai({
  weight: '400',
  style: 'normal',
  display: 'swap',
  preload: true,
  subsets: ['latin', 'latin-ext', 'tamil'],
});

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
  useSettingsRecoil();
  useBigDipperNetworks();
  useMarketRecoil();
  useUserRecoil();
  useWalletRecoil();
  const { loading } = useValidatorRecoil();

  // =====================================
  // general setup
  // =====================================
  const { muiTheme } = useTheme(hindMadurai.style.fontFamily);
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
      document.documentElement.classList.toggle('mode-dark', muiTheme.palette.mode === 'dark');
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute('content', muiTheme.palette.primary.main);
    }
  }, [muiTheme.palette.mode, muiTheme.palette.primary.main]);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {Component}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Main;
