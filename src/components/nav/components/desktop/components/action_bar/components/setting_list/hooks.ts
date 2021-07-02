import { useState } from 'react';
import * as R from 'ramda';

export const useSettingList = ({
  theme,
}) => {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    language: '',
    theme,
    dateDisplay: '',
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSetState = (stateChange: any) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const handleChange = (label: string, value: any) => {
    console.log(value, 'value');
    handleSetState({
      [label]: value,
    });
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setAge(event.target.value as string);
  // };

  return {
    open,
    handleOpen,
    handleClose,
    state,
    handleChange,
    handleFormSubmit,
  };
};
