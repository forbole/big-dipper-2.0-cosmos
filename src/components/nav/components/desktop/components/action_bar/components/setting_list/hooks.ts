import { useState } from 'react';
import setLanguage from 'next-translate/setLanguage';
import {
  useRecoilState, SetterOrUpdater,
} from 'recoil';
import {
  Theme,
  Date,
  Tx,
} from '@recoil/settings/types';
import {
  writeTheme,
  writeDate,
  writeTx,
  THEME_DICTIONARY,
} from '@recoil/settings';
import * as R from 'ramda';

export const useSettingList = ({ lang }) => {
  const [theme, setTheme] = useRecoilState(writeTheme) as [Theme, SetterOrUpdater<Theme>];
  const [date, setDate] = useRecoilState(writeDate) as [Date, SetterOrUpdater<Date>];
  const [tx, setTx] = useRecoilState(writeTx) as [Tx, SetterOrUpdater<Tx>];

  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    lang,
    theme,
    dateFormat: date,
    txListFormat: tx,
  });

  const resetSettings = () => {
    handleSetState({
      theme,
      dateFormat: date,
      lang,
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    resetSettings();
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handleChange = (label: string, value: any) => {
    handleSetState({
      [label]: value,
    });
  };

  const changeTheme = (value: Theme) => {
    if (THEME_DICTIONARY[value]) {
      setTheme(value);
    }
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (state.theme !== theme) {
      changeTheme(state.theme);
    }

    if (state.lang !== lang) {
      setLanguage(state.lang);
    }

    if (state.dateFormat !== date) {
      setDate(state.dateFormat);
    }

    if (state.txListFormat !== tx) {
      setTx(state.txListFormat);
    }

    handleClose();
  };

  return {
    open,
    handleOpen,
    handleClose,
    state,
    handleChange,
    handleFormSubmit,
    handleCancel,
  };
};
