import React from 'react';
import { lightTheme } from '@styles';
import {
  useTheme, useValidatorsAddress,
} from './hooks';
import { SettingsState } from './types';

const initialState: SettingsState = {
  theme: 'light',
  themeSelection: 'device',
  muiTheme: lightTheme,
  validatorsAddresses: {
    validators: {},
    selfDelegateAddresses: {},
  },
};

const SettingsContext = React.createContext<SettingsState>(initialState);

const SettingsProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    theme,
    muiTheme,
    toggleThemeMode,
    themeSelection,
  } = useTheme(initialState);
  const { validatorsAddresses } = useValidatorsAddress(initialState);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        themeSelection,
        muiTheme,
        toggleThemeMode,
        validatorsAddresses,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

const useSettingsContext = () => React.useContext(SettingsContext);

export {
  SettingsContext,
  SettingsProvider,
  useSettingsContext,
};
