import React from 'react';
import { lightTheme } from '@styles';
import { useTheme } from './hooks';
import { SettingsState } from './types';

const initialState: SettingsState = {
  theme: 'light',
  firstTime: true,
  muiTheme: lightTheme,
};

const SettingsContext = React.createContext<SettingsState>(initialState);

const SettingsProvider: React.FC = (props: {children: React.ReactNode }) => {
  const { children } = props;

  const {
    theme,
    muiTheme,
    toggleThemeMode,
    firstTime,
  } = useTheme(initialState);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        muiTheme,
        toggleThemeMode,
        firstTime,
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
