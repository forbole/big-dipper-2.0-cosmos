import { useState } from 'react';
import * as R from 'ramda';

export const useSettingList = ({
  theme,
  changeTheme,
}) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    language: '',
    theme,
    dateDisplay: '',
  });

  const resetSettings = () => {
    handleSetState({
      theme,
      dateDisplay: '',
      language: '',
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

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    if (state.theme !== theme) {
      changeTheme(state.theme);
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
