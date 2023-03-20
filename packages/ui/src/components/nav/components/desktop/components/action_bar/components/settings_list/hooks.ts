import { i18n } from 'next-i18next';
import * as R from 'ramda';
import { useCallback, useState } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { writeDate, writeTx } from '@/recoil/settings';
import type { Date, Tx } from '@/recoil/settings';

type SettingListState = {
  lang: string;
  dateFormat: Date;
  txListFormat: Tx;
};

export const useSettingList = ({ lang }: { lang: string }) => {
  const [date, setDate] = useRecoilState(writeDate) as [Date, SetterOrUpdater<Date>];
  const [tx, setTx] = useRecoilState(writeTx) as [Tx, SetterOrUpdater<Tx>];

  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    lang,
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

  const handleFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (state.lang !== lang) {
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
