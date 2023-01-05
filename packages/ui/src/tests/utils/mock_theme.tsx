import { defaultTheme } from '@/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { TssCacheProvider } from 'tss-react';

const muiCache = createCache({
  key: 'mui',
  prepend: true,
});

const tssCache = createCache({
  key: 'tss',
});

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: { children: ReactNode }) => (
  <CacheProvider value={muiCache}>
    <TssCacheProvider value={tssCache}>
      <ThemeProvider theme={createTheme(defaultTheme)}>
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </TssCacheProvider>
  </CacheProvider>
);

export default MockTheme;
