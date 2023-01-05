import { defaultTheme } from '@/styles';
import { createTheme, ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles';
import { StylesOptions, StylesProvider } from '@mui/styles';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: { children: ReactNode }) => {
  const generateClassName: StylesOptions['generateClassName'] = (rule, sheet): string =>
    `${sheet?.options.classNamePrefix}-${rule.key}`;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme(defaultTheme)}>
          <RecoilRoot>{children}</RecoilRoot>
        </ThemeProvider>
      </StyledEngineProvider>
    </StylesProvider>
  );
};

export default MockTheme;
