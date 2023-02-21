import { i18n } from 'next-i18next';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { THEME_DICTIONARY, writeDate, writeTheme, writeTx } from '@/recoil/settings';
import type { Date, Theme, Tx } from '@/recoil/settings';

type SettingListState = {
  lang: string;
  theme: Theme;
  dateFormat: Date;
  txListFormat: Tx;
};

export const useSettingList = ({ lang }: { lang: string }) => {
  const router = useRouter();
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

  const handleSetState = useCallback(
    (stateChange: (prevState: SettingListState) => SettingListState) => {
      setState((prevState) => {
        const newState = stateChange(prevState);
        return R.equals(prevState, newState) ? prevState : newState;
      });
    },
    []
  );

  const resetSettings = () => {
    handleSetState((prevState) => ({
      ...prevState,
      theme,
      dateFormat: date,
      lang,
    }));
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

  const handleChange = (label: string, value: string) => {
    handleSetState((prevState) => ({
      ...prevState,
      [label]: value,
    }));
  };

  const changeTheme = (value: Theme) => {
    if (THEME_DICTIONARY[value]) {
      setTheme(value);
    }
  };

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (state.theme !== theme) {
      changeTheme(state.theme);
    }

    if (state.lang !== lang) {
      router.push(
        {
          pathname: router.pathname,
          query: router.query,
        },
        router.asPath,
        { locale: state.lang }
      );
      i18n?.changeLanguage(state.lang);
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
