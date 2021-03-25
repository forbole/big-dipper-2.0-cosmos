import React from 'react';
import { lightTheme } from '@styles';
import { useTheme } from './hooks';
import { SettingsState } from './types';

const initialState: SettingsState = {
  theme: 'light',
  themeSelection: 'device',
  muiTheme: lightTheme,
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

  return (
    <SettingsContext.Provider
      value={{
        theme,
        themeSelection,
        muiTheme,
        toggleThemeMode,
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
