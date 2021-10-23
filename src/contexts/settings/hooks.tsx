import {
  useEffect,
  useState,
} from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import {
  lightTemplate,
  darkTemplate,
  deuteranopiaTemplate,
  tritanopiaTemplate,
} from '@styles';
import { usePersistedState } from '@hooks';
import {
  Theme,
  ThemeState,
  DateFormatState,
  TxListFormatState,
} from './types';

export const useDateFormat = (initialState:DateFormatState) => {
  const [dateSelection, setDateSelection] = usePersistedState('dateFormatSelection', initialState.dateFormat);

  const dateFormatList = [
    'locale',
    'utc',
  ];

  const changeDateFormat = (value: 'locale' | 'utc') => {
    setDateSelection(value);
  };

  return {
    dateFormat: dateSelection,
    changeDateFormat,
    dateFormatList,
  };
};

export const useTxListFormat = (initialState:TxListFormatState) => {
  const [txListSelection, setTxListSelection] = usePersistedState('txListFormatSelection', initialState.txListFormat);

  const txListFormatList = [
    'compact',
    'detailed',
  ];

  const changeTxListFormat = (value: 'compact' | 'detailed') => {
    setTxListSelection(value);
  };

  return {
    txListFormat: txListSelection,
    changeTxListFormat,
    txListFormatList,
  };
};
