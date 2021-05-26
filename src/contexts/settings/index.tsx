import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTemplate } from '@styles';
import { useTheme } from './hooks';
import { SettingsState } from './types';

const initialState: SettingsState = {
  theme: 'light',
  themeSelection: 'device',
  muiTheme: createMuiTheme(lightTemplate),
  themeList: [],
};

const SettingsContext = React.createContext<SettingsState>(initialState);

const SettingsProvider: React.FC = (props: {children: ({
  muiTheme: any,
}) => React.ReactNode }) => {
  const { children } = props;

  const {
    theme,
    muiTheme,
    themeSelection,
    changeTheme,
    themeList,
  } = useTheme(initialState);
  // console.log(muiTheme.palette.type, 'mui theme');
  console.log(theme, 'theme');
  return (
    <SettingsContext.Provider
      value={{
        theme,
        themeSelection,
        muiTheme,
        changeTheme,
        themeList,
      }}
    >
      {children({ muiTheme })}
    </SettingsContext.Provider>
  );
};

const useSettingsContext = () => React.useContext(SettingsContext);

export {
  SettingsContext,
  SettingsProvider,
  useSettingsContext,
};
