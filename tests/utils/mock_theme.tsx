import React from 'react';
import {
  ThemeProvider, createMuiTheme,
} from '@material-ui/core/styles';

import {
  StylesProvider, StylesOptions,
} from '@material-ui/styles/';

import { lightTemplate } from '@styles';

/**
 * Theme mocker to handle custom keys
 */
const MockTheme = ({ children }: {children: React.ReactNode}) => {
  const generateClassName: StylesOptions['generateClassName'] = (
    rule,
    sheet,
  ): string => `${sheet!.options.classNamePrefix}-${rule.key}`;

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={createMuiTheme(lightTemplate)}>
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default MockTheme;
