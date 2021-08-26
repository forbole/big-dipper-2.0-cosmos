import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { darkTemplate } from '@styles';
import {
  useTheme, useDateFormat,
} from './hooks';
import {
  SettingsState,
  ThemeState,
  DateFormatState,
} from './types';

const initialThemeState: ThemeState = {
  theme: 'dark',
  themeSelection: 'device',
  muiTheme: createMuiTheme(darkTemplate),
  themeList: [],
};

const initialDateState: DateFormatState = {
  dateFormat: 'locale',
  dateFormatList: [],
};

const SettingsContext = React.createContext<SettingsState>({
  ...initialThemeState,
  ...initialDateState,
});

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
  } = useTheme(initialThemeState);

  const {
    dateFormat,
    changeDateFormat,
    dateFormatList,
  } = useDateFormat(initialDateState);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        themeSelection,
        muiTheme,
        changeTheme,
        themeList,
        dateFormat,
        changeDateFormat,
        dateFormatList,
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
