import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightTemplate } from '@styles';
import {
  useTheme,
  useDateFormat,
  useTxListFormat,
} from './hooks';
import {
  SettingsState,
  ThemeState,
  DateFormatState,
  TxListFormatState,
} from './types';

const initialThemeState: ThemeState = {
  theme: 'light',
  themeSelection: 'device',
  muiTheme: createMuiTheme(lightTemplate),
  themeList: [],
};

const initialDateState: DateFormatState = {
  dateFormat: 'locale',
  dateFormatList: [],
};

const initialTxListState: TxListFormatState = {
  txListFormat: 'compact',
  txListFormatList: [],
};

const SettingsContext = React.createContext<SettingsState>({
  ...initialThemeState,
  ...initialDateState,
  ...initialTxListState,
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

  const {
    txListFormat,
    changeTxListFormat,
    txListFormatList,
  } = useTxListFormat(initialTxListState);

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
        txListFormat,
        changeTxListFormat,
        txListFormatList,
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
