import React from 'react';
import {
  useDateFormat,
  useTxListFormat,
} from './hooks';
import {
  SettingsState,
  DateFormatState,
  TxListFormatState,
} from './types';

const initialDateState: DateFormatState = {
  dateFormat: 'locale',
  dateFormatList: [],
};

const initialTxListState: TxListFormatState = {
  txListFormat: 'compact',
  txListFormatList: [],
};

const SettingsContext = React.createContext<SettingsState>({
  ...initialDateState,
  ...initialTxListState,
});

const SettingsProvider: React.FC = (props: { children: React.ReactNode }) => {
  const { children } = props;

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
        dateFormat,
        changeDateFormat,
        dateFormatList,
        txListFormat,
        changeTxListFormat,
        txListFormatList,
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
