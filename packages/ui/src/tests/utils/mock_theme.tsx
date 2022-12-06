import { defaultTheme } from '@/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { StylesOptions, StylesProvider } from '@material-ui/styles';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: { children: ReactNode }) => {
  const generateClassName: StylesOptions['generateClassName'] = (rule, sheet): string =>
    `${sheet?.options.classNamePrefix}-${rule.key}`;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={createTheme(defaultTheme)}>
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default MockTheme;
