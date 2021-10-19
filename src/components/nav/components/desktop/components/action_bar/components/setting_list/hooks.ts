import { useState } from 'react';
import setLanguage from 'next-translate/setLanguage';
import { usePersistedState } from '@hooks';
import {
  useRecoilValue, SetterOrUpdater,
} from 'recoil';
import {
  Theme,
} from '@recoil/settings/types';
import {
  readTheme,
  THEME_DICTIONARY,
} from '@recoil/settings';
import * as R from 'ramda';

export const useSettingList = ({
  lang,
  dateFormat,
  changeDateFormat,
  txListFormat,
  changeTxListFormat,
}) => {
  const theme = useRecoilValue(readTheme);
  const [_, setSavedTheme] = usePersistedState('themeSelection', theme);
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    lang,
    theme,
    dateFormat,
    txListFormat,
  });

  const resetSettings = () => {
    handleSetState({
      theme,
      dateFormat,
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
      console.log('im in here');
      setSavedTheme(value);
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

    if (state.dateFormat !== dateFormat) {
      changeDateFormat(state.dateFormat);
    }

    if (state.txListFormat !== txListFormat) {
      changeTxListFormat(state.txListFormat);
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
