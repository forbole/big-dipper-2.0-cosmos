import { defaultTheme } from '@/styles';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { StylesOptions, StylesProvider } from '@material-ui/styles';
import { ComponentProps, FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

const StylesProviderWrapper = StylesProvider as FC<ComponentProps<typeof StylesProvider>>;

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: { children: ReactNode }) => {
  const generateClassName: StylesOptions['generateClassName'] = (rule, sheet): string =>
    `${sheet?.options.classNamePrefix}-${rule.key}`;

  return (
    <StylesProviderWrapper generateClassName={generateClassName}>
      <ThemeProvider theme={createTheme(defaultTheme)}>
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </StylesProviderWrapper>
  );
};

export default MockTheme;
