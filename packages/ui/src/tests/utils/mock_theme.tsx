import React, { ComponentProps, FC, ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { StylesProvider, StylesOptions } from '@material-ui/styles';
import { RecoilRoot } from 'recoil';
import { defaultTheme } from 'ui/styles';

const StylesProviderWrapper = StylesProvider as FC<ComponentProps<typeof StylesProvider>>;

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: { children: ReactNode }) => {
  const generateClassName: StylesOptions['generateClassName'] = (rule, sheet): string =>
    `${sheet!.options.classNamePrefix}-${rule.key}`;

  return (
    <StylesProviderWrapper generateClassName={generateClassName}>
      <ThemeProvider theme={createTheme(defaultTheme)}>
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </StylesProviderWrapper>
  );
};

export default MockTheme;
